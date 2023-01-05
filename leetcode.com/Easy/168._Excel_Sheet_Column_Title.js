// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 

var convertToTitle = function(columnNumber) {
    let starctCharCode = "A".charCodeAt(0) -1;
    let res = ''
    while (columnNumber > 0) {
        const ost = columnNumber % 26  || 26; 
        res = String.fromCharCode(starctCharCode + ost) + res
        columnNumber = Math.floor((columnNumber - 1) / 26);
        
    }
    return res
};

console.log(convertToTitle(1))
console.log(convertToTitle(28))
console.log(convertToTitle(701))

