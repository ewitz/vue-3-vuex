<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <counter />
    <counter-squared />
    <color-code />
    <div class="buttons">
      <!-- note: use commit if you want to go straight to mutations,
      but don't ever do that for async method calls, always use Actions -->
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    //remember camel casing gets converted automagically into kebab casing in HTML
    'counter': require('@/components/Counter').default,
    'counterSquared': require('@/components/CounterSquared').default,
    'colorCode': require('@/components/ColorCode').default
  }
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
