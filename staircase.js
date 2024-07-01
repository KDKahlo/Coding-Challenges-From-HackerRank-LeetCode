function staircase(n) {
 // Loop from 1 to n, for each iteration print n-1
 // number of hashes in each line (representing the staircase)
    // for (let i = 1; i <= n; i++) {
    //     // Print spaces before hashes
    //     for (let j = 1; j <= n - i; j++) {
    //         console.log(" ");
    //     }
    //     // Print hashes
    //     for (let k = 1; k <= i; k++) {
    //         console.log("#");
    //     }
    //     console.log("\n");
    // }
    for (let hash = "#"; hash.length < n; hash++){
        console.log(hash);
      
    }
    
}
console.log(staircase(5))