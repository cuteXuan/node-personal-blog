const express = require('express')
const Result = require('../utils/Result')
const {
    queryById,
    queryAll,
    queryAboutId,
    queryByLabel,
    amountAdd,
    articlePublish,
    articleUpdate,
    articleDelete } = require('../services/article')
const {queryByIdRecommend,recommendDelete} = require('../services/recommend')

const router = express.Router()

// 发布文章
router.post('/publish',function (req, res) {
    articlePublish(req.body).then(result => {
        if (result) {
            new Result('发布成功').success(res)
        } else {
            new Result('发布失败').success(res)
        }
    }).catch(err => {
        new Result('发布失败').fail(res)
    })
})

// 修改文章
router.post('/update',function (req, res) {
    articleUpdate(req.body).then(result => {
        if (result) {
            new Result('文章修改成功').success(res)
        } else {
            new Result('文章修改成功').fail(res)
        }

    })
})

// 删除文章
router.get('/delete',function (req, res) {
    console.log('acsacsacsasacs a')
    const { _id } = req.query
    queryByIdRecommend(_id).then(response => {
        console.log(response)
        if(response.length !==0) {
            recommendDelete(_id)
        }
    })
    articleDelete(_id).then(result => {
        if (result.n !== 0) {
            new Result('文章删除成功').success(res)
        } else {
            new Result('文章删除失败').fail(res)
        }
    })

})

// 通过id查看文章
router.get('/detail',function (req, res) {
    let { id } = req.query
    amountAdd(id)
    queryById(id).then(result => {
        if (result) {
            new Result({result},'详情查询成功').success(res)
        } else {
            new Result('该文章已经删除').fail(res)
        }
    })
})

// 查询文章
router.get('/queryAll',function (req,res) {
    const { pageSize,currentPage,group } = req.query
    queryAll(pageSize,currentPage,group).then( result=> {
        if (result) {
            new Result(result,'查询成功').success(res)
        }
    }).catch(err => {
        new Result('现在有点忙，再等等哈').success(res)
    })
})

// 通过标签查看文章
router.get('/queryByLabel',function (req, res) {
    const { pageSize,currentPage,label } = req.query
    queryByLabel(pageSize,currentPage,label).then(result => {
        if (result) {
            new Result(result,'相关文章查询成功').success(res)
        } else {
            new Result('标签，并没有发表该标签相关的文章').fail(res)
        }
    })
})

// 查看关于我的id
router.get('/getAboutId',function (req,res) {
    queryAboutId().then(result => {
        new Result(result,'个人信息返回成功').success(res)
    })
})

module.exports = router
