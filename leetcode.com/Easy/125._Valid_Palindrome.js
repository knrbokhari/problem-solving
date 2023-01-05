// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const isPalindrome = (s) => {
    if(!s.match(/[a-zA-Z0-9]/g)) return true;
    return s.match(/[a-zA-Z0-9]/g).join('').toLowerCase() === s.match(/[a-zA-Z0-9]/g).reverse().join('').toLowerCase();
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(""))
