<template>
  <!-- Game table container -->
  <div v-if="!getAlertLoading" class="game-table">
    <div @click="playGame('rock')" class="game-move">
      <i class="fas fa-hand-rock"></i>
    </div>
    <div @click="playGame('paper')" class="game-move">
      <i class="fas fa-hand-paper"></i>
    </div>
    <div @click="playGame('scissors')" class="game-move">
      <i class="fas fa-hand-scissors"></i>
    </div>
  </div>

  <Alert v-else/>
</template>

<script>
import {PlayerInfo} from '../hooks/PlayerInfoHook.js'
import {GameHook} from '../hooks/GameHook.js'
import {UIHook} from '../hooks/UIHook.js'
import Alert from './Alert.vue'
export default {
  components: {
    Alert
  },
  setup() {
    const {player2} = PlayerInfo()
    const {play, setPlayerTurn} = GameHook()
    let mov1, mov2
    /**
     * Control the game behavior
     * @param mov {string}
     */
    const playGame = (mov) => {
      if(player2.value.name !== 'Bot') {
        if(mov1) {
          mov2 = mov
          setPlayerTurn()
        } else {
          mov1 = mov
          setPlayerTurn()
        }
        if(mov1 && mov2) {
          play(mov1, mov2)
          resetMoves()
        }
      } else {
        mov1 = mov
        play(mov1)
        resetMoves()
      }
    }

    /**
     * Reset game
     */
    const resetMoves = () => {
      mov1 = null
      mov2 = null
    }

    return {
      ...UIHook(),
      playGame
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

    @media screen and (max-width: 870px) {
      .game-move {
        font-size: 5rem;
      }
    } 

     @media screen and (max-width: 430px) {
       .game-move {
        font-size: 2.5rem;
      }
     }
  }

</style>