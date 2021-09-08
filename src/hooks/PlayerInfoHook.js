import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'

export function PlayerInfo() {
  const store = useStore()

  const player1 = computed(() => {
    return store.getters.getPlayer1
  })
  
  const player2 = computed(() => {
    return store.getters.getPlayer2
  })

  const loadingMove = computed(() => {
    return store.getters.loadingMove
  })

  const setPlayer2Name = () => {
    store.dispatch('setName')
  }

  return {
    player1, 
    player2, 
    loadingMove,
    setPlayer2Name
  }
}