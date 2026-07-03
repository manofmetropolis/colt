//Some

const someWords = ['This', 'That', 'They', 'Them', 'Butt', 'Head'];

const everyCheck = someWords.every(word => {
    return word.length === 4;
})

const someCheck = someWords.every(word => {
    return word[0] === 'c';
})

const someLastLetter = someWords.some(word => {
    let last_letter = word[word.length - 1];
    return last_letter === 't';
})