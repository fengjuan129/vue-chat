"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();
// 引入文件模块
const fs = require('fs');
let path = require('path');
const {resolve} = require('path')

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/



// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newAccount = {
        account : req.body.account,
        password : req.body.password,
        name: req.body.account,
        headPic:req.body.headPic
    };
    // 验证用户名是否重复
    models.Login.findOne({ account:newAccount.account},function(err,data){
        if (err) {
            res.send(err);
        } else {
            if(!data){
                // 保存数据newAccount数据进mongoDB
                const saveAccount = new models.Login(newAccount)
                saveAccount.save((err,data) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send({state:1});
                    }
                });
               
            }else{
                let res ={
                    state:0,
                    errNum:1,
                    errStr:'用户已经存在'
                }
                res.send(data);
            }
           
        }
    }) 
});
// 登录
router.post('/api/login/login',(req,res) => {
    let newAccount = {
        account : req.body.account,
        password : req.body.password
    };
    // 通过模型去查找数据库
    models.Login.findOne({account:newAccount.account},(err,data) => {
        if (err) {
            res.send(err);
        } else {
            console.log(data)
            if(!data){
                let resData ={
                    state:0,
                    errNum:1,
                    errStr:'用户不存在'
                }
               res.send(resData)
            } else{
              
               if(data.password ==newAccount.password){
                  res.send({state:1,account:data.account})
               }else{
                let resData ={
                    state:0,
                    errNum:1,
                    errStr:'密码不正确'
                }
                 res.send(resData)
               }
           }
        }
    });
});
// 获取已有账号接口
router.get('/api/MailList/getUserList',(req,res) => {
    // 
    // 通过模型去查找数据库
    models.Login.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            data.state =1;
            res.send(data);
        }
    });
});
// 获取用户的信息
router.get('/api/login/getUserInfo',(req,res)=>{
    const account = req.query.account;
    models.Login.findOne({account:account},(err,data)=>{
        if (err) {
            res.send(err);
        } else {
            console.log(data)
            if(!data){
                let resData ={
                    state:0,
                    errNum:1,
                    errStr:'用户不存在'
                }
               res.send(resData)
            } else{
              
                data.state =1;
                res.send(data)
               
           }
        }
    })
})
// 修改用户的信息
router.post('/api/login/editUserInfo',(req,res)=>{
    models.Login.update({account:req.body.account},{...req.body},(err,data)=>{
        console.log({...req.body})
        if (err) {
            res.send(err);
        } else {
            console.log(data)
            if(!data){
                let resData ={
                    state:0,
                    errNum:1,
                    errStr:'修改失败'
                }
               res.send(resData)
            } else{
                data.state =1;
                res.send(data)
              
           }
        }
    })
})
// 删除账号信息
router.get('/api/MailList/deleteUser',(req,res)=>{
    const account = req.query.account;
    models.Login.remove({account:account},(err,data)=>{
        if (err) {
            res.send(err);
        } else {
            if(!data){
                let resData ={
                    state:0,
                    errNum:1,
                    errStr:'用户不存在'
                }
               res.send(resData)
            } else{
              
                data.state =1;
                res.send(data)
               
           }
        }
    })
})
// 修改密码
router.post('/api/login/editPwd',(req,res)=>{
    const pwd ={...req.body};
    models.Login.findOne({account:pwd.account},(err,data)=>{
        if (err) {
            res.send(err);
        } else {
            console.log(data)
            if(!data){
                let resData ={
                    state:0,
                    errNum:1,
                    errStr:'用户不存在'
                }
               res.send(resData)
            } else{
                if(pwd.oldPwd != data.password){
                    let resData ={
                        state:0,
                        errNum:1,
                        errStr:'原生密码不正确'
                    }
                   res.send(resData)
                }else{
                    models.Login.update({account:pwd.account},{password:pwd.newPwd},(err,data)=>{
                        if (err) {
                            res.send(err);
                        } else {
                            console.log(data)
                            if(!data){
                                let resData ={
                                    state:0,
                                    errNum:1,
                                    errStr:'修改失败'
                                }
                               res.send(resData)
                            } else{
                                data.state =1;
                                res.send(data)
                              
                           }
                        }
                    })
                }
                
               
           }
        }
    })
    
})
// 修改头像
router.post('/api/login/editHeadPic',(req,res)=>{
    const headPicUrl =req.body.headPicUrl;
    var base64Data = headPicUrl.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    // console.log(path)
    // console.log('__dirname : ' + __dirname)
    // console.log('resolve   : ' + resolve('./'))
    // console.log('cwd   : ' +  process.cwd())
   
    const dirname = __dirname+'\\img\\headPic.png';
   // console.log('dirname   :'+ dirname)
    fs.writeFile(dirname, dataBuffer, function(err) {
        // const path = err.path;
        // console.log(path)
      
        models.Login.update({account:req.body.account},{headPic:headPicUrl},(err,data)=>{
            if (err) {
                res.send(err);
            } else {
                if(!data){
                    let resData ={
                        state:0,
                        errNum:1,
                        errStr:'修改失败'
                    }
                    res.send(resData)
                } else{
                    data.state =1;
                    res.send(data)
                    
                }
            }
        })
        
    });   
})
// 获取聊天信息详情列表
router.get('/api/chat/getChatDetailList',(req,res) => {
     const sendAccount = req.query.sendAccount;
     const targetAccount = req.query.targetAccount;
     console.log(sendAccount)
    // 通过模型去查找数据库
    models.chatListDitale.find({$or:[{"sendAccount":sendAccount,targetAccount:targetAccount},{"sendAccount": targetAccount,targetAccount:sendAccount}]},(err,data) => {
        if (err) {
            res.send(err);
        } else {
            data.state =1;
            res.send(data);
        }
    });
});
// 获取群聊聊天信息详情列表
router.get('/api/chat/getGroupList',(req,res) => {
    const room = req.query.room;
    console.log(room)
   // 通过模型去查找数据库
   models.chatGroupList.find({room},(err,data) => {
       if (err) {
           res.send(err);
       } else {
           data.state =1;
           res.send(data);
       }
   });
});
// 删除聊天信息
router.get('/api/chat/deleteChatDetailList',(req,res)=>{
    const sendAccount = req.query.sendAccount;
     const targetAccount = req.query.targetAccount;
     models.chatListDitale.remove({$or:[{"sendAccount":sendAccount,targetAccount:targetAccount},{"sendAccount": targetAccount,targetAccount:sendAccount}]},(err,data)=>{
        if (err) {
            res.send(err);
        } else {
            if(!data){
                let resData ={
                    state:0,
                    errNum:1,
                    errStr:'用户不存在'
                }
               res.send(resData)
            } else{
              
                data.state =1;
                res.send(data)
               
           }
        }
    })
})
module.exports = router;
