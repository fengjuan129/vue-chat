<!--我-->
<template>
    <div class='mailList-contianer'>
       <div class='top-box'>
           <div class='touxiang'>
               <img :src="headPic" class='bgblur'/>
               <img :src='headPic' class='headPic'/>
                <div class='userInfo'>
                    <span >{{userInfo.name? userInfo.name:account}}</span>
                </div>
           </div>
       </div>
       <div class='list-box'>
           <div class='list-item' @click="editInfo">
               <i class='iconfont icon-icon-test7'></i>修改信息
            </div>
           <div class='list-item' @click='editHeadPic'>
               <i class='iconfont icon-icon-test45'></i>
               修改图像
                
               
            </div>
           <div class='list-item' >
               <i class='iconfont icon-icon-test16'></i>
               设置
            </div>
            <div class='list-item' @click='editPwd'>
               <i class='iconfont icon-icon-test38'></i>
               修改密码
              
            </div>
       </div>
        <mt-button type="primary" @click="loginout" class='loginout'>退出</mt-button>
        <!-- 修改密码 -->
        <EditPwd v-if='popupEditPwdVisible' @close ='closePwd'/>
        <EditPop v-if='popupEditVisible' @close ='closeEditPop' :userInfo='userInfo'/>
        <UpHeadPic v-if='popupUpHeadPicVisible' 
         @save ='saveHeadPic'
         @close ='closeHeadPic'
        />
    </div>
</template>
<script>
import userPic1 from '../../assets/img/1.jpg'
import userPic from '../../assets/img/5.jpeg'
import EditPop from './EditPop'
import EditPwd from './EditPwd'
import UpHeadPic from './UpHeadPic'
import * as meApi from '@/webApi/Me'
export default {
    name:'MailList',
    components:{
        EditPop,
        EditPwd,
        UpHeadPic
    },
    data(){
        return {
              
            headPic:'',
            popupEditVisible:false,
            popupEditPwdVisible:false,
            popupUpHeadPicVisible:false,
            account:this.$store.state.account,
            userInfo:{}
           
        }
    },
    created(){
      this.getUserInfo();
      
    },
    methods:{
        
        /**
         * 获取用户信息
         */
        getUserInfo(){
           meApi.getUserInfo({account:this.account})
           .then(res=>{
               if(res.data.state==0){
                  this.$toast({
                         message: res.data.errStr,
                            
                    });
               }else{
                   this.userInfo = res.data;
                 this.headPic =res.data.headPic?res.data.headPic : userPic;
                  
               }
               
           })
        },
        
        /**
         * 修改信息
         */
        editInfo(){
            this.popupEditVisible = true;
        },
        /**
         * 
         */
        closeEditPop(){
            this.popupEditVisible = false;
        },
        /**
         * 修改密码
         */
        editPwd () {
            this.popupEditPwdVisible = true;
        },
        savePwd(){
           this.getUserInfo();
        },
        closePwd(){
            
            this.popupEditPwdVisible = false;

        },
        /**
         * 修改头像
         */
        editHeadPic(){
          this.popupUpHeadPicVisible = true;
        },
        saveHeadPic(data){
          
          meApi.editHeadPic({headPicUrl:data,account:this.account})
          .then((res=>{

                this.$toast({
                    message: '修改成功',
                    iconClass: 'icon icon-success'
                });
                this.headPic =data;
                this.closeHeadPic();

               
          }))
          
          
        },
        closeHeadPic(){
            this.popupUpHeadPicVisible = false;
        },
        /**
         * 退出
         */
        loginout(){
           this.$router.replace({name:'Login'});
        }
    }
}
</script>
<style lang="scss" scoped>
.mailList-contianer{
    text-align: center;

    .top-box{
        text-align: center;
        .touxiang{
            height:3rem;
            width:100%;
            position: relative;
            .bgblur {   
                width:100%;
                height:100%; 
                -webkit-filter: blur(10px); /* Chrome, Opera */
                -moz-filter: blur(10px);
                -ms-filter: blur(10px);    
                filter: blur(10px);   
                position: absolute; 
                top:0rem;
                left:0;
                right:0;
                bottom:0;
                margin:auto;
                z-index: -1;
            }
            .headPic{
                width: 1rem;
                height:1rem;
                margin:auto;
                margin-top:0.8rem;
                border-radius: 50%;
                
            }  
            .userInfo{
                font-size:0.14rem;
                text-shadow:1px 1px 1px #000; padding:10px 0;
                color: #fff;
            } 
        }
    
        
    }
    .list-box{
        padding:0.1rem;
        .list-item{
            height: 0.4rem;
            line-height: 0.4rem;
            border-bottom: 1px solid #f5f5f5;
            display: flex;
            align-items: center;
            i{
                margin-right:0.15rem;
                font-size: 0.24rem;
            }
        }
    }
    .loginout{
        width: 3rem;
        margin-top:0.2rem;
    }
}
.mint-popup{
    width:100%;
    height:100%;
}



</style>