<!--通讯录-->
<template>
    <div class='mailList-contianer'>
       <mt-header title="通讯录">
            <mt-button icon="search" slot="right"></mt-button>
       </mt-header>
       <ul class='user-box'>
           <template  v-for="(item,index) in userList" >
            <li v-if='item.account!=account' class='user-item' :key='index' @click.stop='chat(item)'>
                <a>
                        <img class='headPic' :src="item.headPic" />
                        <span class='name'>{{ item.name ?item.name:item.account }}</span>
                        <mt-button type='primary'  size="small"  @click.stop='deleteUser(item.account)'>删除</mt-button>
                        
                </a>
            </li>
           </template>
        </ul>
        <ChatDetail v-if='chatDetailWin.visible' :userInfo = 'chatDetailWin.userInfo'/>
    </div>
</template>
<script>
import * as mailListApi from '@/webApi/MailList'
import userPic1 from '../../assets/img/1.jpg'
import userPic2 from '../../assets/img/2.jpg'
import { MessageBox } from 'mint-ui';
import ChatDetail from '../ChatList/ChatDetail'
export default {
    name:'MailList',
    components:{
        ChatDetail
    },
    data(){
        return {
          headPic1:userPic1,
          headPic2:userPic2,
          userList:[],
          account:this.$store.state.account,
          chatDetailWin:{
              visible:false,
              userInfo:{}
          }
          
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

          
        },
        chat(item){
          this.chatDetailWin.userInfo = {
              account:item.account,
              headPic:item.headPic,
              name:item.name
          }
          this.chatDetailWin.visible =true;
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