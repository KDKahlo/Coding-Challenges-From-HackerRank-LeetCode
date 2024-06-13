function isNarcissisticNumber(n) {
    // Convert the number to a string to count the number of digits
    let numStr = String(n);
    let l = numStr.length;
    
    // Calculate the sum of each digit raised to the power of l
    let sumOfPowers = 0;
    for (let i = 0; i < l; i++) {
        sumOfPowers += Math.pow(parseInt(numStr[i]), l);
    }
    
    // Check if the sum is equal to the original number
    return sumOfPowers === n;
}

// Test the function
console.log(isNarcissisticNumber(153));  // Output: true
console.log(isNarcissisticNumber(370));  // Output: true
console.log(isNarcissisticNumber(9474)); // Output: true
console.log(isNarcissisticNumber(123));  // Output: false
