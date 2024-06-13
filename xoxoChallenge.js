
function xo(string){
    //transform string to lowercase
    string = string.toLowerCase();
    return string.split('o').length === string.split('x').length;
    //if the char is x add 1 to x
    //if the char is o add 1 to o
let x = 0;
let o = 0;
 //also possible to split the string and filter the o and then split 
for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "x") {
        x++;
    } else if (string[i].toLowerCase() === "o") {
        o++;
    } 
}
return x === o;
}

console.log(xo("xxXooo")) //should return true
console.log(xo("xXxOoo")) //should return true
console.log(xo("xxoOxO")) //should return true
console.log(xo("xoxOxo"))// should return true
console.log(xo("ooxxo")) //should return false
console.log(xo("ooxOx")) //should return false
console.log(xo("oooxx"))// should return false