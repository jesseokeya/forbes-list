# forbes-list

Npm package that interfaces with the forbes400 api and returns a list of the world richest people

![](/images/youngest.png?raw=true)

![](/images/women.png?raw=true)

## Installing

```
npm install forbes-list --save
```

## Documentation

Install and require the library to begin

```js
const forbes = require('forbes-list')
forbes.list(options)
```

| Options       | Type                      | Value(s)      | Default       | Description                                           |
| ------------- | -------------             | ------------- | ------------- |  -------------                                        |
|               | {null}                    | null          | null          |  Retrieves and returns a lis of all billionaires      |
| limit         | {Number} | {String}       | valid integer | 2153          |  Limits the length of the returning array             |

## Usage examples

### Payload Sample 

```js
[{ position: 1,
    rank: 1,
    name: 'Jeff Bezos',
    lastName: 'Bezos',
    uri: 'jeff-bezos',
    imageUri: 'jeff-bezos',
    worth: 131000,
    worthChange: 1342.991,
    age: 55,
    source: 'Amazon',
    industry: 'Technology',
    gender: 'M',
    country: 'United States',
    title: 'CEO and Founder, Amazon',
    timestamp: 1552490101279,
    headquarters: 'WA',
    state: 'Washington',
    realTimeWorth: 139428.694,
    realTimeRank: 1,
    realTimePosition: 1,
    government: false,
    squareImage: '//specials-images.forbesimg.com/imageserve/5bb22ae84bbe6f67d2e82e05/416x416.jpg?background=000000&cropX1=904&cropX2=1403&cropY1=262&cropY2=761' }]
```

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
* [forbesApi](https://forbes400.herokuapp.com) - JSON Api Of The Forbes 400 Richest People List

## Authors

* **Jesse Okeya** - *Initial work* - [website](http://jesseokeya.com)

See also the list of [contributors](https://github.com/jesseokeya/forbes-list/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
