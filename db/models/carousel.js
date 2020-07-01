const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 轮播图的模型
const carouselModel = new Schema({
    carouselAddress: {
        type: String,
        require: true
    },
    weights: {
        type: Number,
        require: true,
        default: 999
    },
    linkAddress: {
        type: String
    }
})

module.exports = mongoose.model('Carousel',carouselModel)
