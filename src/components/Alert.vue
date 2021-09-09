<template>
  <!-- Alert container -->
  <article :class="alertColor">
    <p>{{getAlert.message}}</p>
    <br>
    <button :class="buttonColor" @click="setAlertLoading">Jugar otra vez!</button>
  </article>
</template>

<script>
import { computed } from '@vue/reactivity'
import { UIHook } from '../hooks/UIHook'

export default {
  setup() {
    const { getAlert } = UIHook()

    // Get alert classes
    const alertColor = computed(() => {
      return `alert-container ${getAlert.value.classColor}`
    })

    // Get alert button classes
    const buttonColor = computed(() => {
      return (getAlert.value.classColor === 'game-tie') ? 'button-tie' : 
      (getAlert.value.classColor === 'game-player1-wins') ? 'button-player1-wins' : 
      'button-player2-wins'
    })
    
    return {
      alertColor, 
      buttonColor,
      ...UIHook() 
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/global.scss'; 

  // Alert
  .alert-container {
    @include flex(column, center, center); 
    border-radius: 10px;
    color: var(--color-white);
    height: 80%;
    margin: auto;
    padding: 1rem;
    width: 90%; 
  
    button {
      border: none;
      border-radius: 10px;
      color: var(--color-white);
      cursor: pointer;
      padding: 1rem;
    }
  }

</style>