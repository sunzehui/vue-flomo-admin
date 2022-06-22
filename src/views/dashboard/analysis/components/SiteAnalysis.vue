<template>
  <Card title="文章发布" v-bind="$attrs">
    <pushAnalysis />
  </Card>
</template>
<script lang="ts" setup>
  import { Card } from 'ant-design-vue';
  import pushAnalysis from './pushAnalysis.vue';
</script>
