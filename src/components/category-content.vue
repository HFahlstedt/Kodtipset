<template lang="pug">
    .category-content
        h2 {{ category == undefined ? '' : category.name }}
        table
            tr(v-for='row in content' :key='row.id')
                td {{ row.title }}
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { ContentData } from '../entities/content-data';
import { Api } from "../services/api";
import { Category } from '../entities/category';
@Component
export default class CategoryContent extends Vue  {
    @Prop() 
    categoryId: number = 0;
    category: Category = { id: 0, name: ''};
    content: ContentData[];
    api: Api = new Api();

    constructor() {
        super();
                
        this.content = [
            { id: 1, title: 'Test 1'},
            { id: 2, title: 'Test 2'},
            { id: 3, title: 'Test 3'},
        ];
    }

    created() {
        this.getCategory();
    }

    @Watch('$route') onRouteChanged() {
        this.getCategory();
    }

    getCategory(): void  {
        this.api.getCategory(this.categoryId)
            .then(category => {
                this.category = category;
            });
    }
}
</script>
