

function pigafy(string) {

  var sentence = string.split(" ");
  console.log(sentence);
  var pLatin = [];
  var pLatinSentence = pLatin.join(" ");

    for(i = 0; 0 < sentence.length; i++){
      console.log(sentence[i]);
      var firstLetter = sentence[i].charAt(0).toLowerCase();
      console.log(firstLetter);
      var secondLetter = sentence[i].charAt(1).toLowerCase();

      if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u")
        { pLatin.push(sentence[i] + "ay");
          console.log(pLatin);
      }

      if (firstLetter !== "a" || firstLetter !== "e" || firstLetter !== "i" || firstLetter !== "o" || firstLetter !== "u" && secondLetter === "a" || secondLetter === "e" || secondLetter === "i" || secondLetter === "o" || secondLetter === "u") {

        sentence[i] + firstLetter + secondLetter + "ay";

      } else {
        sentence[i]+firstLetter + "ay";
      }
    }


  return pLatinSentence;


}

var testTranslate = "The rain in Spain falls only on the plane";

console.log(pigafy(testTranslate));