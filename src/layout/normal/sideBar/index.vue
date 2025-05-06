<template>
  <div class="w-full h-full flex flex-col items-center justify-between p-3">
    <div class="flex flex-col items-center justify-center gap-3">
      <div class="flex items-center justify-center">
        <img class="select-none" src="../../../assets/logo.png" alt="logo">
      </div>
      <div class="flex flex-col items-center justify-center gap-3">
        <div
          v-for="(item, index) in mainMenuList"
          :key="index"
          class="tooltip tooltip-right rounded-box p-1 text-gray-400 hover:text-neutral"
          :data-tip="item.name"
        >
          <RouterLink
            :to="item.path"
            :class="{ 'text-neutral': activeKey === item.key }"
          >
            <component :is="item.icon"></component>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-3">
      <div
        v-for="(item, index) in bottomMenuList"
        :key="index"
        class="tooltip tooltip-right rounded-box p-1 text-gray-400 hover:text-neutral"
        :data-tip="item.name"
      >
        <RouterLink
          :to="item.path"
          :class="{ 'text-neutral': activeKey === item.key }"
        >
          <component :is="item.icon"></component>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  RiAlbumFill as AlbumIcon,
  RiUserFill as ArtistIcon,
  RiMusicFill as MusicIcon,
  RiSettings4Fill as SettingsIcon,
  RiFileList2Fill as SongListIcon,
} from "@remixicon/vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
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
// 底部菜单列表
const bottomMenuList = ref([
  {
    name: "设置",
    key: "setting",
    path: "/setting",
    icon: SettingsIcon,
  },
]);
// 当前选中的菜单
const activeKey = ref("song");
// 路由对象
const route = useRoute();
// 监听路由变化，更新选中的菜单
watch(route, () => {
  activeKey.value = route.path.split("/")[1];
});
</script>
