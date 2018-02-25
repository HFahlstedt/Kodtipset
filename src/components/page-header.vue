<template lang="pug">
    div
        h1 {{ title }}
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
    h1 {
        border-bottom: solid 1px white;
        margin-top: 0;
        padding-bottom: 7px;
        margin-left: 12px;
        margin-right: 12px;
    }
</style>
