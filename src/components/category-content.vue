<template lang="pug">
    .category-content-container
        .category-content
            h2 {{ category == undefined ? '' : category.name }}
            table(v-if='category')
                tr(v-for='row in category.content' :key='row.id')
                    category-content-item(:item="row")
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Prop, Watch, Vue } from 'vue-property-decorator';
import { ContentData } from '../entities/content-data';
import { Api } from "../services/api";
import { Category } from '../entities/category';
import CategoryContentItem from './category-content-item.vue';

@Component({ components: { CategoryContentItem }})
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

<style lang="scss">
    @import '../colors';

    .category-content-container {
        text-align: center;

        .category-content {
            text-align: left;
            margin-left: 45px;
            margin-right: 45px;

            table {
                width: 100%;
                border-collapse: collapse;
                line-height: 2rem;
                border: 1px solid white;

                tr:nth-child(odd) {
                    background-color: lighten($color: $main-background, $amount: 10);
                }

                tr:nth-child(even) {
                    background-color: darken($color: $main-background, $amount: 10);
                }
            }
        }
    }
</style>
