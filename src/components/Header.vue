
<template>
  <!-- Header -->
  <header class="header header-color">
    <!-- Link -->
    <router-link class="link" to="/">
      Inicio
    </router-link>

    <a>|</a>

    <!-- Link -->
    <router-link class="link" to="/two-players">
      Dos jugadores
    </router-link>
  </header>
</template>

<script>

export default {
  name: 'Header', 
  setup() {

  }
}
</script>

<style lang="scss">
  @import '../assets/global.scss';

  // General
  .header { 
    @include flex(row, center, center);
    font-size: 1.3rem;
    height: 60px;
    padding: 20px;

    a {
      padding: 10px;
      color: var(--color-white-yellow);
    }

    .link {
      transition: color 300ms;
     
     &:hover {
        color: var(--color-pink); 
        transition: color 300ms; 
      }
    }
  }

</style>