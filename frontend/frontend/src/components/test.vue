<template>
  <div class="test">
    {{msg}}
    <router-link to="/hihi">누르기</router-link>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: '테스트입니다.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
