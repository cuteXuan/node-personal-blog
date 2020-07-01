const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 友情链接
const linksModel = new Schema({
    name: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
    create_time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Links',linksModel)
