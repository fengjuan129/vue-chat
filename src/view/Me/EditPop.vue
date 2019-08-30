<template>
    <mt-popup
    v-model='pickerValue'
    position="right"
    >
        <div class='editInfo-container'>
            <mt-header title="修改信息">
                <div slot="left" @click="close">
                    <mt-button icon="back">返回</mt-button>
                </div>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div class='info-box'>
                <div class='info-item'>
                    <span class='laberInfo'>用户名</span>
                    <mt-field v-model="userForm.account" disabled></mt-field>
                </div>
                <div class='info-item'>
                    <span class='laberInfo'>昵称</span>
                    <mt-field placeholder="请输入昵称"  v-model="userForm.name"></mt-field>
                </div>
                <div class='info-item'>
                    <span class='laberInfo'>年龄</span>
                    <mt-field  placeholder="请输入年龄" v-model="userForm.age"></mt-field>
                </div>
                <div class='info-item'>
                    <span class='laberInfo'>性别</span>
                    <mt-radio
                        class='sex'
                        v-model="userForm.sex"
                        :options="['男', '女']">
                    </mt-radio>

                </div>
                
                <div class='info-item'>
                    <span class='laberInfo'>出生日期</span>
                    <mt-field  placeholder="请输入年龄" v-model="userForm.brithday"></mt-field>
                    <mt-datetime-picker
                        ref="picker"
                        type="date"
                        v-model="userForm.brithday">
                    </mt-datetime-picker>
                </div>
            
            </div>
            <div class='but-box'>
                <mt-button type="primary" @click="save" class='save'>保存</mt-button>
            </div>
        </div>
    </mt-popup>
</template>
<script>
import * as meApi from '@/webApi/Me'

export default {
    name:'InfoEdit',
    props:{
        userInfo:{
            type:Object,
            default:()=>{}
        }
    },
    data(){
        return {
           pickerValue:true,
           userForm:{
             ...this.userInfo
           }
        }
    },
    created (){
       
    },
    methods:{
       /**
        * 保存
        */
       save(){
           console.log(this.userForm)
           meApi.editUserInfo({...this.userForm})
           .then(res => {
               if(res.data.state==1){
                    this.$toast({
                        message: '修改成功',
                        iconClass: 'icon icon-success'
                    });
               }
           })
       },
       close(){
           this.$emit('close');
       }
    }
}
</script>
<style lang="scss" scoped> 
    .editInfo-container{
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