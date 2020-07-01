const Article = require('../db/models/article')

// 查询文章详情
async function queryById(id) {
    return await Article.find({_id: id})
}

// 查询文章
async function queryAll(pageSize, currentPage,group) {
    var pageSize = parseInt(pageSize)
    var currentPage = parseInt(currentPage)
    let typeGroup = [0,1,2]
    if(!group) {
        group = null
    } else {
        typeGroup = []
    }
    const result = await Article.find({
        $or:[
            {group: group},
            { group: {$in: typeGroup} }
        ]
    },{
        content_md: 0,
        content_html: 0,
        label: 0
    }).skip((currentPage-1)*pageSize).limit(pageSize).sort({'date_time':-1})
    const count = await Article.estimatedDocumentCount()
    return {result,count}
}

// 通过标签查找
async function queryByLabel(pageSize,currentPage,group) {
    var pageSize = parseInt(pageSize)
    var currentPage = parseInt(currentPage)
    const result = await Article.find({
        label: {
            $elemMatch:{
                $eq: group
            }
        }
    },{
        content_md: 0,
        content_html: 0,
        label: 0
    }).skip((currentPage-1)*pageSize).limit(pageSize).sort({'date_time':-1})
    const count = await Article.find({
        label: {
            $elemMatch:{
                $eq: group
            }
        }
    }).estimatedDocumentCount()
    return {result,count}
}

// 查看关于我的id
async function queryAboutId() {
    return await Article.find({group: 2},{_id: 1}).limit(1)
}

// 阅读数量增加
async function amountAdd(id) {
    await Article.update({
        _id:id
    },{
        $inc: {amount: +1}
    })
}

// 发表文章
async function articlePublish(req) {
    return await Article.create({
        title: req.title,
        author: req.author,
        data_time: req.data_time,
        cover: req.cover,
        type: req.type,
        group: req.group,
        content_md: req.content_md,
        content_html: req.content_html,
        content_summary: req.content_summary,
        label: req.label,
    })
}

// 修改文章
async function articleUpdate(req) {
    return await Article.updateOne({
        _id: req._id
    },{
        title: req.title,
        author: req.author,
        data_time: req.data_time,
        cover: req.cover,
        type: req.type,
        group: req.group,
        content_md: req.content_md,
        content_html: req.content_html,
        content_summary: req.content_summary,
        label: req.label,
    })
}

// 修改文章的推荐状态
async function recommendUpdate(_id,isBoollean) {
    return await Article.update({
        _id:_id
    },{
        isRecommend:isBoollean
    })
}

// 删除文章
async function articleDelete(_id) {
    return await Article.remove({
        _id: _id
    })
}

module.exports = {
    queryById,
    queryAll,
    queryAboutId,
    queryByLabel,
    amountAdd,
    articlePublish,
    articleUpdate,
    articleDelete,
    recommendUpdate
}
