const express = require('express')
const Result = require('../utils/Result')
const { md5 } = require('../utils/md5')
const { decoded } = require('../utils/decoded')
const { login, register, queryByAccount} = require('../services/user')
const { PWD_SALT,PRIVATE_KEY,JWT_EXPIRED } = require('../utils/code')
const jwt = require('jsonwebtoken')

const router = express.Router()

// 登录
router.post('/login',async function (req,res,next) {
    // 1、接收数据，密码MD5加密
    // 2、验证
    // 返回token
    let { username,password } = req.body
    password = md5(`${password}${PWD_SALT}`)
    const user = await login(username,password)
    if (user) {
        // 请求过程
        // 请求成功，返回token
        const token = jwt.sign(
            { username },
            PRIVATE_KEY,
            { expiresIn:JWT_EXPIRED }
        )
        new Result({ token },'登录成功').success(res)
    } else {
        new Result(null, '用户名或密码不存在').fail(res)
    }
})

// 注册
router.post('/register',function (req,res,next) {
    let { username,password,nickname } = req.body
    password = md5(`${password}${PWD_SALT}`)
    register(username,password,nickname).then(result => {
        if (result) {
            new Result('注册成功').success(res)
        } else {
            new Result('注册失败').fail(res)
        }
    })

})
// 获取用户信息
router.get('/getInfo',async function (req,res,next) {
    const decode = decoded(req)
    if (decode && decode.username)  {
        const user = await queryByAccount(decode.username)
        if (user) {
            delete user.password
            new Result(user, '获取信息成功').success(res)
        } else {
            new Result(null,'用户信息解析失败').fail(res)
        }
    } else {
        new Result(null,'用户信息解析失败').fail(res)
    }
})

module.exports = router
