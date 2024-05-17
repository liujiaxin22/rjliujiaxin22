const express = require('express');
const app = express();
const path=require('path');

// 解析JSON和URL编码的请求体  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')))

// 处理表单提交的路由  
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    // 在这里可以对接收到的数据进行处理，例如存储到数据库或发送邮件等操作  
    const str = '您输入的用户名：'+name+'\n'+'您输入的密码：'+email;
    res.send(str);
});

// 启动服务器监听3000端口  
app.listen(3000, () => {
    console.log('服务器已启动，监听端口3000');
});
