const express = require('express')
const multer = require('multer')
const Result = require('../utils/Result')
const { UPLOAD_PATH } = require('../utils/code')
const router = express.Router()

// 上传文章封面
router.post(
    '/cover',
    multer({dest:`${UPLOAD_PATH}/cover`}).single('file')
    ,function (req, res) {
        if(!req.file || req.file.length === 0) {
            new Result('上传封面失败').fail(res)
        } else {
            const path = '/cover/' + req.file.filename
            new Result(path,'封面上传成功').success(res)
        }
})

// 上传轮播图
router.post(
    '/carousel',
    multer({dest:`${UPLOAD_PATH}/carousel`}).single('file')
    ,function (req, res) {
        if(!req.file || req.file.length === 0) {
            new Result('上传轮播图失败').fail(res)
        } else {
            const path = '/carousel/' + req.file.filename
            new Result(path,'轮播图上传成功').success(res)
        }
})

// 上传头像
router.post(
    '/avator',
    multer({dest:`${UPLOAD_PATH}/avator`}).single('file')
    ,function (req, res) {
        if(!req.file || req.file.length === 0) {
            new Result('上传头像失败').fail(res)
        } else {
            const path = '/avator/' + req.file.filename
            new Result(path,'头像上传成功').success(res)
        }
})

module.exports = router
