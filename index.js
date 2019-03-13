/*!
 * forbes-list.
 *
 * Main entry file.
 * @author Jesse Okeya <jesseokeya@gmail.com>
 * @created 12/03/2019
 */
const _ = require('lodash')
const axios = require('axios')

const ForbesList = require('./lib')

module.exports = new ForbesList({ axios, _ })