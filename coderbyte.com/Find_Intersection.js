// Find Intersection
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10

function FindIntersection(strArr) { 

    // code goes here  
    let strArray1 = strArr[0].match(/[0-9]+/gi)
    let strArray2 = strArr[1].match(/[0-9]+/gi)
    let array1 = strArray1.map(Number)
    let array2 = strArray2.map(Number)

    const result= array1.filter(i => array2.includes(i))

    if(!result.length){
        return false
    }
    return result.toString(); 
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));
  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
  console.log(FindIntersection(["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"]));