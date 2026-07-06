const numberss = [9, 8, 7, 6, 5, 4, 3, 2, 1,];

const nums = numberss.filter(n => {
    return n === 4
});

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

const greatMadonnaAlbums = madonnaAlbums.filter(album => {
    return album.score >= 90;
});

console.log(greatMadonnaAlbums);

// const madonna90sAlbums = madonnaAlbums.filter(album => {
//     return album.year >= 1990 && album.year <= 1999;
// });

// const madonna90stitles = madonna90sAlbums.map(m => m.title);
const madonna90stitles = madonnaAlbums.filter(m => m.year > 1990 && m.year < 2000).map(m => m.title);

// console.log(madonna90sAlbums);

// Practice Exercise
const listOfNames = [
    'Madonna',
    'Beauregard',
    'Hollinghurst',
    'Terwilliger',
    'Rastafarian',
    'Dick',
    'Kerfuffles',
    'Spam',
    'BigBootyKimmy',
    'Fahrfignewton'
]

function validUserNames(usernames) {
    return usernames.filter(name => name.length > 6);
}

console.log(validUserNames(listOfNames));