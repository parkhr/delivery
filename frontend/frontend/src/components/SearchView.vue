<template>
  <div>
    <v-layout class='layout' column>
      보내는 분 : {{this.from.name}}<br/><br/>
      받는 분 : {{this.to.name}}<br/><br/>
      상태 : {{this.state.text}}<br/><br/>
      <template v-for="item in this.progresses">
        {{item.description}}
        {{item.location.name}}
        {{item.status.text}}
        {{item.time}}
      </template>

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
