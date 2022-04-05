<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">

    <Card :imgURL="imgOne" title="Title 1" body="Hej på dig, hur är läget?" />
    <Card imgURL="img/bild2.jpg" title="Title 2" body="lkasjd jakls asdjksdj  jsdksj dkj sdkjs alkjs d" />
    <Card imgURL="https://images.pexels.com/photos/3008100/pexels-photo-3008100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: { Card },
  data() {
    return {
      imgOne: require('@/assets/img/bild1.jpg')
    }
  }

}
</script>

<style>

</style>