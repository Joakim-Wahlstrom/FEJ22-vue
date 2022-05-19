import { defineStore } from "pinia";
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    name: '',
    email: '',
    id: '',
    error: null
  }),

  actions: {
    async registerUser(userCredetials) {
      try {
        const res = await axios.post('http://localhost:3000/register', userCredetials)
        if(res.status === 201) {
          this.token = res.data.accessToken
          this.name = res.data.user.name
          this.email = res.data.user.email
          this.id = res.data.user.id
          localStorage.setItem('token', res.data.accessToken)
          this.error = null
        }
      } catch(err) {
        console.log(err.message)
        this.error = err.message
      }
    },
    async login(userCredetials) {
      try {
        const res = await axios.post('http://localhost:3000/login', userCredetials)
        if(res.status === 200) {
          this.token = res.data.accessToken
          this.name = res.data.user.name
          this.email = res.data.user.email
          this.id = res.data.user.id
          localStorage.setItem('token', res.data.accessToken)
          this.error = null
        }
      } catch(err) {
        console.log(err.message)
        this.error = err.message
      }
    }
  }

})