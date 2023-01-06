// Given an integer x, return true if x is a palindrome , and false otherwise.

const isPalindrome = function(x) {
    if(x.toString() === x.toString().split('').reverse().join('')){
        return true
    }
    return false
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))