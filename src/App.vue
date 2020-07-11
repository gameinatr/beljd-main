<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/log.png" /> -->
    <component :is="layout">
      <router-view/>
    </component>
    
  
  </div>
 
</template>

<script>
import EmptyLayout from './components/layouts/EmptyLayout'
import MainLayout from './components/layouts/MainLayout'
// import Login from "./views/Login.vue";

export default {
  name: "App",
  components: {
    // Login,
    EmptyLayout,
    MainLayout
  },
  computed:{
    layout(){
    
return (this.$route.meta.layout || 'empty') + '-layout'

    }
  }
};
</script>
<style>
  @import '../src/assets/css/styles.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700');
</style>
