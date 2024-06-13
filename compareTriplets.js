//compareTriplets

function compareTriplets(a, b) {
    //I need to make 2 compare variables to keep track of how many points each person gets
    //I need to loop through the arrays and compare each number at the same index in a and b
    //if the number in a is greater than the number in b I will add 1 to the compare variable for a
    //if the number in b is greater than the number in a I will add 1 to the compare variable for b
    //if the number in a is equal to the number in b I will add 0 to the compare variable for both
    let aCompare = 0;
    let bCompare = 0;
    //I want to check first that I have 3 scores for each person
    //I also want to check first that know score is more than 100 or less than 0
    //if it is less than 0 or more than 100 I will return an error

    if (aCompare.length === 0 || bCompare.length === 0) {
        return "complete scores for each person not given";
    } else {

  
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0 || a[i] > 100 || b[i] < 0 || b[i] > 100) {
            return "score is not between 0 and 100";
        }
        else if (a[i] > b[i] ) {
            aCompare++;
        }
        else if (a[i] < b[i]) {
            bCompare++;
        }
        else if (a[i] === b[i]) {
            aCompare+= 0;
            bCompare+= 0;
        }
    }
}
    //I will then return an array with the number of points each person gets
    return [aCompare, bCompare];

}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
console.log(compareTriplets([5, 6, 7], [3, 6, 122]));
console.log (compareTriplets([1,2,3], [1, 2, 3 ]));
console.log(compareTriplets([1, 2, 3], [1, 2, 3]))
console.log(compareTriplets([20, 20, 30], [20, 20, 50]))    



