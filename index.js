const fs = require('fs');
const writersSource = reqire('data/writers3firstLetters.json');
const writers = JSON.parse(fs.readFileSync(writersSource));

const binarySearch = (array) => {
    let p = 0,
        r = array.length
};
