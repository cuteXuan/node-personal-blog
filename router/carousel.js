const express = require('express')
const Result = require('../utils/Result')
const {
    queryAllCarousel,
    carouselAdd,
    carouselDelete,carouselUpdate } = require('../services/carousel')

const router = express.Router()

// 查询所有的轮播图
router.get('/queryAllCarousel',function (req, res) {
    queryAllCarousel().then(result => {
        if(result) {
            new Result({ result },'轮播图查询成功').success(res)
        } else {
            new Result('好像没有轮播图哎！').fail(res)
        }
    })
})

// 增加轮播图
router.post('/carouselAdd',function (req, res) {
    carouselAdd(req.body).then(result => {
        if(result) {
            new Result({result},'轮播图增加成功').success(res)
        } else {
            new Result('轮播图增加失败').fail(res)
        }
    })
})

// 删除轮播图
router.get('/carouselDelete',function (req, res) {
    const { _id } = req.query
    carouselDelete(_id).then(result => {
        console.log(result)
        if(result.n !== 0) {
            new Result('轮播图删除成功').success(res)
        } else {
            new Result('轮播图删除失败').fail(res)
        }
    })
})

router.post('/carouselUpdate',function (req,res) {
    carouselUpdate(req.body).then(result => {
        if (result) {
            new Result('轮播图更新成功').success(res)
        } else {
            new Result('轮播图更新失败').fail(res)
        }
    })
})




module.exports = router
