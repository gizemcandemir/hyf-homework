const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function findShortest(words) {
    let shortestWord = words[0];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }
    return shortestWord;
}

console.log(findShortest(danishWords));