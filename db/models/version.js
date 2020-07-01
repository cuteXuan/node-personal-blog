const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 版本的模型
const versionModel = new Schema({
    version_name: {
        type: String,
        require: true
    },
    version_content:{
        type: String,
        require: true
    },
    data_time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Version',versionModel)
