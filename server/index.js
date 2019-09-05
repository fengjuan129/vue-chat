// 引入编写好的api
const api = require('./api'); 
// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
// 引入处理post数据的模块
const bodyParser = require('body-parser')
// 引入Express
const express = require('express');
const app = express();


var http = require('http');
var server = require('http').Server(app)
var io = require('socket.io')(server);

  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);
// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../dist')))
// 因为是单页应用 所有请求都走/dist/index.html
app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
    res.send(html)
})
// 监听8088端口
server.listen(8088,()=>{
    console.log('server running at 127.0.0.1:3000');
});

const models = require('./db');
io.on('connection', (socket) =>{
    socket.on('sendMessage', (msg) =>{
        console.log(msg)
        const saveChatDetailList = new models.chatListDitale(msg);
        saveChatDetailList.save((err,data) => {
            // if (err) {
            //     res.send(err);
            // } else {
            //     res.send({state:1});
            // }
        });
        io.emit('receiveMessage', msg);
    });
    socket.on('sendGroupMessage',(msg)=>{
        const saveChatGroupList = new models.chatGroupList(msg);
        saveChatGroupList.save((err,data) => {
            if (err) {
                io.emit('receiveGroupMessage', err);
            } else {
                io.emit('receiveGroupMessage', msg);
            }
        });
        
    })
    
  });