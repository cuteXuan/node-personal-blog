const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleModel = new Schema({
    // 标题
    title: {
        type: String,
        require: true
    },
    // 作者
    author: {
        type: String,
        require: true
    },
    // 发表时间
    date_time: {
        type: Date,
        default: Date.now
    },
    // 封面
    cover: {
        type: String,
        require: false
    },
    type: {
        type: String,
        require:true,
        default: '原创'
    },
    // 分组
    // 0 代表技术
    // 1 代表生活
    // 2 代表个人介绍
    group: {
        type: Number,
        enum: [0,1,2],
        default: 0
    },
    content_html: {
        type: String,
        require: true
    },
    content_md: {
        type: String,
        require: true
    },
    // 文章摘要
    content_summary: {
        type: String
    },
    // 数量
    amount: {
        type: Number,
        default: 1
    },
    label: {
        type: Array
    },
    // 是否推荐
    isRecommend: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Article',articleModel)
