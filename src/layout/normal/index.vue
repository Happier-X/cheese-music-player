<template>
  <div class="w-full h-full flex bg-base-100">
    <div class="w-[65px] h-full bg-base-200">
      <SideBar></SideBar>
    </div>
    <div class="w-[calc(100%-65px)] h-full">
      <div class="w-full h-[60px]">
        <TopBar></TopBar>
      </div>
      <div class="w-full h-[calc(100%-135px)]">
        <RouterView v-slot="{ Component }">
          <KeepAlive>
            <component :is="Component"></component>
          </KeepAlive>
        </RouterView>
      </div>
      <div class="w-full h-[75px]">
        <PlayBar></PlayBar>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SideBar from "./sideBar/index.vue";
import TopBar from "./topBar/index.vue";
import PlayBar from "./playBar/index.vue";
</script>
