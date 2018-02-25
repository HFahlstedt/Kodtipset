<template lang="pug">
    .category-content
        h2 {{ category == undefined ? '' : category.name }}
        table(v-if='category')
            tr(v-for='row in category.content' :key='row.id')
                td {{ row.title }}
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { ContentData } from '../entities/content-data';
import { Api } from "../services/api";
import { Category } from '../entities/category';
import { RawLocation, Route } from "vue-router/types/router";

@Component
export default class CategoryContent extends Vue  {
    category: Category | null = null;
    api: Api = new Api();

    created() {
        this.getCategory(1);
    }

    @Watch('$route') 
    onRouteChanged() {
        this.getCategory(+this.$route.params.categoryId);
    }

    getCategory(categoryId: number): void  {
        this.api.getCategory(categoryId)
            .then(category => {
                this.category = category;
            });
    }
}
</script>
