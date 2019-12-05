<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <Header/>
        <br/>
        <br/>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    //
  }),
};
</script>
