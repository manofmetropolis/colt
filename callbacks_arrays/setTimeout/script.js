// setTimeout - expects two things
// 1. callback function
// 2. delay in milliseconds

console.log('Chris Evans is hot')

setTimeout(() => {
    console.log('So is Tom Holland.')
}, 5000)

console.log('Honestly, so is Anthony Mackie.')

const id = setInterval(() => {
    console.log(Math.random())
}, 1000);

clearInterval(id);