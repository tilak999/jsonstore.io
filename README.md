## jsonstore.io - Node Library
![Travis CI](https://travis-ci.org/Tilak999/jsonstore.io.svg?branch=master)
A node wrapper library for <a href='https://www.jsonstore.io'>www.jsonstore.io</a>

## Install
``` shell
npm install --save jsonstore.io
```
## Examples
Make sure to replace the TOKEN in the examples to your own TOKEN, that can be found at <a href='https://www.jsonstore.io/'>https://www.jsonstore.io/</a>.

``` shell
Eg. https://www.jsonstore.io/<TOKEN>
```

### Write Data
```js
var jsonstore = require('jsonstore.io')

// Replace this token with your token.
const TOKEN = '3c9622697a53d8b2f3cf825dc4160f7e1aad46c1a759475edeb76bce5cd33a64'

let store = new jsonstore(TOKEN)

// Any valid JSON object can be written to given end-point
store.write('Person',{ Name: 'John Doe', Age: 56})

// Inner JSON object/Value can be created or modified using URL type path.
store.write('Person/Email','john@demo.com')
```

### Read Data
```js
var jsonstore = require('jsonstore.io')

// Replace this token with your token.
const TOKEN = '3c9622697a53d8b2f3cf825dc4160f7e1aad46c1a759475edeb76bce5cd33a64'

let store = new jsonstore(TOKEN)

// Reading data from any JSON object returns promise.
store.read('Person').then( (data) => {
  console.log(data) // { "Age":56, "Email":"john@demo.com", "Name":"John Doe" }
})

// Value of any key can be accessed directly.
store.read('Person/Name').then( (data) => {
  console.log(data) // John Doe
})
```

### Delete Data
```js
var jsonstore = require('jsonstore.io')

// Replace this token with your token.
const TOKEN = '3c9622697a53d8b2f3cf825dc4160f7e1aad46c1a759475edeb76bce5cd33a64'

let store = new jsonstore(TOKEN)

// Pass JSON key to delete.
store.delete('Person/Name')
```
If you don't pass any key to <b>delete</b> method then all the data would be deleted.<br/>i.e Root node will be deleted.

