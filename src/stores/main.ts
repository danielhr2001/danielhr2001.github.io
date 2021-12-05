import { acceptHMRUpdate, defineStore } from 'pinia'
import { api as mainAPI } from '@/apis/mainAPI'

export const useMainStore = defineStore({
  id: 'main',

  state: () => ({
    me: {},

    /**
     * Current named of the user.
     */
    savedName: '',
    previousNames: new Set<string>(),
  }),

  getters: {
    isReady: (state): boolean => !!Object.keys(state.me).length,

    usedNames(state): string[] {
      return Array.from(state.previousNames)
    },

    otherNames(state): string[] {
      return this.usedNames.filter((name) => name !== state.savedName)
    },
  },

  actions: {
    initialize(): Promise<void> | void {
      // if (!cookiz.get('AUTH_TOKEN')) { return router.push('/login') }
      // else if (['Login', 'Signup'].includes(route.name)) { return }

      if (this.isReady) return

      return new Promise((resolve, reject) => {
        mainAPI
          .get('/me/')
          .then((res) => {
            this.me = res.data
            resolve()
          })
          .catch(reject)
      })
    },

    /**
     * Changes the current name of the user and saves the one that was used
     * before.
     *
     * @param name - new name to set
     */
    setNewName(name: string) {
      if (this.savedName) this.previousNames.add(this.savedName)
      this.savedName = name
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
