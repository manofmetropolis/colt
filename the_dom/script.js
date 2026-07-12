//Selecting elements from the DOM in Javascript:

// By tag name
// const allCovers = document.getElementsByTagName('img');

// for (let img of allCovers) {
//     console.log(img.src);
//     img.src = "https://upload.wikimedia.org/wikipedia/en/2/27/Music_Madonna.png";
// }

// By className

const reallyGoodAlbums = document.getElementsByClassName('reallyGood');

for (let img of reallyGoodAlbums) {
    console.log(img.src);
    // img.src = "https://upload.wikimedia.org/wikipedia/en/2/27/Music_Madonna.png";
}

// By ID
const rayOfLight = document.getElementById('rayOfLight');
console.log(rayOfLight);