<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>{{msg}}</div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Axios from 'axios'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: ()=> ({
    msg: ''
  }),
  async mounted() {
    console.log(Axios);
    let response = await Axios({
      url: '/api/getmsg',
    })
    this.msg = response.data
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
