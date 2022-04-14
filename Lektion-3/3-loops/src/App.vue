<template>
  <NamesList :names="names" />
  <NamesLoop :names="names" />
</template>

<script>
import NamesList from './components/NamesList.vue'
import NamesLoop from './components/NamesLoop.vue'
export default {
  components: { NamesList, NamesLoop },
  data() {
    return {
      names: ['Joakim', 'Hans', 'Jeanette', 'Tommy', 'Haitem', 'Jack', 'Joakim']
    }
  }
}
</script>

<style>

</style>
