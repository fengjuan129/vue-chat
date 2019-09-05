<template>
    <div class='login-container'>
        <div class='login-box'>
            <h1>登录</h1>
            <mt-field  placeholder="请输入用户名" v-model="account"></mt-field>
            <mt-field  placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-button type="primary" @click="login" class='login-button'>登录</mt-button><br>
            <!-- <mt-button type="primary" @click="getAccout">获取账号</mt-button> -->
            <router-link to='/Register' >
               <span class='Register'>没有账号去注册</span></router-link>
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
          this.$store.state.headPic = res.data.headPic;
          
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
    height: 100%;
    box-sizing: border-box;
    text-align: center;
    background: url('../../assets/img/login.jpg');
    background-size: 100%;
    padding-top:2rem;
    font-size: 0.14rem;
    .login-box{
       width: 3rem;
       height:3rem;
       margin: auto;
      //  background: #fff;
      //  opacity: 0.5;
      .login-button{
        width: 2.8rem;
        margin-top:0.2rem;
         margin-bottom:0.1rem;
      }
    }
    .Register{
      text-align: right;
      color: #f00;
     
    }
  }
  .login-container {

    .mint-field .mint-cell-value{
      border:1px solid #888787;
      height:0.35rem;
      border-radius: 0.1rem;
      input {
        background: transparent;
        padding-left:0.1rem;
      }
    }
    .mint-cell{
      background: transparent;
    }
    
  }
</style>
