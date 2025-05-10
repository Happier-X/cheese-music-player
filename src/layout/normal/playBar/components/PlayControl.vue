<!-- <template>
  <div class="w-full h-full flex items-center justify-center gap-3">
    <button
      class="btn btn-sm btn-circle btn-ghost"
      @click="playerStore.setLoopMode(playerStore.loopMode === 0 ? 1 : 0)"
    >
      <component
        :is="playerStore.loopMode === 0 ? ListLoopIcon : SingleLoopIcon"
        size="18"
      ></component>
    </button>
    <button
      class="btn btn-sm btn-circle btn-ghost"
      @click="playerStore.playPrevious"
    >
      <PreviousIcon size="20"></PreviousIcon>
    </button>
    <button
      class="btn btn-circle"
      @click="
        playerStore.isPlaying ? playerStore.pause() : playerStore.resume()
      "
    >
      <component :is="playerStore.isPlaying ? PauseIcon : PlayIcon"></component>
    </button>
    <button
      class="btn btn-sm btn-circle btn-ghost"
      @click="playerStore.playNext"
    >
      <NextIcon size="20"></NextIcon>
    </button>
    <button
      class="btn btn-sm btn-circle btn-ghost"
      @click="playerStore.setPlayMode(playerStore.playMode === 0 ? 1 : 0)"
    >
      <component
        :is="playerStore.playMode === 0 ? OrderPlayIcon : ShufflePlayIcon"
        size="18"
      ></component>
    </button>
  </div>
</template>
<script setup lang="ts">
import {
  RiPlayFill as PlayIcon,
  RiPauseFill as PauseIcon,
  RiSkipBackFill as PreviousIcon,
  RiSkipForwardFill as NextIcon,
  RiRepeatOneFill as SingleLoopIcon,
  RiRepeat2Fill as ListLoopIcon,
  RiOrderPlayFill as OrderPlayIcon,
  RiShuffleFill as ShufflePlayIcon,
} from "@remixicon/vue";
// import { usePlayerStore } from '@renderer/stores/player'
// 播放器状态管理
const playerStore = {};
</script> -->
