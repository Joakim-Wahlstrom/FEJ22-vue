<template>
  <button class="btn" @click="add(10)">ADD</button>
  <button class="btn">SUB</button>
  <div class="grid">
    <ProductCard v-for="product in taxedProducts" :key="product.id" :product="product" class="card" />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: 200 },
        { id: 2, name: 'Product 2', price: 299 },
        { id: 3, name: 'Product 3', price: 500 },
        { id: 4, name: 'Product 4', price: 100 },
        { id: 5, name: 'Product 5', price: 234 },
        { id: 6, name: 'Product 6', price: 999 },
        { id: 7, name: 'Product 7', price: 222 },
        { id: 8, name: 'Product 8', price: 200 },
        { id: 9, name: 'Product 9', price: 300 },
        { id: 10, name: 'Product 10', price: 400 },
        { id: 11, name: 'Product 11', price: 500 },
        { id: 12, name: 'Product 12', price: 600 },
        { id: 13, name: 'Product 13', price: 700 },
        { id: 14, name: 'Product 14', price: 800 },
        { id: 15, name: 'Product 15', price: 900 }
      ]
    }
  },
  computed: {
    taxedProducts() {
      return this.products.map(product => {
        return {
          ...product,
          name: product.name + ' + tax',
          price: product.price * 1.2
        }
      })
    }
  },
  methods: {
    add(amount) {
      this.products.forEach(product => {
        product.price += amount
      })
    }
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