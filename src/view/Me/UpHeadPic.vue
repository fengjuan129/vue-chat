<template>
    <mt-popup
    v-model="popupVisible"
    position="right"
    >
        <mt-header title="修改头像">
                <div slot="left" @click="close">
                <mt-button icon="back">返回</mt-button>
            </div>
           
        </mt-header>
       <croppa v-model="myCroppa" style="margin-top:0.2rem;"></croppa>
       <div class='but-box'>
            <mt-button type="primary" @click="save" class='save'>保存</mt-button>
        </div>
    </mt-popup>
</template>
<script>
export default {
    name:'UpHeadPic',
    data(){
       return {
           myCroppa: {},
           popupVisible:true
       }
    },
    methods:{
       
        save(){
           this.$emit('save',this.myCroppa.generateDataUrl('image/jpeg', 0.8))
        },
        close(){
            this.$emit('close');
        }
    }
}
</script>
<style lang="scss" scoped>
  .but-box{
            text-align: center;
            margin-top:0.5rem;
            .save{
                width: 3rem;
            }
        }
</style>