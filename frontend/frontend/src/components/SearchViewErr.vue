<template>
  <div>
    <v-layout class='layout' column>
      {{this.message}}
    </v-layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message : this.$store.state.message
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout{
  align-items: center;
}
</style>
