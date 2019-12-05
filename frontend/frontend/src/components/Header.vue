<template>
  <div>
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
      </v-layout>
  </div>
</template>

<script>
  import Server from "../server.js"
  import router from "../router.js"
  export default {
    name: 'Header',
    data () {
      return {
        carrier: '택배사 선택',
        deliveryNumber: '',
      }
    },
    methods:{
      search(){
        let carrierCode = this.$store.state.carriersObject[this.carrier]
        Server(this.$store.state.SERVER_URL).get("/search/" + carrierCode + "/" + this.deliveryNumber).then(res => {
          var a = res.data
          if(a.message == null){
            this.$store.commit('from', a.from)
            this.$store.commit('to', a.to)
            this.$store.commit('state', a.state)

            for (var index in a.progresses) {
              this.$store.commit('progresses', a.progresses[index])
            }
            router.push({path:"/searchView"}).catch(err =>{
              err
            })
          }else{
            this.$store.commit('message', a.message)

            router.push({path:"/searchViewErr"}).catch(err =>{
              err
            })
          }
        })
        .catch(error => {
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
