const express = require('express')
const Result = require('../utils/Result')
const {
    queryAllRecommend,
    recommendAdd,
    recommendDelete,
    queryCountRecommend
} = require('../services/recommend')
const {  recommendUpdate } = require('../services/article')

const router = express.Router()

// 查询推荐
router.get('/queryAllRecommend',function (req,res) {
    queryAllRecommend(req.body._id,req.body.title).then(result => {
        if(result) {
            new Result({result},'推荐查询成功').success(res)
        } else {
            new Result('好像没有推荐哎！').fail(res)
        }
    })
})

// 添加推荐文章
router.post('/recommendAdd',async function (req,res) {
    const count = await queryCountRecommend()
    if(count >8) {
        new Result('您推荐的文章太多了').fail(res)
    } else {
        const result = recommendAdd(req.body._id,req.body.title)
        const response = recommendUpdate(req.body._id,true)
        if (result && response) {
            new Result({result},'推荐查询成功').success(res)
        } else {
            new Result('好像没有推荐成功！').fail(res)
        }
    }
})

// 删除推荐文章
router.get('/recommendDelete',function (req,res) {
    let { _id } = req.query
    recommendDelete(_id).then(result => {
        if(result.n !== 0) {
            recommendUpdate(_id,false).then(response => {
                if(response) {
                    new Result('推荐删除成功').success(res)
                }
            })
        } else {
            new Result('推荐删除失败').fail(res)
        }
    })
})


module.exports = router
