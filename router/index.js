const express = require('express')

const userRouter = require('./user')
const articleRouter = require('./article')
const uploadRouter = require('./upload')
const labelRouter = require('./label')
const recommendRouter = require('./recommend')
const linksRouter = require('./links')
const versionRouter = require('./version')
const carouselRouter = require('./carousel')
const commentRouter = require('./comment')

const jwtAuth = require('./jwt')
// 注册路由
const router = express.Router()


//  对所有的路由进行jwt认证
router.use(jwtAuth)
// user 用户路由
router.use('/user',userRouter)
router.use('/article',articleRouter)
router.use('/upload',uploadRouter)
router.use('/label',labelRouter)
router.use('/recommend',recommendRouter)
router.use('/links',linksRouter)
router.use('/version',versionRouter)
router.use('/carousel',carouselRouter)
router.use('/comment',commentRouter)

// 自定义路由异常处理的中间件
router.use((err,req,res,next) => {
   res.json({
       msg:'异常处理'
   })
})


module.exports = router
