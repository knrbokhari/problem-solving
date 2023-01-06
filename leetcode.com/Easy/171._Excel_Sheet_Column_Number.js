// 171. Excel Sheet Column Number
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 

const titleToNumber = (columnTitle) => {
    let result = 0;

    for ( let i = 0; i < columnTitle.length; i++) {
        result *= 26;
        result += ((columnTitle.charCodeAt(i) - 'A'.charCodeAt(0)) + 1);    
    }

    return result;
};

console.log(titleToNumber("A"))
console.log(titleToNumber("AB"))
console.log(titleToNumber("ZY"))