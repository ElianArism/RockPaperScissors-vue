<template>
  <!-- Main game container -->
  <section class="game-container game-container-color">
    <h1 class="game-title game-title-color">Elige tu siguiente movimiento.</h1>

    <!-- Game table -->
    <GameTable />

    <!-- Score table -->
    <div class="score-table">
      <p class="score">{{player1.name}}: {{player1.score}}</p>
      <p class="score">{{player2.name}}: {{player2.score}}</p>
    </div>
  </section>
</template>

<script>
import GameTable from './GameTable.vue'
import { PlayerInfo } from '../hooks/PlayerInfoHook'
export default {
  components: {
    GameTable
  }, 
  setup() {

    return {
      ...PlayerInfo()
    }
   
  }
}
</script>

<style lang="scss">
  @import '../assets/global.scss'; 

  /* General */
  .game-container {
    border-radius: 1rem;
    display: grid; 
    height: 80%;
    grid-template-rows: auto 1fr auto;
    padding: 1rem;
    width: 80%;

    // title
    .game-title {
      text-align: center;
      font-size: 1.5rem;
    }

    // Score table / buttons
    .score-table {
      @include flex(row, space-around, center); 
      padding: 10px;
      width: 100%;
      
      .score {
        background-color: var(--color-pink);
        border-radius: 10px;
        color: var(--color-white-yellow);
        padding: 10px;
      }
    }
  }
</style>