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

          <br/>
          
          <div class='loadIcon'>
            <div class="loader" v-if="load">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
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
        load: false
      }
    },
    methods:{
      search(){
        this.load = true;
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
              console.log(err)
            })
          }else{
            this.$store.commit('message', a.message)

            router.push({path:"/searchViewErr"}).catch(err =>{
              console.log(err)
            })
          }

          this.load = false;
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

.loader {
   width: 50px;
   height: 50px;
   margin: auto;
   float: left;
   clear: both;
   margin-left: 30px;
   margin-bottom: -10px;
}

.loader .circle {
   position: absolute;
   width: 20px;
   height: 20px;
   opacity: 0;
   transform: rotate(225deg);
   animation-iteration-count: infinite;
   animation-name: orbit;
   animation-duration: 4s;
}

.loader .circle:after {
   content: "";
   position: absolute;
   width: 4px;
   height: 4px;
   border-radius: 5px;
   background: #828282;
   box-shadow: 0 0 9px rgba(255, 255, 255, 0.7);
}

.loader .circle:nth-child(2) {
   animation-delay: 240ms;
}

.loader .circle:nth-child(3) {
   animation-delay: 480ms;
}

.loader .circle:nth-child(4) {
   animation-delay: 720ms;
}

.loader .circle:nth-child(5) {
   animation-delay: 960ms;
}

@keyframes orbit {
   0% {
       transform: rotate(225deg);
       opacity: 1;
       animation-timing-function: ease-out;
   }
   7% {
       transform: rotate(345deg);
       animation-timing-function: linear;
   }
   30% {
       transform: rotate(455deg);
       animation-timing-function: ease-in-out;
   }
   39% {
       transform: rotate(690deg);
       animation-timing-function: linear;
   }
   70% {
       transform: rotate(815deg);
       opacity: 1;
       animation-timing-function: ease-out;
   }
   75% {
       transform: rotate(945deg);
       animation-timing-function: ease-out;
   }
   76% {
       transform: rotate(945deg);
       opacity: 0;
   }
   100% {
       transform: rotate(945deg);
       opacity: 0;
   }
}

</style>
