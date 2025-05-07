<template>
  <div
    data-tauri-drag-region
    class="w-full h-full px-3 flex items-center justify-between"
  >
    <NavControl></NavControl>
    <WindowControl></WindowControl>
  </div>
</template>
<script setup lang="ts">
import NavControl from "../components/NavControl.vue";
import WindowControl from "../components/WindowControl.vue";
</script>
