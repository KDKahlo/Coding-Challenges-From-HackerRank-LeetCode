//we know that the function expect taking val as it parameter is the outer function

//inside of the expect function has to exist 2 functions toBe which also takes the parameter of val and notToBe which also takes
//the parameter val.

//if toBe has a value the toBe function should run and compare the 2 vals and return true or false

// IN expect function value is 5
// IN toBe function value is 5

// if (5-expect) === (5-toBe) => true OTHERWISE "Not Equal"

// IN notToBe function value is 5
// if (5-expect) !=== (6-notToBe) => true OTHERWISE "Equal"
function expect(val) {
 if (expect(val)) {
   toBe = (val) => expect(val) === toBe(val)
   
        if (toBe(val) === expect(val)) {
        return {"value": true}
      }
      else if(toBe(val) !== expect(val)) {
        return {"value": "Not" }
     }
    } 
}
console.log(expect(5).toBe(5))