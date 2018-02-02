<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

export default class Header extends Vue {
    title: string;

    constructor() {
        super();
        this.title = 'Kodtipset';
    }
}
</script>
