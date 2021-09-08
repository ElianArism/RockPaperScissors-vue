<template>
  <article class="alert-container">
    <p>{{getAlert.message}}</p>

    <button @click="setAlertLoading">Jugar otra vez!</button>
  </article>
</template>

<script>
import { UIHook } from '../hooks/UIHook'

export default {
  setup() {
    return {
      ...UIHook()
    }
  }
}
</script>

<style>

</style>