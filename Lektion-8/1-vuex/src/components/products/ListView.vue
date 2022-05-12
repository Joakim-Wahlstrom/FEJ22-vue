<template>
  <button @click="addToPrice" class="btn">ADD</button>
  <button @click="sub" class="btn">SUB</button>
  <div class="list">
    <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" class="card" />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  computed: {
    products() {
      return this.$store.getters.products
    },
    prodTax() {
      return this.$store.getters.taxedProducts
    },
    filteredProducts() {
      return this.$store.getters.filteredProducts
    }
  },
  methods: {
    addToPrice() {
      // this.$store.state.products.forEach(product => {
      //   product.price += 10
      // })
      // this.$store.commit('ADD', 1)
      this.$store.dispatch('addToPrice', 10)
    },
    sub() {
      // this.$store.commit('SUB', 100)
      this.$store.dispatch('subAsync', 100)
    }
  }
}
</script>

<style scoped>
  .card {
    margin: 1rem;
    background-color: #424242;
    color: #fff;
    display: flex;
    justify-content: space-between;
  }
</style>