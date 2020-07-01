const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 标签表
const labelModel = new Schema({
    label: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Label',labelModel)
