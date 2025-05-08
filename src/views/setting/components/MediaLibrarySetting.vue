<template>
  <CheeseCard title="媒体库">
    <div class="flex items-center justify-between">
      <div>服务器配置</div>
      <button
        class="btn btn-sm btn-circle btn-ghost"
        @click="visible = !visible"
      >
        <EditIcon size="20px"></EditIcon>
      </button>
    </div>
  </CheeseCard>
  <CheeseDialog v-model="visible" title="服务器配置">
    <fieldset class="fieldset">
      <label class="floating-label">
        <span>服务地址</span>
        <input
          type="text"
          class="input input-md w-full"
          placeholder="服务地址"
        />
      </label>
      <label class="floating-label mt-6">
        <span>用户名</span>
        <input type="text" class="input input-md w-full" placeholder="用户名" />
      </label>
      <label class="floating-label mt-6">
        <span>密码</span>
        <input
          type="password"
          class="input input-md w-full"
          placeholder="密码"
        />
      </label>
    </fieldset>
    <template #action>
      <button class="btn" @click="handleDialogClose">关闭</button>
      <button class="btn btn-neutral" @click="visible = false">保存</button>
    </template>
  </CheeseDialog>
</template>
<script setup lang="ts">
import CheeseCard from "../../../components/CheeseCard.vue";
import CheeseDialog from "../../../components/CheeseDialog.vue";
import { RiEditLine as EditIcon } from "@remixicon/vue";
import { ref } from "vue";

// 是否展示对话框
const visible = ref(false);
// 关闭对话框
const handleDialogClose = () => {
  visible.value = false;
};
</script>
