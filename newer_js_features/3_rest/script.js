// function sum() {
//     return arguments.reduce((total, el));
// }

// sum(2, 4, 6, 8, 10);

function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}

// We can use other named parameters first, too. You can call out things specifically and then collect the rest into a single parameter.
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`Good job to everyone else: ${everyoneElse}`);
};

raceResults('Rob', 'Mark', 'Prince', 'Joni', 'George');