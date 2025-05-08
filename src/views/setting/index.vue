<template>
  <div class="w-full h-full">
    <CheeseCard title="媒体库">
      <div class="flex items-center justify-between">
        <div>未设置</div>
        <button class="btn btn-sm btn-circle btn-ghost" @click="test = !test">
          <EditIcon size="20px"></EditIcon>
        </button>
      </div>
    </CheeseCard>
  </div>
  <CheeseDialog v-model="test"></CheeseDialog>
</template>
<script setup lang="ts">
import CheeseCard from "../../components/CheeseCard.vue";
import CheeseDialog from "../../components/CheeseDialog.vue";
import { RiEditLine as EditIcon } from "@remixicon/vue";
import { ref } from "vue";

const test = ref(false);
</script>
