<template>
    <div class='login-container'>
        <div class='login-box'>
            <h1>登录</h1>
            <mt-field label="用户名" placeholder="请输入用户名" v-model="account"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-button type="primary" @click="login">登录</mt-button>
            <!-- <mt-button type="primary" @click="getAccout">获取账号</mt-button> -->
            <router-link to='/Register'>去注册</router-link>
        </div>
        <!-- <Register /> -->
    </div>
</template>
<script>
import Register from './Register'
import {login} from '../../webApi/login'
import { Toast } from 'mint-ui';
export default {
  components: {
    Register
  },
  data () {
    return {
      account: '',
      password: ''
    }
  },
  created () {

  },
  methods: {
    login () {
      let params = { account: this.account, password: this.password }
      login(params)
      .then(res =>{
        console.log(res)
        if(res.data.state==1){
          this.$store.state.account = res.data.account;
          this.$router.push({name:'Home'})
        }else{
          Toast({
            message: res.data.errStr,
          });
        }
      })
    },
    
  }
}
</script>
<style lang="scss" >
  .login-container{
    height: 100vh;
    box-sizing: border-box;
    text-align: center;
    .login-box{
     
    }
  }
  .login-container .mint-field .mint-cell-value{
    border-bottom:1px solid #e5e5e5;
  }
</style>
