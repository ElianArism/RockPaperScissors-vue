import { useStore } from 'vuex'
import { computed } from 'vue'
import { PlayerInfo } from './PlayerInfoHook'

export function GameHook() {
  const validMoves = ['rock', 'paper', 'scissors']
  const store = useStore()
  const { player1, player2 } = PlayerInfo()
  const compareMoves = (move1, move2) => {
    console.log(move1, move2)
    if(
      move1 === 'rock' && move2 === 'rock' ||
      move1 === 'paper' && move2 === 'paper' ||
      move1 === 'scissors' && move2 === 'scissors'
    ) {
      store.dispatch('setAlertInfo', {
        message: 'Empate!',
        classColor: 'game-tie'
      })

      return 'tie'
    } else if(
      move1 === 'rock' && move2 === 'scissors' ||
      move1 === 'scissors' && move2 === 'paper' ||
      move1 === 'paper' && move2 === 'rock'
    ) {
      store.dispatch('setAlertInfo', {
        message: 'Victoria para el Jugador 1!',
        classColor: 'game-player1-wins'
      })

      return 'player1'
    } else {
      store.dispatch('setAlertInfo', {
        message: `Victoria para el ${player2.value.name}!`,
        classColor: 'game-player2-wins'
      })

      return 'player2'
    }
  }

  const play = (move, move2 = '') => {
    let whoWon
    
    // store.dispatch('setLoading')

    if(player2.value.name === 'Bot') {
      const randomNumber = Math.floor( (Math.random() * 3) )
      whoWon = compareMoves(move, validMoves[randomNumber])
    } else {
      whoWon = compareMoves(move, move2)
    }

    if(whoWon !== 'tie') {
      store.dispatch('setScore', {player: whoWon})
    }

    store.dispatch('setAlertLoading')
  }
  
  const getLoading = computed(() => {
    return store.getters.getLoading
  })

  const getAlertLoading = computed(() => {
    return store.getters.getAlertLoading
  })

  return {
    getAlertLoading,
    getLoading, 
    play
  }
}