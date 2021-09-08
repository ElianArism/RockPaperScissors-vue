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
    loadingMove: false, 
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
      state.player2.name = (state.player2.name === 'bot') ? 'Jugador 2' : 'Bot' 
    },
    /**
     * set Loading.
     */
    setLoading(state) {
      state.loadingMove = !state.loadingMove
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
      state.alert = { classColor, message }
    }
  },
  actions: {
    setScore({commit}, payload) {
      commit('setScore', payload)
    }, 
    player2({commit}) {
      commit('player2')
    }, 
    setLoading({commit}) {
      commit('setLoading')
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
    getLoading(state) {
      return state.loadingMove
    },
    getAlertLoading(state) {
      return state.loadAlert
    },
    getAlert(state) {
      return state.alert
    }
  }
})
