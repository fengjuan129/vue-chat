import axios from 'axios'
/**
 * 获取用户信息
 */
export function getUserInfo (options) {
    return axios.get('/api/login/getUserInfo',{params: {...options}})
    .then(res => {
        return res;
    })
}
/**
 * 修改用户信息
 */
export function editUserInfo (params) {
    return axios.post('/api/login/editUserInfo', params)
    .then(res => {
        return res;
    })
}
/**
 * 修改密码
 */
export function editPwd (params) {
    return axios.post('/api/login/editPwd', params)
    .then(res => {
        return res;
    })
}
/**
 * 修改头像
 */
export function editHeadPic (params) {
    return axios.post('/api/login/editHeadPic', params)
    .then(res => {
        return res.data;
    })
}