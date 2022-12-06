function SringChallenge(ser){
    let senArray = ser.match(/[a-z0-9]+/gi)
    let longestWord = ''
    let longestLength = 0

    for (let i = 0; i < senArray.length; i++) {
        if(longestLength < senArray[i].length){
            longestLength = senArray[i].length
            longestWord = senArray[i]
        }
    }

    return longestWord;
}

console.log(SringChallenge("Hello world123 567"))
console.log(SringChallenge("I love dogs"))