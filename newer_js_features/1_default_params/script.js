// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

// This is the new shorthand syntax for default parameters
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

function greet (msg = "Ay", person = "yo") {
    return `${msg, person}`;
}