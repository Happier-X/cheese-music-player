<template>
  <div class="card shadow">
    <div class="card-body">
      <div class="card-title">{{ title }}</div>
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  // 卡片标题
  title: {
    type: String,
    default: "",
  },
});
</script>
