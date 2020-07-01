const { env } = require('./env')
const UPLOAD_PATH = env === 'dev' ?  'E:\\upload\\serve' : '/root/nginx/upload'
module.exports = {
    CODE_ERROR: -1,
    CODE_SUCCESS: 0,
    CODE_TOKEN_EXPIRED: -2,
    PWD_SALT: 'BLOG',
    PRIVATE_KEY: 'BLOG',
    JWT_EXPIRED: 60 * 60 ,
    UPLOAD_PATH
}
