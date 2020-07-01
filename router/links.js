const express = require('express')
const Result = require('../utils/Result')
const {
    queryAllLinks,
    linksAdd,
    linksDelete,
    linksUpdate } = require('../services/links')

const router = express.Router()

// 查询所有的友情链接
router.get('/queryAllLinks',function (req, res) {
    queryAllLinks().then(result => {
        if(result) {
            new Result({ result },'友链查询成功').success(res)
        } else {
            new Result('好像没有友链哎！').fail(res)
        }
    })
})

// 增加友情链接
router.post('/linksAdd',function (req, res) {
    linksAdd(req.body).then(result => {
        if(result) {
            new Result({result},'增加成功').success(res)
        } else {
            new Result('增加失败').fail(res)
        }
    })
})

// 删除友情链接
router.get('/linksDelete',function (req, res) {
    const { _id } = req.query
    linksDelete(_id).then(result => {
        console.log(result)
        if(result.n !== 0) {
            new Result('友链删除成功').success(res)
        } else {
            new Result('友链删除失败').fail(res)
        }
    })
})

// 修改友情链接
router.post('/linksUpdate',function (req, res) {
    linksUpdate(req.body).then(result => {
        if(result) {
            new Result('友链修改成功').success(res)
        } else {
            new Result('友链修改失败').fail(res)
        }
    })
})


module.exports = router
