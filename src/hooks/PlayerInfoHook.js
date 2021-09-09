import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'

export function PlayerInfo() {
  const store = useStore()

  // Get player1 info
  const player1 = computed(() => {
    return store.getters.getPlayer1
  })

  // Get player2 info
  const player2 = computed(() => {
    return store.getters.getPlayer2
  })

  // Get loading move 
  const loadingMove = computed(() => {
    return store.getters.loadingMove
  })

  // set player2 (Bot or player2)
  const setPlayer2Name = () => {
    store.dispatch('player2')
  }

  return {
    player1, 
    player2, 
    loadingMove,
    setPlayer2Name
  }
}