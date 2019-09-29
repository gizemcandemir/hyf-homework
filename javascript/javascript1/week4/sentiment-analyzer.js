const dictionary = {
  "positiveWords": ["love", "good", "nice", "super", "cool", "mega", "awesome"],
  "negativeWords": ["hate", "bad", "horrible", "boring"]
};

const debug = true;

function analyze(sentence) {
  const sentimentScoreObject = {
    "score": 0,
    "positiveWords": [],
    "negativeWords": []
  };

  let words = sentence.split(" ");
  // console.log(words);
  let sentimentVar = "";

  for (let i=0; i<words.length; i++) {
    if (dictionary.positiveWords.includes(words[i])) {
      sentimentScoreObject.score += 1;
      sentimentScoreObject.positiveWords.push(words[i]);
    } else if (dictionary.negativeWords.includes(words[i])){
      sentimentScoreObject.score -= 1;
      sentimentScoreObject.negativeWords.push(words[i]);
    }
  }

  if (sentimentScoreObject.score > 0) {
    sentimentVar = "positive";
  } else {
    sentimentVar = "negative";
  }
  if (debug) {
    console.log(`"${sentence}"`);
  }
  return `This is a ${sentimentVar} sentence. Here is the details:\n${JSON.stringify(sentimentScoreObject)}\n`;
}

console.log(analyze("I am mega super awesome happy"));
console.log(analyze("I hate doing boring stuff"));
