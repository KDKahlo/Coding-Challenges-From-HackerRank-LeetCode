let argumentsLength = function(...args) {
    return arguments.length
}
console.log(argumentsLength([5]))

console.log(argumentsLength(5, 6, 7, 8, 9))

console.log(argumentsLength('a', 'b', 'c', 'd', 'e'))

console.log(argumentsLength())  
console.log(argumentsLength([{}, null, "3"]))