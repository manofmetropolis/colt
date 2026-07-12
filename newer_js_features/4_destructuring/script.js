//From an array
const scores = [3288, 3197, 2890, 2298, 2189, 1899];
//Destructure the array into separate variables
const [gold, silver, bronze, ...otherScores] = scores;

//From an object
const user = {
    email: 'mlvc1958@gmail.com',
    password: 'm4t3r1alG1rl',
    firstName: 'Madonna',
    lastName: 'Ciccone',
    born: 1958,
    bio: 'Madonna is one of the greatest icons of popular music history.',
    city: 'Detroit',
    state: 'Michigan'
}

const user2 = {
    email: 'purple1999@gmail.com',
    firstName: 'Prince',
    lastName: 'Nelson',
    born: 1958,
    city: 'Minneapolis',
    state: 'Minnesota'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// This is easier:
// const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear} = user;

const {city, state, died = 'N/A'} = user2;

// Destructuring params
// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }

// function fullName(user) {
//     const { firstName, lastName} = user;
//     return `${firstName} ${lastName}`;
// }

// Destructure on the way into the object.
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

// With an array

const madonnaAlbums = [
    {
      title: "Madonna",
      year: 1983,
      score: 88,
    },
    {
      title: "Like a Virgin",
      year: 1984,
      score: 96,
    },
    {
      title: "True Blue",
      year: 1986,
      score: 98,
    },
    {
      title: "Who's That Girl",
      year: 1987,
      score: 82,
    },
    {
      title: "Like a Prayer",
      year: 1989,
      score: 100,
    },
    {
      title: "I'm Breathless",
      year: 1990,
      score: 84,
    },
    {
      title: "Erotica",
      year: 1992,
      score: 90,
    },
    {
      title: "Bedtime Stories",
      year: 1994,
      score: 89,
    },
    {
      title: "Ray of Light",
      year: 1998,
      score: 100,
    },
    {
      title: "Music",
      year: 2000,
      score: 95,
    },
    {
      title: "American Life",
      year: 2003,
      score: 86,
    },
    {
      title: "Confessions on a Dance Floor",
      year: 2005,
      score: 99,
    },
    {
      title: "Hard Candy",
      year: 2008,
      score: 83,
    },
    {
      title: "MDNA",
      year: 2012,
      score: 81,
    },
    {
      title: "Rebel Heart",
      year: 2015,
      score: 87,
    },
    {
      title: "Madame X",
      year: 2019,
      score: 85,
    },
    {
        title: "Confessions II",
        year: 2026,
        score: 92,
      },
  ];

//   madonnaAlbums.filter((album) => album.score > 90)
// madonnaAlbums.filter(({ score }) => score > 90);

// madonnaAlbums.map(album => {
//     return `${album.title} (${album.year}) is rated ${album.score}.`
// })
//is the same as:
madonnaAlbums.map(({ title, year, score }) => {
    return `${title} (${year}) is rated ${score}.`
})