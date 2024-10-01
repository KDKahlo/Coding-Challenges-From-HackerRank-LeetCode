function reduce(nums, fn, init) {
    let res = init;
    for(let i = 0; i < nums.length; i++) {
        res = fn(res, nums[i]);
        
    }
    return res;
}
console.log(reduce([1, 2, 3, 4], function sum(accum, curr) {return accum + curr * curr;}, 100))
console.log(reduce([], function sum(accum, curr) {return 0; }, 25))

