import axios from 'axios'
/**
 * 获取聊天列表
 */
export function getChatList () {
    return axios.get('/api/Chat/getChatList',{params:{...option}})
    .then(res => {
        return res.data;
    })
}
/**
 * 获取群聊详情列表
 * @param {*} option 
 */
export function getGroupList(option){
    return axios.get('/api/chat/getGroupList',{params:{...option}})
    .then(res => {
        return res.data;
    })
}
/**
 * 获取聊天详情列表
 */
export function getChatDetailList (option) {
    return axios.get('/api/chat/getChatDetailList',{params:{...option}})
    .then(res => {
        return res.data;
    })
}
/**
 * 保存群聊天详情列表
 */
export function saveChatGroupDetailList (option) {
    return axios.get('/api/chat/saveChatGroupDetailList',{...option})
    .then(res => {
        return res.data;
    })
}
/**
 * 保存聊天详情列表
 */
export function saveChatDetailList (option) {
    return axios.get('/api/chat/saveChatDetailList',{...option})
    .then(res => {
        return res.data;
    })
}
/**
 * 删除聊天列表
 */
export function deleteChatDetailList (option) {
    return axios.get('/api/chat/deleteChatDetailList',{params:{...option}})
    .then(res => {
        return res.data;
    })
}