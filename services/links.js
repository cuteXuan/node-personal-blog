const Links = require('../db/models/links')

// 查询所有的友情链接
async function queryAllLinks() {
    return await Links.find()
}

// 添加友情链接
async function linksAdd(req) {
    return await Links.create({
        name: req.name,
        link: req.link
    })
}

// 删除友情链接
async function linksDelete(_id) {
    return await Links.remove({
        _id: _id
    })
}

// 修改友情链接
async function linksUpdate(req) {
    return await Links.updateOne({
        _id: req._id
    },{
        name: req.name,
        link: req.link
    })
}

module.exports = {
    queryAllLinks,
    linksAdd,
    linksDelete,
    linksUpdate
}
