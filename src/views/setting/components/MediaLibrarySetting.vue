<template>
  <CheeseCard title="媒体库">
    <div class="flex items-center justify-between">
      <div>未设置</div>
      <button
        class="btn btn-sm btn-circle btn-ghost"
        @click="visible = !visible"
      >
        <EditIcon size="20px"></EditIcon>
      </button>
    </div>
  </CheeseCard>
  <CheeseDialog v-model="visible" title="媒体库配置">
    <fieldset class="fieldset">
      <label class="floating-label mt-5">
        <span>服务地址</span>
        <input
          type="text"
          class="input input-md w-full"
          placeholder="服务地址"
        />
      </label>
      <label class="floating-label mt-5">
        <span>用户名</span>
        <input type="text" class="input input-md w-full" placeholder="用户名" />
      </label>
      <label class="floating-label mt-5">
        <span>密码</span>
        <input
          type="password"
          class="input input-md w-full"
          placeholder="密码"
        />
      </label>
      <button class="btn btn-neutral mt-5">保存</button>
    </fieldset>
  </CheeseDialog>
</template>
<script setup lang="ts">
import CheeseCard from "../../../components/CheeseCard.vue";
import CheeseDialog from "../../../components/CheeseDialog.vue";
import { RiEditLine as EditIcon } from "@remixicon/vue";
import { ref } from "vue";

const visible = ref(false);
</script>
