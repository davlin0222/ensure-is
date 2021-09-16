// const ensure = require('ensure-is')
const ensure = require('..');

const probably_pets = ensure(['cat', 'dog', 1, 'unicorn']).is.array();
// probably_pets = ['cat', 'dog', 1, 'unicorn']

const pets = probably_pets.map(pet => {
    return ensure(pet).is.string();
}); // Throws TypeError when pet=1

console.log('pets', pets);
