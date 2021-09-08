<template>
  <div v-if="!getAlertLoading" class="game-table">
    <div @click="play('rock')" class="game-move">
      <i class="fas fa-hand-rock"></i>
    </div>
    <div @click="play('paper')" class="game-move">
      <i class="fas fa-hand-paper"></i>
    </div>
    <div @click="play('scissors')" class="game-move">
      <i class="fas fa-hand-scissors"></i>
    </div>
  </div>

  <!-- <div  class="game-loading-spinner">
    <div class="fa-3x">
      <div class="game-move">
        <i class="fas fa-cog fa-spin"></i>
      </div>
    </div>
  </div> -->

  <Alert v-else/>
</template>

<script>
import {GameHook} from '../hooks/GameHook.js'
import {UIHook} from '../hooks/UIHook.js'
import Alert from './Alert.vue'
export default {
  components: {
    Alert
  },
  setup() {

    return {
      ...GameHook(),
      ...UIHook()
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/global.scss';
  // General
  .game-table {
    @include flex(row, space-around, center);
    border-radius: 10px;
    height: 90%;
    margin: auto;
    width: 90%;

    // Move styles
    .game-move {
      color: var(--color-pink);
      font-size: 7rem;
      transition: transform 300ms, filter 300ms;

      &:hover {
        cursor: pointer;
        filter: drop-shadow(0 0 10px var(--color-white-pink));
        transform: scale(1.1);
        transition: transform 300ms, filter 300ms;
      }
    }
  }

</style>