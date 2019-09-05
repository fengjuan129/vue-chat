<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    // 解决页面刷新vuex数据被清空问题
     window.addEventListener('unload', this.saveState);
    document.addEventListener('click', (e) => {
      if (e.target.className.indexOf('im_face') > -1 || e.target.parentNode.className.indexOf('im_face') > -1) {
        this.$store.commit('setEmoji', true);
      } else {
        this.$store.commit('setEmoji', false);
      }
    });
  },
  methods:{

    saveState() {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
   height:100%;
  box-sizing: border-box;
  
}
html{
   height:100%;
  padding:0;
  margin:0;
}
body{
  height:100%;
  padding:0;
  margin:0;
  font-size:0;
  overflow: hidden;
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
