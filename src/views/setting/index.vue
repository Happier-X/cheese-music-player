<template>
  <div class="w-full h-full">
    <SettingCard title="媒体库">
      <div class="flex items-center justify-between">
        <div>未设置</div>
        <button class="btn btn-sm btn-circle btn-ghost">
          <EditIcon size="20px"></EditIcon>
        </button>
      </div>
    </SettingCard>
  </div>
</template>
<script setup lang="ts">
import SettingCard from "./components/SettingCard.vue";
import { RiEditLine as EditIcon } from "@remixicon/vue";
</script>
