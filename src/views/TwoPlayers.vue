<template>
  <!-- Home container -->
  <section class="two-players-container">
    <!-- Game component -->
    <Game />
  </section>
</template>

<script>
import Game from '../components/Game.vue'
export default {
  components: {
    Game
  }
}
</script>

<style lang="scss">
  @import '../assets/global.scss';

  .two-players-container {
    @include flex(row, center, center);

  }
</style>