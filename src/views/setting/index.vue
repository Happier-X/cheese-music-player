<template>
  <div class="w-full h-full">
    <div class="w-full h-full">
      <div role="tablist" class="tabs tabs-border">
        <a
          role="tab"
          class="tab"
          :class="{ 'tab-active': item.key === activeTabKey }"
          v-for="(item, index) in settingTabList"
          :key="index"
          @click="handleTabItemClick(item)"
          >{{ item.name }}</a
        >
      </div>
      <div class=""></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
// 设置选项卡列表
const settingTabList = ref([
  {
    name: "媒体库",
    key: "mediaLibrary",
  },
  {
    name: "其他设置",
    key: "otherSettings",
  },
]);
// 选中的选项卡 key
const activeTabKey = ref("mediaLibrary");
// 选项卡点击事件
const handleTabItemClick = (item) => {
  activeTabKey.value = item.key;
};
</script>
