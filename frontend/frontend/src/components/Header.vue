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

          <div>
            <v-btn text small @click="search()">조회하기</v-btn>
          </div>

          {{from.name}}<br/>
          {{to.name}}<br/>
          {{state.text}}<br/>
          
          <div v-for = "item in progresses" v-bind:key="item">{{item.location.name}} {{item.status.text}} {{item.description}} {{item.time}}</div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import Server from "../server.js"
  export default {
    name: 'Header',
    data () {
      return {
        carrier: '택배사 선택',
        deliveryNumber: '',
        from: '',
        to: '',
        state: '',
        progresses: []
      }
    },
    methods:{
      search(){
        let carrierCode = this.$store.state.carriersObject[this.carrier]
        Server(this.$store.state.SERVER_URL).get("/search/" + carrierCode + "/" + this.deliveryNumber).then(res => {
          var a = res.data
          this.from = a.from
          this.to = a.to
          this.state = a.state

          for (var index in a.progresses) {
            this.progresses.push(a.progresses[index])
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }
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
