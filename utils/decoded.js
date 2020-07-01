const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('./code')
function decoded(req) {
    // 获取header请求头的参数
    let token = req.get('Authorization')
    if (token.indexOf('Bearer') === 0 ) {
        token = token.replace('Bearer ','')
    }
    console.log(token)
    return jwt.verify(token,PRIVATE_KEY)
}

module.exports = {
    decoded
}
