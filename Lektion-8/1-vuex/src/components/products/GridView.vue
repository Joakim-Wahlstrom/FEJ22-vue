<template>
  <button class="btn" @click="addToPrice(10)">ADD</button>
  <button class="btn" @click="subAsync(10)">SUB</button>
  <div class="grid">
    <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" class="card" />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { ProductCard },
  computed: {
    ...mapGetters(['taxedProducts', 'products', 'filteredProducts'])
  },
  methods: {
    ...mapActions(['addToPrice', 'subAsync'])
  }
}
</script>

<style scoped>
  .grid {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  .card {
    background-color: #00635a;
    color: #fff;
  }
</style>