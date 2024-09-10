//we know that the function expect taking val as it parameter is the outer function

//inside of the expect function has to exist 2 functions toBe which also takes the parameter of val and notToBe which also takes
//the parameter val.

//if toBe has a value the toBe function should run and compare the 2 vals and return true or false

// IN expect function value is 5
// IN toBe function value is 5

let expect = function expect(val) {
   
    return {
    toBe(val1) {
        if(val == val1) {
            return true
        } else {
            throw "Not Equal"
        }
    },
    notToBe(val1) {
        if(val !== val1) {
            return  true
        } else {
            throw "Equal"
        }
    }
}
}

console.log(expect(5).toBe(null))
console.log(expect(4).notToBe(4))
console.log(expect('10'))
















// let expect = function expect(val) {
//   return {
//       toBe(val2) {
//         if (val == val2) {
//             return {"value": true}
//         } else {
//             return {"value": "Not equal"}
//         }
//     },
//      notToBe(val2) {
//         if (val !== val2) {
//             return {"value": true}
//         } else {
//             return {"value": "Equal"}
//         }
//     }
//     }
// }



