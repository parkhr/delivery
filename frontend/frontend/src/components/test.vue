<template>
  <div class="test">
    {{msg}}
    <a href='/hihi'>누르자</a>
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
