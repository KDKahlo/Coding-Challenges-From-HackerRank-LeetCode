function aVeryBigSum(arr) {
  
return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  
}
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))

module.exports = {aVeryBigSum}