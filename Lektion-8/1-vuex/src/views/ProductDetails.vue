<template>
  <div v-if="product">
    <p>ID: {{ product.id }}</p>
    <p>NAME: {{ product.name }}</p>
    <p>PRICE: {{ product.price }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  computed: {
    ...mapGetters(['product'])
  },
  methods: {
    ...mapActions(['getProduct']),
  },
  created() {
    this.getProduct(this.id)
  }
}
</script>

<style>

</style>