<template lang="pug">
    .category-list
        ul
            li(v-for="category in categories" :key="category.id" :style='category.style') 
                router-link(:to="{ name: 'category', params: { categoryId: category.id }}") {{ category.name }}
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Category } from '../entities/category';
import { Api } from '../services/api';

@Component
export default class CategoryList extends Vue {
    categories: Category[] = [];
    api: Api = new Api();

    created() {
        this.api.getCategories()
            .then(categories => {
                this.categories = categories
            });
    }
}
</script>

<style lang="scss">
    .category-list {
        text-align: center;

        ul {
            display: inline;
            padding: 0;

            li {
                display: inline-block;
                padding: 10px;
                border-radius: 5px;
                width: 17%;
                margin: 5px;
                text-align: center;
            }
        }
        a {
            text-decoration: none;
            color: inherit;
        }
    }
</style>
