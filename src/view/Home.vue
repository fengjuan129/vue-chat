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
         selected:'ChatList'
       }
    },
    created (){

    },
    methods:{

    },
    watch:{
        selected:function(val){
           console.log(val)
           this.$router.push({name:val})
        }
    }
}
</script>
<style lang="scss" scoped>

</style>