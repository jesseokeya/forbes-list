const forbes = require('../')

/**  
 * Retrieves all billionaires 
 */
forbes.list().then(response => {
    console.log(response)
})

/**  
 * Limits the length of the returning array 
 */
forbes.list({ limit: 5 }).then(response => {
    console.log(response)
})

/**  
 * Limits the length of the returning array
 * Valid parameters for filter -> youngest, oldest, women or female, men or male, real-time 
 */
forbes.list({ limit: 5, filter: 'real-time' }).then(response => {
    console.log(response)
})

/** 
 * Limits the length of the returning array
 * Any valid state in the usa  
 */
forbes.list({ limit: 5, filter: { state: 'texas' } }).then(response => {
    console.log(response)
})

/**  
 * Limits the length of the returning array
 *  Valid industries include -> technology, fashion, finance, investments etc.. 
 */
forbes.list({ limit: 5, filter: { industry: 'fashion' } }).then(response => {
    console.log(response)
})