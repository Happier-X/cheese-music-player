<template>
  <div
    data-tauri-drag-region
    class="w-full h-full px-3 flex items-center justify-between"
  >
    <div
      class="w-full h-full flex items-center justify-start"
      data-tauri-drag-region
    >
      Cheese Player
    </div>
    <div
      class="w-full h-full flex items-center justify-end gap-2"
      data-tauri-drag-region
    >
      <div
        class="tooltip tooltip-bottom"
        :data-tip="isFullScreen ? '退出全屏' : '全屏'"
      >
        <button
          class="btn btn-xs btn-square btn-ghost"
          @click="handleSwitchFullScreen"
        >
          <component
            :is="isFullScreen ? ExitFullScreenIcon : FullScreenIcon"
            size="16px"
          />
        </button>
      </div>
      <div class="tooltip tooltip-bottom" data-tip="最小化">
        <button class="btn btn-xs btn-square btn-ghost" @click="handleMinimize">
          <MinimizeIcon size="16px"></MinimizeIcon>
        </button>
      </div>
      <div
        class="tooltip tooltip-bottom"
        :data-tip="isMaximized ? '还原' : '最大化'"
      >
        <button
          class="btn btn-xs btn-square btn-ghost"
          @click="handleSwitchScreenSize"
        >
          <component
            :is="isMaximized ? UnMaximizeIcon : MaximizeIcon"
            size="16px"
          />
        </button>
      </div>
      <div class="tooltip tooltip-bottom" data-tip="关闭">
        <button class="btn btn-xs btn-square btn-ghost" @click="handleClose">
          <CloseIcon size="16px"></CloseIcon>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  RiFullscreenLine as FullScreenIcon,
  RiFullscreenExitLine as ExitFullScreenIcon,
  RiSubtractLine as MinimizeIcon,
  RiCheckboxBlankLine as MaximizeIcon,
  RiCheckboxMultipleBlankLine as UnMaximizeIcon,
  RiCloseLine as CloseIcon,
} from "@remixicon/vue";
import { ref, onMounted } from "vue";
import { getCurrentWindow } from "@tauri-apps/api/window";

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
};
/**
 * 最小化
 */
const handleMinimize = async () => {
  await appWindow.minimize();
};
/**
 * 切换屏幕大小
 */
const handleSwitchScreenSize = async () => {
  await appWindow.toggleMaximize();
};
/**
 * 关闭
 */
const handleClose = async () => {
  await appWindow.close();
};
</script>
