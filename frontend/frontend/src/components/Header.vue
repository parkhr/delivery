<template>
  <div>
    <v-container fluid>
      <v-layout class='layout' column>
          <i class="fas fa-truck"></i>
          <h1>배송조회</h1>

          <v-row>
            <v-col cols="4">
              <v-select
                v-model="carrier" :items="this.$store.state.carriers" menu-props="auto"
                label="Select" hide-details single-line></v-select>
            </v-col>

            <v-col cols="8">
              <v-text-field v-model="deliveryNumber" :counter="30" label="운송장 번호를 입력하세요."></v-text-field>
            </v-col>
          </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        carrier: '택배사 선택',
        deliveryNumber: ''
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout{
  align-items: center;
}
.fa-truck{
  font-size: 70px;
  align-items: center;
}
</style>
