const forbes = require('../index')

forbes.list({ limit: 1, filter: { state: '' } }).then(res => {
    console.log(res)
})