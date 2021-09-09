import { createStore } from 'vuex'

export default createStore({
  state: {
    player1: {
      score: 0, 
      name: 'Jugador 1'
    },
    player2: {
      score: 0, 
      name: 'Bot'
    }, 
    playerTurn: '1', 
    loadAlert: false,
    alert: {
      message: '', 
      classColor: ''
    }
  },
  mutations: {
    /**
     * Set player score.
     * @param {*} state 
     * @param {*} param1 
     */
    setScore(state, {player}) {
      state[player].score += 1
    }, 
    /**
     * set name Player 2.
     * @param {*} state 
     */
    player2(state) {
      state.player2.name = (state.player2.name === 'Bot') ? 'Jugador 2' : 'Bot' 
    },
    /**
     * set player turn.
     */
    setPlayerTurn(state) {
      state.playerTurn = (state.playerTurn === '1') ? '2' : (state.playerTurn === '2') ? '0' : '1' 
    },
    /**
     * set alert loading.
     */
    setAlertLoading(state) {
      state.loadAlert = !state.loadAlert
    },
    /**
     * set alert information.
     */
    setAlertInfo(state, {classColor, message}) {
      state.alert.classColor = classColor 
      state.alert.message = message
    }
  },
  actions: {
    setScore({commit}, payload) {
      commit('setScore', payload)
    }, 
    player2({commit}) {
      commit('player2')
    }, 
    setPlayerTurn({commit}) {
      commit('setPlayerTurn')
    },
    setAlertLoading({commit}) {
      commit('setAlertLoading')
    },
    setAlertInfo({commit}, payload) {
      commit('setAlertInfo', payload)
    }
  }, 
  getters: {
    getPlayer1(state) {
      return state.player1
    }, 
    getPlayer2(state) {
      return state.player2
    }, 
    getPlayerTurn(state) {
      return state.playerTurn
    },
    getAlertLoading(state) {
      return state.loadAlert
    },
    getAlert(state) {
      return state.alert
    }
  }
})
