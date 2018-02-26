<template lang="pug">
    td {{ item.title }}
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { ContentData } from "../entities/content-data";

@Component
export default class CategoryContentItem extends Vue  {
    @Prop({default: null}) item: ContentData | null; 
}
</script>

<style lang="scss">
    td {
        padding: 4px;
    }
</style>
