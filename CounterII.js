//Write a function createCounter that accepts integer, init. 
//Should return 3 functions

//first function is increment() --increases current value by 1 and returns it

//second function is decrement() --reduces current value by 1 and returns it

//third function is reset() --sets the current value to init

//we need a variable for the calls --ex: calls = ["increment", "reset", "decrement"]

//we also need to assign each of the 3 functions the corresponding variables of increment, reset, decrement.


init = 0;
let createCounter = function(init) {
    calls = [];
    for (let index = 0; index < calls.length; index++) {
        const element2count = calls[index];  
    
    {
        if (element2count == "increment") {
       return {increment(init) {
            return init++
        }}
            }
        else if (element2count == "decrement") {

        }}
        // decrement(init){
        //     return init--
        // }
        // reset(init){
        //     return init
        // }
       
}}
createCounter(5)
increment()