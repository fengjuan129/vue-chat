import axios from 'axios'
/**
 * 获取账号
 */
export function getAccount () {
    return axios.get('/api/login/getAccount')
    .then(res => {
        return res;
    })
}
/**
 * 注册账号
 */
export function createAccount (params) {
    return axios.post('/api/login/createAccount', params)
    .then(res => {
        return res;
    })
}
/**
 * 登录
 */
export function login (params) {
    return axios.post('/api/login/login', params)
    .then(res => {
        return res;
    })
}