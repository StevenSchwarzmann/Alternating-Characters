function encrypt(text, n) {
    let newArray = text.split('');
    if (n > 0){
      while(n > 0){
        let result = []
        for(let i = 1; i < newArray.length; i+=2){
          result.push(newArray[i])
        }
        for(let i = 0; i < newArray.length; i+=2){
          result.push(newArray[i])
        }
        newArray = result
        n--
      }
      return newArray.join('')
    }else { 
      return text
    }
  }