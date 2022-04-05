<template>
  <Header />
  <Carousel />

  <!-- <div class="test">Hej från app.vue</div>
  <p class="hej">testar</p> -->

  <div class="container mt-5">
    <CardDeck />
  </div>
</template>

<script>
import CardDeck from './components/cards/CardDeck.vue'
import Carousel from './components/Carousel.vue'
import Header from './components/Header.vue'
export default {
  components: { Header, Carousel, CardDeck },

}
</script>

<style>
  .test {
    color: blue;
  }
</style>