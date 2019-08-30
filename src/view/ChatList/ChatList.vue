<!--聊骚-->
<template>
    <div class='mailList-contianer'>
       聊骚
       <ChatDetail />
    </div>
</template>
<script>
import ChatDetail from './ChatDetail'
export default {
    components:{
        ChatDetail
    },
    name:'ChatList'
}
</script>