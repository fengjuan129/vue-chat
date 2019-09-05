<!--主页-->
<template>
    <div class='Home-container'>
        <div class='Home-box'>
            <router-view></router-view>
        </div>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="ChatList">
                <i class="iconfont icon-icon-test46"></i><br>
                聊骚
            </mt-tab-item>
            <mt-tab-item id="MailList">
               
                <i class="iconfont icon-icon-test29"></i><br>
                通讯录
            </mt-tab-item>
            <mt-tab-item id="Find">
                <i class="iconfont icon-icon-test "></i><br>
                发现
            </mt-tab-item>
            <mt-tab-item id="Me">
               <i class="iconfont icon-icon-test28"></i><br>
                我
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    name:'Home',
    data() {
       return {
         selected:''
       }
    },
    created (){
        
        let name = this.$route.name;
         if(name=='Home'){
            name ='ChatList';
         }
        this.selected = name
    },
    methods:{

    },
    watch:{
        selected:function(val){
           this.$router.push({name:val})
        },
        '$route': function (to, from) {
            let name = to.name
            if(to.name=='Home'){
               this.selected ='ChatList';
            }else{
                 this.selected = to.name;
            }

           
        }
    }
    
}
</script>
<style lang="scss" scoped>
  .Home-container{
      font-size: 0.14rem;
  }
</style>