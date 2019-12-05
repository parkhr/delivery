<template>
  <div>
    <v-layout class='layout' column>
      {{this.from}}
      {{this.to}}
      {{this.state}}
      {{this.progresses}}
    </v-layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        from : this.$store.state.from,
        to : this.$store.state.to,
        state : this.$store.state.state,
        progresses : this.$store.state.progresses
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
