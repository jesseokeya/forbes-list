const forbes = require('../index')

forbes.list({ limit: 1, filter: { state: 'california' } }).then(res => {
    console.log(res)
})