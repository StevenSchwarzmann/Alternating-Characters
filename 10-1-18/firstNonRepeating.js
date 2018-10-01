function firstNonRepeatingLetter(s) {
    var arr = s.toLowerCase().split('');
    var result = '';
    var count = 0; 
      for(let i = 0; i < arr.length; i++) {
       count = 0;
        for(var j = 0; j < arr.length; j++) {
          if(arr[i] === arr[j]) {
            count++;
          }
        }
      if(count < 2) {
        result = arr.indexOf(arr[i]);
        break;
      }
    }
    return s[result] == undefined ? '' : s[result];
  }