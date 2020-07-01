const Version = require('../db/models/version')

// 查询所有的版本
async function queryAllVersion() {
    return await Version.find().sort({'data_time':-1})
}

// 添加版本
async function versionAdd(req) {
    return await Version.create({
        version_name: req.version_name,
        version_content: req.version_content,
        data_time: req.data_time
    })
}

// 删除版本
async function versionDelete(_id) {
    return await Version.remove({
        _id: _id
    })
}

// 修改版本
async function versionUpdate(req) {
    return await Version.updateOne({
        _id: req._id
    },{
        version_name: req.version_name,
        version_content: req.version_content,
        data_time: req.data_time
    })
}



module.exports = {
    queryAllVersion,
    versionAdd,
    versionDelete,
    versionUpdate
}
