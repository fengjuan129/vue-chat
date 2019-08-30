<!--注册 -->
<template>
    <div class='register-container'>
        <h1>注册</h1>
        <div class='form-box'>
          <mt-field label="用户名" placeholder="请输入用户名" v-model="account"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        </div>
        <div class='btn-box'>
          <mt-button type="primary" @click="register">注册</mt-button>
          <router-link to='/Login'>去登录</router-link>
        </div>
    </div>
</template>
<script>
import * as loginApi from '../../webApi/login'
import { Toast } from 'mint-ui';
export default {
  name:'Register',
  data () {
    return {
      account:'',
      password:''
    }
  },
  methods: {
    register(){
      if(this.checkForm()){
        const option = {account:this.account,password:this.password};
        loginApi.createAccount(option)
        .then(res =>{
          console.log(res)
          console.log('注册成功')
        })
        .catch(err =>{

        })
      }

    },
    checkForm (){
      if(!this.account){
        Toast({
          message: '账号不能为空',
        });
        return false;
      }
      if(!this.password){
        Toast({
          message: '密码不能为空',
        });
        return false;
      }
      return true;
    }

  }
  

}
</script>
<style lang="scss" >
.register-container{
  text-align: center
}
  .register-container .mint-field .mint-cell-value{
    border-bottom:1px solid #e5e5e5;
  }
</style>