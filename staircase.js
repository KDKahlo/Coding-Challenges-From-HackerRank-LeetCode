function staircase(n) {
 // Loop from i to n, for each iteration print n-i
 // number of hashes in each line (representing the staircase)
 
    for (let i = 1; i <= n; i++) {
        //calculate the number of spaces and hashes
        let space = ' '.repeat(n- i);
        let hashes = '#'.repeat(i);
        //print the line
        console.log(space + hashes)

    }
   
}
staircase(6) 