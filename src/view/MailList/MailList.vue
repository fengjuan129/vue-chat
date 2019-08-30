<!--通讯录-->
<template>
    <div class='mailList-contianer'>
       <mt-header title="通讯录">
            <mt-button icon="search" slot="right"></mt-button>
       </mt-header>
       <ul class='user-box'>
           <li class='user-item' v-for="(item,index) in userList" :key='index'>
               <a>
                    <img class='headPic' :src="item.sex=='男'?headPic1:headPic2" />
                    <span class='name'>{{ item.name ?item.name:item.account }}</span>
                    <mt-button type='primary'  size="small"  @click='deleteUser(item.account)'>删除</mt-button>
                    
               </a>
            </li>
        </ul>
    </div>
</template>
<script>
import * as mailListApi from '@/webApi/MailList'
import userPic1 from '../../assets/img/1.jpg'
import userPic2 from '../../assets/img/2.jpg'
import { MessageBox } from 'mint-ui';
export default {
    name:'MailList',
    data(){
        return {
          headPic1:userPic1,
          headPic2:userPic2,
          userList:[]
        }
    },
    created(){
       
       this.getUserList()
    },
    methods:{
        getUserList(){
           mailListApi.getUserList()
           .then(res=>{
               this.userList = res;
               console.log(res)
           })
        },
        /**
         * 删除用户
         */
        deleteUser(account){
             MessageBox.confirm('确定执行此操作?').then(action => {
                 mailListApi.deleteUser({account:account})
                .then(res => {
                    this.$toast({
                            message: '删除成功',
                            iconClass: 'icon icon-success'
                        });
                    this.getUserList();
                })
                    
            })
            .catch(err => { 
           
            });

          
        }
    }
}
</script>
<style lang="scss" scoped>
  .user-box{
      margin:0;
      padding:0;
      .user-item{
          list-style: none;
          a{
            display: flex;
             padding:10px;
             align-items: center;
          border-bottom: 1px solid #e5e5e5;
            .headPic{
                height:50px;
                width:50px;
                margin-right: 20px;
            }
            .name{
                flex:1;
            }
          }

      }
  }
</style>