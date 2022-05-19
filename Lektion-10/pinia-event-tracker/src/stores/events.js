import { defineStore } from "pinia";
import axios from 'axios'
import { useAuthStore } from "./auth";

export const useEventsStore = defineStore('events', {
  state: () => ({
    list: [],
    loading: false,
    error: null
  }),
  getters: {
    upcomingEvents: state => {
      const sorted = state.list.sort((a, b) => a.timestamp - b.timestamp)
      return sorted.filter(evt => evt.timestamp > Date.now())
    },
    oldEvents: state => {
      const sorted = state.list.sort((a, b) => a.timestamp - b.timestamp).reverse()
      return sorted.filter(evt => evt.timestamp < Date.now())
    },
    event: state => {
      return (id) => state.list.find(evt => evt.id == id)
    }
  },
  actions: {
    async getEvents() {
      const authStore = useAuthStore()
      this.loading = true
      try {
        const res = await axios.get('http://localhost:3000/events?userId=' + authStore.id)
        this.list = res.data
        this.loading = false
      } catch (err) {
        this.loading = false
        this.error = err.message
      }
    }
  }
})