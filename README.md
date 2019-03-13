# forbes-list

Npm package that interfaces with the forbes400 api and returns a list of the world richest people

![](/images/youngest.png?raw=true)

![](/images/women.png?raw=true)

### Installing

```
npm install forbes-list --save
```

### Documentation

Explain what these tests test and why

## Usage examples

### Retrieves all billionaires

```js
const forbes = require('forbes-list')

forbes.list().then(response => {
    console.log(response)
})
```

### Limits the length of the returning array 

```js
const forbes = require('forbes-list')

forbes.list({ limit: 5 }).then(response => {
    console.log(response)
})
```

### Limits the length of the returning array
### Valid parameters for filter -> youngest, oldest, women or female, men or male, real-time 

```js
const forbes = require('forbes-list')

forbes.list({ limit: 5, filter: 'real-time' }).then(response => {
    console.log(response)
})
```

### Limits the length of the returning array
### Any valid state in the usa  

```js
const forbes = require('forbes-list')

forbes.list({ limit: 5, filter: { state: 'texas' } }).then(response => {
    console.log(response)
})
```

### Limits the length of the returning array
### Valid industries include -> technology, fashion, finance, investments etc..  

```js
const forbes = require('forbes-list')

forbes.list({ limit: 5, filter: { industry: 'fashion' } }).then(response => {
    console.log(response)
})
```


## Built With

* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [forbesApi](https://forbes400.herokuapp.com) - JSON Api for the forbes list

## Authors

* **Jesse Okeya** - *Initial work* - [website](http://jesseokeya.com)

See also the list of [contributors](https://github.com/jesseokeya/forbes-list/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
