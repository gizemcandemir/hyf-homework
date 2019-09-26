const positiveWordsList = ['love', 'good', 'nice', 'super', 'cool', 'mega', 'awesome',];
const negativeWordsList = ['hate', 'bad', 'horrible', 'boring'];

const sentimentScoreObject = {
  score: 0, 
  positiveWords: [],
  negativeWords: []
}

const sentence1 = 'I am mega super awesome happy';
const sentence2 = 'I hate doing boring stuff';

let words = [];

function analyze(string){
  let words = string.split(' ');
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    if (positiveWordsList.includes(words[i])) {
      sentimentScoreObject.score = sentimentScoreObject.score + 1;
      sentimentScoreObject.positiveWords.push(words[i]);
    } else if (negativeWordsList.includes(words[i])){
      sentimentScoreObject.score = sentimentScoreObject.score - 1;
      sentimentScoreObject.negativeWords.push(words[i]);
    } 
  } return sentimentScoreObject;
}

console.log(analyze(sentence1));
// console.log(analyze(sentence2));
