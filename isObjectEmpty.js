// I need to be able to check if an object or an array is empty

let isEmpty = function(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
            
        }
    }
    return true
}
