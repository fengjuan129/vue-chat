import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({//此处Store方法应大写
    state:{
        account:''
    }
})

export default store 
