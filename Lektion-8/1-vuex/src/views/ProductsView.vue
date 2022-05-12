<template>
  <div class="products">
    <aside>
      <div>
        <button @click="changeComponent('Grid')"><i class="fa-solid fa-table-cells-large"></i></button>
        <button @click="changeComponent('List')"><i class="fa-solid fa-list"></i></button>
      </div>
      <form>
        <input type="search" placeholder="Search" v-model="searchVal" @keyup="search(searchVal)">
      </form>
    </aside>
     
    <main>
      <component :is="component" />
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  import Grid from '../components/products/GridView.vue'
  import List from '../components/products/ListView.vue'

export default {
  components: { Grid, List },
  data() {
    return {
      searchVal: ''
    }
  },
  computed: {
    ...mapGetters(['component'])
  },
  methods: {
    ...mapActions(['changeComponent', 'search'])
  }
}
</script>

<style scoped>
  .products {
    display: flex;
  }
  aside {
    background-color: #424242;
    flex: 3;
    min-height: calc(100vh - 69.14px);
    padding: 2rem;
  }
  main {
    flex: 10;
  }
  button {
    padding: .2rem;
    margin-right: .5rem;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    color: #fff;
    font-size: 1rem;
    margin-bottom: 3rem;
  }
</style>