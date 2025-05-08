<template>
  <dialog ref="dialogRef" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          <CloseIcon size="20"></CloseIcon>
        </button>
      </form>
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <div class="py-4">
        <slot></slot>
      </div>
      <div class="modal-action">
        <slot name="action"></slot>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button></button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, useTemplateRef, watch } from "vue";
import { RiCloseLine as CloseIcon } from "@remixicon/vue";

defineProps({
  // 标题
  title: {
    type: String,
    default: "",
  },
});
// 对话框引用
const dialogRef = useTemplateRef("dialogRef");
// 对话框是否可见
const visible = defineModel();
watch(visible, (val) => {
  if (val) {
    dialogRef.value?.showModal();
  } else {
    dialogRef.value?.close();
  }
});
onMounted(() => {
  dialogRef.value?.addEventListener("close", () => {
    visible.value = false;
  });
});
onBeforeUnmount(() => {
  dialogRef.value?.removeEventListener("close", () => {
    visible.value = false;
  });
});
</script>
