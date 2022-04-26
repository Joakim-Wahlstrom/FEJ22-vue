import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App).mount('#app')

// app.directive('focus', {
//   mounted: el => {
//     el.focus()
//   }
// })

app.directive("color", {
  beforeMount: (el) => {
    el.style.color = '#' + Math.random().toString().slice(2, 8)
  }
})

app.directive("font-size", {
  beforeMount: (el) => {
    el.style.fontSize = 20 + "px";},
  updated: (el) => {
    el.style.fontSize = 20 + "px";},
  });