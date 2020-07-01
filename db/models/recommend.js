const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 文章推荐
const recommendModel = new Schema({
    _id: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Recommend',recommendModel)
