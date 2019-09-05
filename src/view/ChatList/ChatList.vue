<!--聊骚-->
<template>
    <div class='mailList-contianer'>
        <mt-header title="聊骚">
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        <div class='list-box'>
            <li class='user-item' @click='chat()'>
                <img class='headPic' :src="headPic" />
                <span class='name'>群聊</span>
                <!-- <mt-button type='primary'  size="small"  @click='deleteUser(item.account)'>删除</mt-button> -->
            </li>
        </div>
       <ChatDetail v-if='chatDetailWin.visible' v-bind='chatDetailWin' @close='closeChatDetail'/>
    </div>
</template>
<script>
import ChatDetail from './ChatDetail'
import userPic3 from '../../assets/img/3.jpg'
export default {
    components:{
        ChatDetail
    },
    name:'ChatList',
    data(){
        return {
            headPic:userPic3,
            chatDetailWin:{
              visible:false,
              userInfo:{
                 type:'group',
                 room:'room1',
              }
            }
        }
    },
    methods:{
        chat(){

          this.chatDetailWin.visible = true;
        },
        closeChatDetail(){
            console.log(1)
           this.chatDetailWin.visible = false;
        }
    }
}
</script>
<style lang="scss" scoped>
  .mailList-contianer{
      height:100vh;
      display: flex;
      flex-direction: column;
      .list-box{
          flex:1;
           .user-item{
               list-style: none;
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