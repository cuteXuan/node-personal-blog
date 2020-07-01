const User = require('../db/models/user')

// 登录
async function login(username,password) {
    return await User.findOne({
        username: username,
        password: password
    })
}

// 注册
async function register(username,password,nickname) {
    return await User.create({
        username:username,
        password:password,
        nickname:nickname
    })
}

// 查询
async function queryByAccount(username) {
    return await User.findOne({
        username:username
    })
}



module.exports = {
    login,
    register,
    queryByAccount
}
