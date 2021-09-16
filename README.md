# ensure-is

Easy to read type checking library

## Examples

```js
ensure('Fantastic').is.string() // 'Fantastic'
ensure('').is.string() // ''
ensure(4).is.string() // throws TypeError

ensure([1, 'amazing', 'array']).is.array() // [1, 'amazing', 'array']
ensure([]).is.array() // []
ensure('Hello There').is.array() // throws TypeError
```

# Getting started

## Installation

```sh
npm install ensure-is --save
```

## Usage

```js
const ensure = require('ensure-is')

const probably_pets = ensure(['cat', 'dog', 1, 'unicorn']).is.array();
// probably_pets = ['cat', 'dog', 1, 'unicorn']

const pets = probably_pets.map(pet => {
    return ensure(pet).is.string();
}); // Throws TypeError when pet=1
```
