<template>
  <PageTitle />
  <div class="container">
    <ExampleOne class="mt-1" />
    <ExampleTwo class="mt-1" />
    <ExampleTree class="mt-1" />
  </div>
</template>

<script>
import PageTitle from './components/PageTitle.vue'
import ExampleOne from './components/ExampleOne.vue'
import ExampleTwo from './components/ExampleTwo.vue'
import ExampleTree from './components/ExampleTree.vue'
export default {
  components: { 
    PageTitle, 
    ExampleOne, 
    ExampleTwo, 
    ExampleTree,
    },

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
  .mt-1 {
    margin-top: 2rem;
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
</style>