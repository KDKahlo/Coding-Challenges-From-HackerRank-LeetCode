//for this we are cutting each number in an array by the shortest number in the array until the array only has one number left
//we will also need to count how many times we cut the array
const cutArray = (arr) => {
    //we need a variable to count how many times we cut the array
    let cuts = [];
    //first we need to make sure we continue to loop through the array as long as the array has at least 1 number in it
    while (arr.length > 0) {
     //we will add the shortest number to the cuts variable to keep track of how many times we cut the array
     cuts.push(arr.length);
    //we can use the Math.min function to find the shortest number in the array
        let shortest = Math.min(...arr);
   
    //we will then loop through the array and subtract the shortest number from each number in the array
     for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] - shortest;
     }
     //we will then filter out all the numbers that are less than or equal to 0 in the array
       arr = arr.filter(num=> num > 0);
    }
    //we will then return the cuts variable to show how many times we cut the array
    return cuts;
   
          
};
   
console.log(cutArray([1, 2, 3, 4, 5,6]));


//simple array sum
function simpleArraySum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(simpleArraySum([1, 2, 3, 4, 5]));












