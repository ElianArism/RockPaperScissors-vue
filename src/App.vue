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
    --color-blue: rgb(115, 158, 238);
    --button-color-blue: rgb(22, 78, 182);
    --button-color-green: rgb(0, 148, 32);
    --button-color-red: rgb(200, 69, 45);
    --color-green: rgb(82, 194, 125);
    --color-red: rgb(177, 100, 87);
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

  .game-tie, .game-player1-wins, .game-player2-wins,
  .button-tie, .button-player1-wins, .button-player2-wins {
    color: var(--color-white);
  }

  .game-tie {
    background-color: var(--color-green);
  }

  .game-player1-wins {
    background-color: var(--color-blue);
  }

  .game-player2-wins {
    background-color: var(--color-red);
  }

  .button-tie {
    background-color: var(--button-color-green);
  }
    
  .button-player1-wins {
    background-color: var(--button-color-blue);
  }

  .button-player2-wins {
    background-color: var(--button-color-red);
  }
</style>
