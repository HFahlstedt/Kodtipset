<template>
  <div class="category-list">
      <ul>
          <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
      </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

import { Category } from '../entities/category';

export default class Categories extends Vue {
    categories: Category[];

    constructor() {
        super();
        
        this.categories = [
            new Category(1, 'Spel'), 
            new Category(2, 'Hårdvara'), 
            new Category(3, 'Programmeringsspråk'), 
            new Category(4, 'Utbildning'), 
            new Category(5, 'Böcker')
        ];
    }
}
</script>
