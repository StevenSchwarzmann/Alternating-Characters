function AlanAnnoyingKid(input) {
    let sentenceEnd = input.slice(8, input.length-1);
    let responseBeginning = "I don't think you ";
    let secondBeginning = "I think you ";
    let verb = sentenceEnd.split(' ');
   
    if(verb[0] == "didn't") {
      return responseBeginning + sentenceEnd + " today, " + secondBeginning + "did " + verb[1] + " it!";
    } else {
      return responseBeginning + sentenceEnd + " today, " + secondBeginning + "didn't " + verb[0].slice(0, verb[0].length - 2) + " at all!";
    }
   }