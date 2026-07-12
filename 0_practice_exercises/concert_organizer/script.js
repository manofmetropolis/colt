const concerts = [
    {
        artist: "Madonna",
        city: "Chicago",
        date: "2026-08-12",
        venue: {
            name: "United Center",
            capacity: 23500
        }
    },
    {
        artist: "Taylor Swift",
        city: "Nashville",
        date: "2026-09-01",
        venue: {
            name: "Nissan Stadium",
            capacity: 69143
        }
    },
    {
        artist: "Lady Gaga",
        city: "Las Vegas",
        date: "2026-10-20",
        venue: {
            name: "T-Mobile Arena",
            capacity: 20000
        }
    }
];

//   function printConcert(concert) {
//     console.log(`${concert.artist} will perform in ${concert.city} on ${concert.date} at ${concert.venue.name} (${concert.venue.capacity} seats.)`);
//   }

// function printConcert({
//     artist,
//     city,
//     date,
//     venue: {
//         name,
//         capacity
//     }
// }) {
//     console.log(`${artist} will perform in ${city} on ${date} at ${name} (${capacity} seats.)`);
// }

function isLargeVenue({ venue: { capacity } }) {
    return capacity > 30000;
}