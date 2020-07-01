const Recommend = require('../db/models/recommend')

// 查询所有的推荐文章
async function queryAllRecommend() {
    return await Recommend.find()
}

// 查询文章是否推荐
async function queryByIdRecommend(id) {
    return await Recommend.findOne({
        _id : id
    })
}

// 查看文章数量
async function queryCountRecommend() {
    return await Recommend.estimatedDocumentCount()
}

// 添加推荐文章
async function recommendAdd(_id,title) {
    return await Recommend.create({
        _id: _id,
        title: title
    })
}

// 删除推荐文章
async function recommendDelete(_id) {
    return await Recommend.remove({
        _id: _id
    })
}


module.exports = {
    queryAllRecommend,
    recommendAdd,
    recommendDelete,
    queryByIdRecommend,
    queryCountRecommend
}
