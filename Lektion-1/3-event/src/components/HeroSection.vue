<template>
  <div class="container my-5 py-5 z-depth-1">

    
    <!--Section: Content-->
    <section class="text-center px-md-5 mx-md-5 dark-grey-text">
      
      <div class="row mb-5">
        <div class="col-md-4 mx-auto">
          <div class="view mb-4 pb-2">
            <img v-on:mouseover="mouseOver" src="https://mdbootstrap.com/img/illustrations/undraw_connected_world_wuay.svg" class="img-fluid" alt="smaple image">
          </div>
        </div>
      </div>

    
      <button v-on:click="handleClick" type="button" class="btn btn-primary btn-rounded">Design your site now</button>

    </section>
    <!--Section: Content-->

    
  </div>
</template>

<script>
export default {
  methods: {
    mouseOver() {
      console.log('du hovrade över bilden')
    },
    handleClick(e) {
      console.log('Du klickade på knappen')
      console.log(e)
    }
  }
}
</script>

<style>

</style>