<template>
  <div
    data-tauri-drag-region
    class="w-full h-full p-3 flex items-center justify-between"
  >
    <div
      class="w-full h-full flex items-center justify-start"
      data-tauri-drag-region
    >
      <div class="tooltip tooltip-bottom" data-tip="后退">
        <button
          class="btn btn-sm btn-circle btn-ghost"
          :class="{ 'btn-disabled': !canGoBack }"
          @click="handleBack"
        >
          <GoBackIcon size="18px"></GoBackIcon>
        </button>
      </div>
      <div class="tooltip tooltip-bottom" data-tip="前进">
        <button
          class="btn btn-sm btn-circle btn-ghost"
          :class="{ 'btn-disabled': !canGoForward }"
          @click="handleForward"
        >
          <GoForwardIcon size="18px"></GoForwardIcon>
        </button>
      </div>
    </div>
    <div
      class="w-full h-full flex items-center justify-end"
      data-tauri-drag-region
    >
      <div
        class="tooltip tooltip-bottom"
        :data-tip="isFullScreen ? '退出全屏' : '全屏'"
      >
        <button
          class="btn btn-sm btn-circle btn-ghost"
          @click="handleSwitchFullScreen"
        >
          <component
            :is="isFullScreen ? ExitFullScreenIcon : FullScreenIcon"
            size="18px"
          />
        </button>
      </div>
      <div class="tooltip tooltip-bottom" data-tip="最小化">
        <button class="btn btn-sm btn-circle btn-ghost" @click="handleMinimize">
          <MinimizeIcon size="18px"></MinimizeIcon>
        </button>
      </div>
      <div
        class="tooltip tooltip-bottom"
        :data-tip="isMaximized ? '还原' : '最大化'"
      >
        <button
          class="btn btn-sm btn-circle btn-ghost"
          @click="handleSwitchScreenSize"
        >
          <component
            :is="isMaximized ? UnMaximizeIcon : MaximizeIcon"
            size="18px"
          />
        </button>
      </div>
      <div class="tooltip tooltip-bottom" data-tip="关闭">
        <button class="btn btn-sm btn-circle btn-ghost" @click="handleClose">
          <CloseIcon size="18px"></CloseIcon>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  RiArrowLeftSLine as GoBackIcon,
  RiArrowRightSLine as GoForwardIcon,
  RiFullscreenLine as FullScreenIcon,
  RiFullscreenExitLine as ExitFullScreenIcon,
  RiSubtractLine as MinimizeIcon,
  RiCheckboxBlankLine as MaximizeIcon,
  RiCheckboxMultipleBlankLine as UnMaximizeIcon,
  RiCloseLine as CloseIcon,
} from "@remixicon/vue";
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getCurrentWindow } from "@tauri-apps/api/window";
// 路由器对象
const router = useRouter();
// 路由对象
const route = useRoute();
/**
 * 后退
 */
const handleBack = () => {
  router.back();
}
/**
 * 前进
 */
const handleForward = () => {
  router.forward();
}
// 是否可以后退
const canGoBack = ref(false);
// 是否可以前进
const canGoForward = ref(false);
// 监听路由变化
watch(route, () => {
  canGoBack.value = window.history.state?.back !== null;
  canGoForward.value = window.history.state?.forward !== null;
});
// 窗口对象
const appWindow = getCurrentWindow();
// 是否全屏
const isFullScreen = ref(false);
// 是否最大化
const isMaximized = ref(false);
onMounted(async () => {
  isMaximized.value = await appWindow.isMaximized();
  isFullScreen.value = await appWindow.isFullscreen();
  appWindow.onResized(async () => {
    isMaximized.value = await appWindow.isMaximized();
  });
});
/**
 * 切换全屏
 */
const handleSwitchFullScreen = async () => {
  isFullScreen.value = !isFullScreen.value;
  await appWindow.setFullscreen(isFullScreen.value);
}
/**
 * 最小化
 */
const handleMinimize = async () => {
  await appWindow.minimize();
}
/**
 * 切换屏幕大小
 */
const handleSwitchScreenSize = async () => {
  await appWindow.toggleMaximize();
}
/**
 * 关闭
 */
const handleClose = async () => {
  await appWindow.close();
}
</script>
