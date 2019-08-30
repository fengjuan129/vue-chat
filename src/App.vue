<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100vh;
  box-sizing: border-box;
}
body{
  margin:0;
  font-size:0.14rem;
}
.mint-field .mint-cell-value{
    border-bottom:1px solid #e5e5e5;
  }
  .mint-field-core{
    font-size:0.14rem;
  }
  .mint-toast{
    z-index:2003
  }
</style>
