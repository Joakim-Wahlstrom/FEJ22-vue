<template>
  <div>
    <button @click="a++">Lägg till på A</button>
    <button @click="b++">Lägg till på B</button>
    <button @click="number++">öka number</button>
    <br>
    <br>
    <p>Nummret är {{ number }}</p>
    <br>
    <p>A = {{ a }}</p>
    <p>B = {{ b }}</p>
    <br><br>
    <p>Nummer + A = {{ numberPlusA }} </p>
    <p>Nummer + B = {{ numberPlusB }} </p>
    <br><br>
    <button @click="price -= 50">REA</button>
    <br>
    priset på varan är: {{ price }} <br>
    priset inklusive moms: {{ priceIncVat }}
  </div>
</template>

<script>
export default {
  name: 'ComputedComponent',
  data() {
    return {
      number: 30,
      a: 0,
      b: 0,
      price: 200
    }
  },
  computed: {
    numberPlusA() {
      console.log('ökade a')
      return this.a + this.number
    },
    numberPlusB() {
      console.log('ökade b')
      return this.b + this.number
    },
    priceIncVat() {
      return this.price * 1.25
    }
  },
  methods: {
    addToA() {
      console.log('ökade a')
      return this.a + this.number
    },
    addToB() {
      console.log('ökade b')
      return this.b + this.number
    }
  }
}
</script>

<style>

</style>