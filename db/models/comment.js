const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 标签表
const commentModel = new Schema({
    // 有索引的，就是某一篇文章的留言
    // 没有，就是公共留言
    commentType: {
      type: String,
      default: 'blogComment'
    },
    nickname: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    commentDate: {
        type: Date,
        default: Date.now
    },
    reply: {
        type: Array,
        default: [],
        nickname: {
            type: String,
            require: true
        },
        comments: {
            type: String,
            require: true
        },
        commentDate: {
            type: Date
        }
    }
})

module.exports = mongoose.model('Comment',commentModel)
