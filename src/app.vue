<template>
    <div>
        <page-header/>
        <category-list/>
        <router-view/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import PageHeader from './components/page-header.vue';
import CategoryList from './components/category-list.vue'
import CategoryContent from './components/category-content.vue';

@Component({
    components: { PageHeader, CategoryList, CategoryContent }
})
export default class App extends Vue {
    title: string;

    constructor() {
        super();
        this.title = 'Kodtipset';
    }
}
</script>
