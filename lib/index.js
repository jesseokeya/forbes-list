/** 
 * Class representing the forbes list
 * interfaces with the forbes400 api and 
 * returns a list of the richest people in 
 * the world. 
 * 
 * More reference https://forbes400.herokuapp.com
 * @author Jesse Okeya 
 * @param options
 * 
 * @returns {Promise<[Object]>} this.list
 * @returns {Promise<[Object]>} this._evaluateParams
 * @returns {Promise<[Object]>} this._filterRequest
 * @returns {Boolean} this._isNumeric
 * 
 * @throws {Exception} this._handleErr
 * 
 */
class ForbesList {
    constructor(options = {}) {
        /**  initialize variable atteched to the this keyword **/
        this._ = options._
        this.axios = options.axios
        this.url = 'https://forbes400.herokuapp.com'
        
        /** bind methods to class **/
        this.list = this.list.bind(this)
        this._evaluateParams = this._evaluateParams.bind(this)
        this._filterRequest = this._filterRequest.bind(this)
        this._isNumeric = this._isNumeric.bind(this)
        this._handleErr = this._handleErr.bind(this)
    }

    /**
     * Returns a the forbes list with some supported parameters
     * 
     * @param {Object} params
     * @param {String || Number} params.limit - limits the length of results array
     * @param {String} params.filter - youngest, oldest, women or female, men or male, real-time
     * @param {Object} params.filter - state or industry
     * @returns {Promise<[Object]>} Forbes List
     * @throws {Exception} Throws an error if one occurs while running 
     */
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
    
    /**
     * Private helper method that evaluates the parameters passed and returns
     * a filtered forbes list based on those params
     * 
     * @param {Object} params
     * @param {String || Number} params.limit - limits the length of results array
     * @param {String} params.filter - youngest, oldest, women or female, men or male, real-time
     * @param {Object} params.filter - state or industry
     * @returns {Promise<[Object]>} Forbes List
     * @throws {Exception} Throws an error if one occurs while running 
     */
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

    /**
     * Private helper method that evaluates the parameter filter and checks the data type
     * the returns  filtered forbes list based on those params
     * 
     * @param {Object} params
     * @param {String || Number} params.limit - limits the length of results array
     * @param {String} params.filter - youngest, oldest, women or female, men or male, real-time
     * @param {Object} params.filter - state or industry
     * @returns {Promise<[Object]>} Forbes List
     * @throws {Exception} Throws an error if one occurs while running 
     */
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

    /**
     * Private helper method to check if a parameter passed in 
     * from th user is numeric
     * 
     * @returns {Boolean} 
     */
    _isNumeric(value) {
        return /^-{0,1}\d+$/.test(value)
    }

     /**
     * Private helper method to handle errors throughout the class
     * 
     * @throws {Exception} Throws an error if one occurs while running
     */
    _handleErr(err) { 
        throw err 
    }
}

module.exports = ForbesList