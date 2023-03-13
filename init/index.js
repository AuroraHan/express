const express = require('express')
const logger = require('../log/log')
const app = express()
const port = 3000


let total = 0; //记录被访问的次数
//应用层中间件
//使用app.use()和app.METHOD()函数将应用层中间件绑定到应用程序对象的实例
// app.use('/gxh', function (req, res, next) {
//     console.log(`有人访问了, 访问时间：${Date.now()}`);
//     //将控制权传递给下一个中间件函数
//     next();
// })

// app.use('/gxh', function (req, res) {
//     total += 1;
//     logger.log({
//         message: `被访问的次数：${total}`,
//         level: 'info'
//     })
//     res.send('result');
// });

app.use(express.urlencoded({
    extended: true
}))

//注册多个中间件
app.get('/gxh',
    function (req, res, next) {
        console.log(`有人访问了, 访问时间：${Date.now()}`);
        //将控制权传递给下一个中间件函数
        next();
    },
    function (req, res) {
        total += 1;
        logger.log({
            message: `被访问的次数：${total}`,
            level: 'info'
        })
        res.send('result');
    })

app.post('/address', function (req, res) {
    console.log(req.body)
    res.send('post请求')
})

//* 表示匹配任何路径。将此中间件放在所有路由后面，即可捕获所有访问路径均匹配失败的请求。
app.use('*', (req, res) => {
    // 处理错误
    res.send('页面找不到!')
});

app.put('/userinfo', function () {

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})