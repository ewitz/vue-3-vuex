<template>
      <div>
      <!-- don't do this, it's very bad practice --
      <input
      v-model="$store.state.colorCode"
      placeholder="Enter color code"
      type="text"
      >
      -->
      <input
        v-model="colorCode"
        placeholder="Enter color code"
        type="text"
      />
    </div>
</template>

<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode
      },
      set(newVal) {
        this.$store.dispatch('setColorCode', newVal)
      }
    }
  },
}
</script>

<style>

</style>