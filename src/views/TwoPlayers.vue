<template>
  <!-- Home container -->
  <section class="two-players-container">
    <h2 class="title-two-players">{{renderPlayerTurn}}</h2>
    <!-- Game component -->
    <Game />
  </section>
</template>

<script>
import Game from '../components/Game.vue'
import { GameHook } from '../hooks/GameHook'
import { PlayerInfo } from '../hooks/PlayerInfoHook'
import { computed, onMounted } from '@vue/runtime-core'
export default {
  components: {
    Game
  },
  setup() {
    const { setPlayer2Name } = PlayerInfo()
    const { getPlayerTurn } = GameHook()
    onMounted(() => {
      setPlayer2Name()
    })
    
    const renderPlayerTurn = computed(() => {
      if(getPlayerTurn.value === '1') {
        return 'Turno del jugador 1'
      } else if(getPlayerTurn.value === '2') {
        return 'Turno del jugador 2'
      } else {
        return ''
      }
    })

    return {
      ...GameHook(), 
      renderPlayerTurn
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/global.scss';

  .two-players-container {
    @include flex(column, center, center);
  }
  .title-two-players {
    color: var(--color-pink);
    text-align: center;
    padding: 10px;
  }


</style>