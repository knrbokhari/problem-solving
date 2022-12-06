function FirstFactorial(num) { 
    let intNum = parseInt(num)
    let sum = 1

    if(intNum  >= 1 && intNum <= 18 ) {
        for (intNum; intNum > 0; intNum--) {
            sum = sum * intNum
        }
    }
    return sum;  

  }
     
  // keep this function call here 
  console.log(FirstFactorial(8));
  console.log(FirstFactorial(4));