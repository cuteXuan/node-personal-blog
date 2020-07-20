const Comment = require('../db/models/comment')

// 查询评论
async function queryAllComment(commentType) {
    console.log(commentType)
    return await Comment.find({
        commentType: commentType
    }).sort({'commentDate':-1})
}

// 添加评论
async function commentAdd(req) {
    return await Comment.create({
        commentType: req.commentType,
        nickname: req.nickname,
        comment: req.comment
    })
}

// 添加子评论
async function commentAddChildren(req) {
    return await Comment.updateOne({
        _id:req._id
    },{$push:{
            reply:{
                nickname: req.nickname,
                comment: req.comment,
                commentDate: new Date()
            }
        }
    })
}



module.exports = {
    queryAllComment,
    commentAdd,
    commentAddChildren
}
