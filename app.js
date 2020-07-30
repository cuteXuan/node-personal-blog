const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dbConfig = require('./db/config')

// 创建应用
const app = express()
// 连接数据库
mongoose.connect(dbConfig.dbs,{
    useNewUrlParser:true
})
// 处理跨域
app.use(cors())

// 处理 body 请求
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 路由处理
app.use('/',router)

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5001, function() {
    const { address,port } = server.address()
    console.log('启动成功' + address,port)
})
