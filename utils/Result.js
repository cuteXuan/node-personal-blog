const {
    CODE_SUCCESS,
    CODE_ERROR,
    CODE_TOKEN_EXPIRED
} = require('./code')

/***
 * data:返回的数据
 * msg：返回的信息
 * options：额外数据
 */
class Result {
    constructor(data,msg = '操作成功',options) {
        this.data = null
        if(arguments.length === 0) {
            this.msg = '操作成功'
        } else if(arguments.length === 1) {
            this.msg = data
        } else {
            this.data = data
            this.msg = msg
            if (options) {
                this.options = options
            }
        }
    }
    creatResult() {
        // 默认是成功的
        if(!this.code){
            this.code = CODE_SUCCESS
        }
        let res = {
            code: this.code,
            msg: this.msg
        }

        if (this.data) {
            res.data = this.data
        }

        if(this.options) {
            res = { ...res,...this.options }
        }
        return res

    }
    json(res) {
        res.json(this.creatResult())
    }

    success(res) {
        this.code = CODE_SUCCESS
        this.json(res)

    }
    fail(res) {
        this.code = CODE_ERROR
        this.json(res)
    }

    // token失效错误
    jwtError(res) {
        this.code = CODE_TOKEN_EXPIRED
        this.json(res)
    }
}

module.exports = Result
