const greet = (name) => {
    return $(`Hey ` + name);
}

// Implicit Returns: Only with arrow functions.
// Leave off return in certain situations. It only works with single expressions.

const rollDie = () => (
    Math.floor(Math.random() * 6 + 1)
);

const add = (a,b) => a + b;

// Madonna Albums Fun

const madonnaAlbums = [
    {
        title: 'Madonna',
        score: 70
    },
        {
        title: 'Like a Virgin',
        score: 85
    },
        {
        title: 'True Blue',
        score: 91
    },
        {
        title: 'Like a Prayer',
        score: 95
    },
        {
        title: 'Erotica',
        score: 90
    },
        {
        title: 'Bedtime Stories',
        score: 87
    },
        {
        title: 'Ray of Light',
        score: 98
    },
        {
        title: 'Music',
        score: 89
    },
        {
        title: 'American Life',
        score: 84
    },
        {
        title: 'Confessions on a Dancefloor',
        score: 89
    },
        {
        title: 'Hard Candy',
        score: 83
    },
        {
        title: 'MDNA',
        score: 76
    },
        {
        title: 'Rebel Heart',
        score: 70
    },
        {
        title: 'Madame X',
        score: 80
    }
];

// const madonnaPitchforkScore = madonnaAlbums.map(function (madonnaAlbum) {
//     return `${madonnaAlbum.title}: ${madonnaAlbum.score /10}`
// })

const madonnaPitchforkScore = madonnaAlbums.map(madonnaAlbum => (
    `${madonnaAlbum.title}: ${madonnaAlbum.score /10}`
))

