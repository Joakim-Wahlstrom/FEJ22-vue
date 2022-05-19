import { defineStore } from "pinia";
import axios from 'axios'

export const useEventsStore = defineStore('events', {
  state: () => ({
    list: [],
    loading: false,
    error: null
  }),
  actions: {
    async getEvents() {
      this.loading = true
      try {
        const res = await axios.get('http://localhost:3000/events')
        this.list = res.data
        this.loading = false
      } catch (err) {
        this.loading = false
        this.error = err.message
      }
    }
  }
})