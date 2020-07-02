const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userModel = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String ,
        require: true
    },
    nickname: {
        type: String
    },
    // admin ,editor
    roles: {
        type: Array,
        default: ['visitor']
    },
    avatar: {
        type: String
    }
})

module.exports = mongoose.model('User',userModel)
