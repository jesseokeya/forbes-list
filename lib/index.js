class ForbesList {
    constructor(options = {}) {
        this._ = options._
        this.axios = options.axios
        this.url = 'https://forbes400.herokuapp.com'
    }

    async list(params = {}) {
        try {
            if (!this._.isEmpty(params)) {
                params.limit = params.limit ? this._.toString(params.limit) : params.limit
                return this._evaluateParams(params)
            }
            return this.axios.get(`${this.url}/api/forbes400/getAllBillionaires`).then(res => res.data)
        } catch (e) {
            this._handleErr(e)
        }
    }

    async _evaluateParams({ limit, filter }) {
        try {
            if (!this._.isEmpty(limit) && !this._isNumeric(limit)) {
                throw new Error(`limit should be number but found ${typeof limit} intead`)
            }
            if (!this._.isEmpty(filter)) {
                return this._filterRequest({ limit, filter })
            }
            return this.axios.get(`${this.url}/api/forbes400/getAllBillionaires?limit=${limit}`).then(res => res.data)
        } catch (e) {
            this._handleErr(e)
        }

    }

    async _filterRequest({ limit, filter }) {
        try {
            const size = !this._.isEmpty(limit) ? limit : ''
            if (this._.isObject(filter)) { 
                const keys = Object.keys(filter).map(key => key.trim().toLowerCase())
                if (!keys.includes('state') && !keys.includes('industry')) {
                    throw new Error('Valid object keys for filter object should either be state or industry')
                }
                const key = keys[0]
                const ctx = filter[key]
                if (key === 'state') {
                    return this.axios.get(`${this.url}/api/forbes400/states/${ctx}?limit=${size}`).then(res => res.data)
                }
                return this.axios.get(`${this.url}/api/forbes400/industries/${ctx}?limit=${size}`).then(res => res.data)
            }
            if (this._.isString(filter)) {
                const validChoices = ['youngest', 'oldest', 'women or female', 'men or male', 'real-time']
                if (!validChoices.includes(filter.trim().toLowerCase())) {
                    throw new Error(`Invalid request for filter parameter. Try any of the following valid parameters ${validChoices}`)
                }
                return this.axios.get(`${this.url}/api/forbes400/${filter}?limit=${size}`).then(res => res.data)
            }
        } catch (e) {
            this._handleErr(e)
        }
    }

    _isNumeric(value) {
        return /^-{0,1}\d+$/.test(value)
    }

    _handleErr(err) { 
        throw err 
    }
}

module.exports = ForbesList