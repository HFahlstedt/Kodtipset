<template lang="pug">
    div
        h1 {{ title }}
        hr
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class PageHeader extends Vue {
    title: string;

    constructor() {
        super();
        this.title = 'Kodtipset';
    }
}
</script>

<style lang="scss">
    body {
        color: white;
        background: rgb(115, 187, 255);
        font-family: Arial, Helvetica, sans-serif;
    }
    hr {
        border-top: solid 1px white;
    }
</style>
