import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'

export function UIHook() {
  const store = useStore()

  const getAlert = computed(() => {
    return store.getters.getAlert
  })

  const getAlertLoading = computed(() => {
    return store.getters.getAlertLoading
  })

  const setAlertLoading = () => {
    store.dispatch('setAlertLoading')
    // store.dispatch('setLoading')
  }

  return {
    getAlert, 
    getAlertLoading, 
    setAlertLoading
  }
}