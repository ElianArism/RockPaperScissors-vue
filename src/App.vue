<template>
  <main class="container">
    <Header />
    <router-view/>
  </main>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  },
  setup() {

  }
};
</script>


<style lang="scss">
  :root {
    --color-pink: #E05D5D; 
    --color-white-pink: #ff9e9e; 
    --color-black: #333; 
    --color-white: #f3f3f3;
    --color-white-yellow: #FFF8E5;
    --color-orange: #FFB344; 
    --color-white-orange: #faebc1;
  }

  * {
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding :0; 
    text-decoration: none;
    user-select: none;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  body, .container {
    background-color: var(--color-white-yellow);
    min-height: 100vh;
    width: 100%;
  }

  .container {
    display: grid;
    grid-template-rows: auto 1fr;
  }
  
  .header-color {
    background-color: var(--color-orange);
  }
  .game-title-color {
    color: var(--color-pink);
  }
  .game-container-color {
    background-color: var(--color-white-orange);
  }
</style>
