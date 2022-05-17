import axios from 'axios'

export default {
  state: {
    list: [],
    loading: false,
    error: null
  },
  getters: {
    users: state => state.list,
    loading: state => state.loading,
    error: state => state.error
  },
  mutations: {
    LOADING: state => {
      state.loading = true
    },
    SET_USERS: (state, payload) => {
      state.loading = false
      state.list = payload
    },
    SET_ERROR: (state, payload) => {
      state.loading = false
      state.error = payload
    },
    TOGGLE_ACTIVE_STATE: (state, payload) => {
      payload.user.active = payload.res.active
    }
  },
  actions: {
    getUsers: async ({ commit }) => {
      commit('LOADING')
      try {
        const res = await axios.get('http://localhost:3000/users')
        commit('SET_USERS', res.data)
      } catch (err) {
        commit('SET_ERROR', err.message)
      }
    },
    toggleActive: async ({commit}, user) => {
      const res = await axios.patch('http://localhost:3000/users/' + user.id, { active: !user.active})
      if(res.status === 200)
      commit('TOGGLE_ACTIVE_STATE', {user, res: res.data})
    }
  }
}