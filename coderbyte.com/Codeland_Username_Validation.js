// Codeland Username Validation
// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.
// Examples
// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true

function CodelandUsernameValidation(str) { 
    // code goes here  
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g

    return regex.test(str) && str.length >= 4 && str.length <= 25; 
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation("aa_"));
  console.log(CodelandUsernameValidation("u__hello_world123"));
  console.log(CodelandUsernameValidation("__bbbbbbb"));
  console.log(CodelandUsernameValidation("b3333434_"));
  console.log(CodelandUsernameValidation("oooooooooooooooooo________a"));
  console.log(CodelandUsernameValidation("123abc444"));
  console.log(CodelandUsernameValidation("a______b_________555555555555aaaa"));