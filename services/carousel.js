const Carousel = require('../db/models/carousel')

// 查询所有的轮播图
async function queryAllCarousel() {
    return await Carousel.find().sort({'weights':-1})
}

// 添加轮播图
async function carouselAdd(req) {
    return await Carousel.create({
        carouselAddress: req.carouselAddress,
        weights: req.weights,
        linkAddress: req.linkAddress
    })
}

// 删除轮播图
async function carouselDelete(_id) {
    return await Carousel.remove({
        _id: _id
    })
}

// 更新轮播图
async function carouselUpdate(req) {
    return await Carousel.updateOne({
        _id: req._id
    },{
        carouselAddress: req.carouselAddress,
        weights: req.weights,
        linkAddress: req.linkAddress
    })
}


module.exports = {
    queryAllCarousel,
    carouselAdd,
    carouselDelete,
    carouselUpdate
}
