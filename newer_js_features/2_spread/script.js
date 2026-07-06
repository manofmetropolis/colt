const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

console.log(Math.max(...nums));

console.log('hello');
console.log(...'hello')

// Spread takes the elements of anything you can iterate over and passes those elements individually into a function call.

const fish = ['Wyclef', 'Lauryn', 'Pras'];
const dogs = ['Buddy', 'Boone', 'Sugar'];

const allPets = [...fish, ...dogs, 'Buddy II'];

// Spread with object literals

const superman = { canFly: true, home: 'Krypton' };
const spiderman = { species: 'human', home: 'Bronx'};

// You can use spread to combine multiple objects into a new object.
const superSpider = {...spiderman, ...superman};
// When there is a conflict (i.e., two objects have the same property with different values, the last one will win, based on the order the objects were passed, that is.)

const dataFromForm = {
    email: 'rgraff@gmail.com',
    password: 'password123!',
    username: 'manofsteel11'
}

const newUser = {...dataFromForm, isAdmin: false}