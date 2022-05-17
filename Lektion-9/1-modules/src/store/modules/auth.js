

export default {
  state: {
    adminUser: {
      email: "mail@mail.com",
      password: "BytMig123",
      loggedIn: false
    }
  },
  getters: {
    adminCredentials: state => ({email: state.adminUser.email, password: state.adminUser.password}),
    loggedIn: state => state.adminUser.loggedIn
  },
  mutations: {
    LOGIN: state => {
      state.adminUser.loggedIn = true
    },
    LOGOUT: state => {
      state.adminUser.loggedIn = false
    }
  },
  actions: {
    login: ({commit}) => {
      console.log('loggar in')
      commit('LOGIN')
    },
    logout: ({commit}) => {
      commit('LOGOUT')
    }
  }
}