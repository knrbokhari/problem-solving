// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = (s) => {
    const strArray = s.trim().replace(/\s\s+/g, ' ').split(' ').reverse();
    
    return strArray[0].length;
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))