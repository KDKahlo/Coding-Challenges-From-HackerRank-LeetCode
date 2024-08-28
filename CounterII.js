//Write a function createCounter that accepts integer, init. 
//Should return 3 functions

//first function is increment() --increases current value by 1 and returns it

//second function is decrement() --reduces current value by 1 and returns it

//third function is reset() --sets the current value to init

//remember it should be an object not an array so you don't have to account for that.

//we also need to assign each of the 3 functions the corresponding variables of increment, reset, decrement.



function createCounter(init) {
    let current = init;
    return {
        increment: function () {
            current+=1;
            return current;            
        },
        decrement: function() {
            current -=1;
            return current;
        },
        reset: function() {
            current =  init;
            return init;
        }
    }
    
}
// const counter = createCounter(5)
// console.log(counter.increment())
// console.log(counter.reset())
// console.log(counter.decrement())

const counter = createCounter(0)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.reset())


