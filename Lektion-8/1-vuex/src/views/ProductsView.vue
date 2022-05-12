<template>
  <div class="products">
    <aside>
      <div>
        <button @click="changeComponent('Grid')"><i class="fa-solid fa-table-cells-large"></i></button>
        <button @click="changeComponent('List')"><i class="fa-solid fa-list"></i></button>
      </div>
      <form>
        <input type="search" placeholder="Search">
      </form>
    </aside>
     
    <main>
      <component :is="comp" />
    </main>
  </div>
</template>

<script>
  import Grid from '../components/products/GridView.vue'
  import List from '../components/products/ListView.vue'

export default {
  components: { Grid, List },
  data() {
    return {
      comp: 'List'
    }
  },
  methods: {
    changeComponent(val) {
      this.comp = val
    }
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