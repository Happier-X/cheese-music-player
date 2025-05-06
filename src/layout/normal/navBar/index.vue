<template>
  <div class="w-full h-full px-3 flex items-center justify-between">
    <div class="w-full h-full flex items-center">
      <div class="tooltip tooltip-top" data-tip="后退">
        <button
          class="btn btn-sm btn-square btn-ghost"
          :class="{ 'btn-disabled': !canGoBack }"
          @click="handleBack"
        >
          <GoBackIcon size="24px"></GoBackIcon>
        </button>
      </div>
      <div class="tooltip tooltip-top" data-tip="前进">
        <button
          class="btn btn-sm btn-square btn-ghost"
          :class="{ 'btn-disabled': !canGoForward }"
          @click="handleForward"
        >
          <GoForwardIcon size="24px"></GoForwardIcon>
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center gap-20">
      <div
        v-for="(item, index) in mainMenuList"
        :key="index"
        class="tooltip tooltip-top rounded-box p-1 text-gray-400 hover:text-neutral text-nowrap font-bold"
        :data-tip="item.name"
      >
        <RouterLink
          :to="item.path"
          :class="{ 'text-neutral': activeMenuKey === item.key }"
        >
          {{ item.name }}
          <!-- <component :is="item.icon"></component> -->
        </RouterLink>
      </div>
    </div>
    <div class="w-full h-full flex items-center">
      <!-- <label class="input">
        <svg
          class="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" />
      </label> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  RiArrowLeftSLine as GoBackIcon,
  RiArrowRightSLine as GoForwardIcon,
  RiAlbumFill as AlbumIcon,
  RiUserFill as ArtistIcon,
  RiMusicFill as MusicIcon,
  RiFileList2Fill as SongListIcon,
} from "@remixicon/vue";
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";

// 路由器对象
const router = useRouter();
// 路由对象
const route = useRoute();
/**
 * 后退
 */
const handleBack = () => {
  router.back();
};
/**
 * 前进
 */
const handleForward = () => {
  router.forward();
};
// 是否可以后退
const canGoBack = ref(false);
// 是否可以前进
const canGoForward = ref(false);
// 监听路由变化
watch(route, () => {
  canGoBack.value = window.history.state?.back !== null;
  canGoForward.value = window.history.state?.forward !== null;
  activeMenuKey.value = route.path.split("/")[1];
});
// 当前选中的菜单
const activeMenuKey = ref("song");
// 主菜单列表
const mainMenuList = ref([
  {
    name: "歌曲",
    key: "song",
    path: "/song",
    icon: MusicIcon,
  },
  {
    name: "专辑",
    key: "album",
    path: "/album",
    icon: AlbumIcon,
  },
  {
    name: "歌手",
    key: "artist",
    path: "/artist",
    icon: ArtistIcon,
  },
  {
    name: "歌单",
    key: "songList",
    path: "/songList",
    icon: SongListIcon,
  },
]);
</script>
