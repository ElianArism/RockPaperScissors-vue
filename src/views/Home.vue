<template>
  <!-- Home container -->
  <div class="home">
    <!-- Game component -->
    <Game />
  </div>
</template>

<script>
import Game from '../components/Game.vue'

export default {
  name: 'Home',
  components: {
    Game
  }

}
</script>

<style lang="scss">
  @import '../assets/global.scss';
  
  .home {
    @include flex(row, center, center);
    width: 100%;
    height: 100%;
  }
</style>