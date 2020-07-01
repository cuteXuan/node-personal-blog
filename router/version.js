const express = require('express')
const Result = require('../utils/Result')
const {
    queryAllVersion,
    versionAdd,
    versionDelete,
    versionUpdate } = require('../services/version')

const router = express.Router()

// 查询所有的版本
router.get('/queryAllVersion',function (req,res) {
    queryAllVersion().then(result => {
        if (result) {
            new Result({result},'版本查询成功').success(res)
        } else {
            new Result('版本查询失败').fail(res)
        }
    })
})

// 添加版本
router.post('/versionAdd',function (req,res) {
    versionAdd(req.body).then(result => {
        if (result) {
            new Result({result},'版本查询成功').success(res)
        } else {
            new Result('版本查询失败').fail(res)
        }
    })
})

// 删除版本
router.get('/versionDelete',function (req,res) {
    const { _id } = req.query
    versionDelete(_id).then(result => {
        if(result.n !== 0) {
            new Result('删除成功').success(res)
        } else {
            new Result('删除失败').fail(res)
        }
    })
})

// 修改版本
router.post('/versionUpdate',function (req,res) {
    versionUpdate(req.body).then(result => {
        if (result) {
            new Result('修改成功').success(res)
        } else {
            new Result('修改失败').fail(res)
        }
    })
})

module.exports = router
