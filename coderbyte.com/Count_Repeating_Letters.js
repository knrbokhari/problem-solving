function StringChallenge(str) { 

    // code goes here  
    let strArray = str.split('')
    let letters = []
    let count = 1
  
    for( let i = 0; i < strArray.length; i++){
      if(strArray[i] == strArray[i+1]){
        count++
      } else {
        let value = `${count}${strArray[i]}`
        letters = [...letters, value]
        count = 1;
      }
    }
    return letters.join('')
  
  }
     
  // keep this function call here 
  console.log(StringChallenge('wwwccb'));