
//we also need to make sure that 'a & b' are numbers.
//we need to make sure that 'a & b' are great than 1 but less than 1,000
//if 'a & b' meet all of these requirements, return the sum of 'a' and 'b'

//make sure we have an 'a' & 'b'

function solveMeFirst(a,b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "a and b must be numbers"}
        
 if ( a >= 1 && a <= 1000 && b >= 1 && b <= 1000) {
 return a + b;
    }

else {return "a and b must be numbers between 1 and 1000" }
}
console.log(solveMeFirst(5,10))
console.log(solveMeFirst(100,1000))
console.log(solveMeFirst(5000,1000))
console.log(solveMeFirst(100, 100.5))
