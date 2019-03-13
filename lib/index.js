

class ForbesList {
    constructor(options = {}) {
        this.axios = options.axios
        this._ = options._
    }

    async billionaires(params = {}) {
        if (this._.isEmpty(params)) {}
    }
}

module.exports = ForbesList