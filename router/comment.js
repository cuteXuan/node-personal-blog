const express = require('express')
const Result = require('../utils/Result')
const { queryAllComment, commentAdd,commentAddChildren } = require('../services/comment')

const router = express.Router()

// 查询评论
router.get('/queryAllComment',function (req, res) {
    const {commentType} = req.query
    queryAllComment(commentType).then(result => {
        if(result) {
            new Result({ result },'评论查询成功').success(res)
        } else {
            new Result('暂无评论！').fail(res)
        }
    })
})

// 增加评论
router.post('/commentAdd',function (req, res) {
    commentAdd(req.body).then(result => {
        if(result) {
            new Result({result},'评论增加成功').success(res)
        } else {
            new Result('评论增加失败').fail(res)
        }
    })
})

// 回复评论
router.post('/commentAddChildren',function (req,res) {
    commentAddChildren(req.body).then(result => {
        if(result) {
            new Result({result},'评论增加成功').success(res)
        } else {
            new Result('评论增加失败').fail(res)
        }
    })
})


module.exports = router
