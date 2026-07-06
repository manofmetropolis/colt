const numbers = [128, 124, 316, 245, 75, 96, 117, 308, 491, 150];

const reducedArray = numbers.reduce((acc, currentValue) => {
    return acc + currentValue;
});

console.log(reducedArray);

// The equivalent for loop in practice:
let total = 0;
for (let num of numbers) {
    total += num;
}
console.log(total);

// Find the minimum number

const minNumber = numbers.reduce((min, num) => {
    if (num < min) {
        return num;
    }
    return min;
})

const madonnaAlbums = [
    {
        title: 'Madonna',
        score: 70,
        year: 1983,
    },
    {
        title: 'Like a Virgin',
        score: 85,
        year: 1984,
    },
    {
        title: 'True Blue',
        score: 91,
        year: 1986,
    },
    {
        title: 'Like a Prayer',
        score: 95,
        year: 1989,
    },
    {
        title: 'Erotica',
        score: 90,
        year: 1992,
    },
    {
        title: 'Bedtime Stories',
        score: 87,
        year: 1994,
    },
    {
        title: 'Ray of Light',
        score: 98,
        year: 1998,
    },
    {
        title: 'Music',
        score: 89,
        year: 2000,
    },
    {
        title: 'American Life',
        score: 84,
        year: 2003,
    },
    {
        title: 'Confessions on a Dancefloor',
        score: 89,
        year: 2005,
    },
    {
        title: 'Hard Candy',
        score: 83,
        year: 2008,
    },
    {
        title: 'MDNA',
        score: 76,
        year: 2012,
    },
    {
        title: 'Rebel Heart',
        score: 70,
        year: 2015,
    },
    {
        title: 'Madame X',
        score: 80,
        year: 2019,
    },
    {
        title: 'Confessions 2',
        score: 89,
        year: 2026
    }
]

const madonnaHighScore = madonnaAlbums.reduce((bestAlbum, currAlbum) => {
    if (currAlbum.score > bestAlbum.score) {
        return currAlbum;
    }
    return bestAlbum;
})

console.log(madonnaHighScore.title + `, ` + madonnaHighScore.year);