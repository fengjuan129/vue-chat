<template>
     <mt-popup
    v-model="popupEditPwdVisible"
    position="right"
    >
    <div class='editPwd-container'>
        <mt-header title="修改密码">
            <div slot="left" @click="close">
                <mt-button icon="back">返回</mt-button>
            </div>
            
        </mt-header>
        <div class='info-box'>
            <div class='info-item'>
                <span class='laberInfo'>旧密码</span>
                <mt-field v-model="passwordWin.oldPwd" type='password'></mt-field>
            </div>
            <div class='info-item'>
                <span class='laberInfo'>新密码</span>
                <mt-field  v-model="passwordWin.newPwd" type='password'></mt-field>
            </div>
        </div>
        <div class='but-box'>
            <mt-button type="primary" @click="savePwd" class='save'>保存</mt-button>
        </div>
    </div>
</mt-popup>
</template>
<script>
import * as meApi from '@/webApi/Me'
export default {
    name:'EditPwd',
     
    data(){
        return {
           popupEditPwdVisible:true,
           account:this.$store.state.account,
           passwordWin:{
                oldPwd:'',
                newPwd:''
            }
        }
    },
    created(){

    },
    methods:{
        savePwd(){
           meApi.editPwd({account:this.account,...this.passwordWin})
           .then(res=>{
               console.log(res)
               if(res.data.state==1){
                   this.$toast({
                        message: '修改成功',
                        iconClass: 'icon icon-success'
                    });

               }else{
                   this.$toast({
                       message: this.data.errStr,
                   })
               }
           })
        },
       close(){
           console.log(1)
           this.$emit('close')
       }
    }
}
</script>
<style lang="scss" scoped>
   .editPwd-container{
        text-align: left;
        width:100%;
        height:100%;
        .info-box{
            padding: 0.15rem;
            .info-item{
                display: flex;
                height:0.48rpx;
                align-items: center;
                .laberInfo {
                    width: 0.6rem;
                    margin-right:0.1rem;
                    text-align: right;
                }
                .sex{
                    display: flex;
                }
            }
        }
        .but-box{
            text-align: center;
            margin-top:0.5rem;
            .save{
                width: 3rem;
            }
        }
    }  
</style>
