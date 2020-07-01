const Label = require('../db/models/label')

// 查询所有的标签
async function queryAllLabel() {
    return await Label.find()
}

// 添加标签
async function labelAdd(label) {
    return await Label.create({
        label: label
    })
}



module.exports = {
    queryAllLabel,
    labelAdd
}
