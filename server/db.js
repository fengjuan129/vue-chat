// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/test');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
    account : String,
    password : String,
    name:String,
    age:String,
    sex:String,
    brithday:String,
    headPic:String
});

const chatListDitalSchema = mongoose.Schema({
    img: String,
    msg: String,
    src: String,
    time: String,
    type: String,
    sendAccount: String,
    targetAccount:String,
    headPic:String,
       
});
const chatGroupListSchema = mongoose.Schema({
    img: String,
    msg: String,
    src: String,
    time: String,
    type: String,
    sendAccount: String,
    sendName:String,
    headPic:String,
    room:String,
       
});

/************** 定义模型Model **************/
const Models = {
    Login : mongoose.model('Login',loginSchema),
    chatListDitale: mongoose.model('chatListDitale',chatListDitalSchema),
    chatGroupList: mongoose.model('chatGroupList',chatGroupListSchema),
}

module.exports = Models;