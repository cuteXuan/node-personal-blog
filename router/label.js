const express = require('express')
const Result = require('../utils/Result')
const { queryAllLabel, labelAdd } = require('../services/label')

const router = express.Router()

// 查询所有的标签
router.get('/queryAllLabel',function (req, res) {
    queryAllLabel().then(result => {
        if(result) {
            new Result({ result },'标签查询成功').success(res)
        } else {
            new Result('好像没有标签哎！').fail(res)
        }
    })
})

// 增加标签
router.post('/labelAdd',function (req, res) {
    labelAdd(req.body.label).then(result => {
        if(result) {
            new Result({result},'增加成功').success(res)
        } else {
            new Result('增加失败').fail(res)
        }
    })
})


module.exports = router
