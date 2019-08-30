<!--聊天信息-->
<template>
    <div class='chatDetail-container'>
        <mt-header title="胆小鬼">
            <mt-button icon="search" slot="right"></mt-button>
       </mt-header>
        <div class='chat-box'>
            <div class='chat-list ourList'>
                <div class='info'>
                    我说我说我说我说我说我说我说我说我说我说
                </div>
                <img class='headPic' :src='headPic2'/>
            </div>
            <div class='chat-list'>
                <img class='headPic' :src='headPic1'/>
                <div class='info'>
                    我说我说我说我说我说我说我说我说我说我说
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import userPic1 from '../../assets/img/1.jpg'
import userPic2 from '../../assets/img/2.jpg'
export default {
    name:'ChatDetail',
    data(){
       return {
           headPic1:userPic1,
           headPic2:userPic2,
       }
    },
    created(){

    },
    methods:{
       
    }
}
</script>
<style lang="scss" scoped>
  .chat-box{
     .chat-list{
         padding:0.05rem 0.1rem;
         display: flex;
        .headPic{
            width:0.5rem;
            height:0.5rem;
            border-radius: 0.05rem;
            margin-right:0.1rem;
        }
        .info{
            padding:0.05rem;
            max-width: 2rem;
            background: #fff;
            border: 1px solid #e5e5e5;
            color: #000

        }
     }
     .ourList{
          padding:0.05rem 0.1rem;
         display: flex;
         justify-content: flex-end;
        .headPic{
            width:0.5rem;
            height:0.5rem;
            border-radius: 0.05rem;
            margin-left: 0.1rem;

        }
        .info{
            padding:0.05rem;
            max-width: 2rem;
            background: rgb(11, 201, 112);
            border: 1px solid #e5e5e5;
            color: #fff

        }
     }
  }
</style>