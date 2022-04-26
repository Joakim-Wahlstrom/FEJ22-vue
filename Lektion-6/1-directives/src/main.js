import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// app.directive('focus', {
//   mounted: el => {
//     el.focus()
//   }
// })

app.directive("color", {
  mounted: (el) => {
    el.style.color = '#' + Math.random().toString().slice(2, 8)
  }
})

// app.directive("font-size", {
//   beforeMount: (el) => {
//     el.style.fontSize = 20 + "px";},
//   updated: (el) => {
//     el.style.fontSize = 20 + "px";},
//   });

app.mount('#app')