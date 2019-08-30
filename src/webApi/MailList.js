import axios from 'axios'
/**
 * 获取账号
 */
export function getUserList () {
    return axios.get('/api/MailList/getUserList')
    .then(res => {
        return res.data;
    })
}
/**
 * 获取账号
 */
export function deleteUser (option) {
    return axios.get('/api/MailList/deleteUser',{params:{...option}})
    .then(res => {
        return res.data;
    })
}

