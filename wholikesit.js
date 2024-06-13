function likes(names) {
    const numLikes = names.length;

    // Define formatter functions
    const zeroLikes = () => "no one likes this";
    const oneLike = (name) => `${name} likes this`;
    const twoLikes = (name1, name2) => `${name1} and ${name2} like this`;
    const threeLikes = (name1, name2, name3) => `${name1}, ${name2} and ${name3} like this`;
    const moreThanThreeLikes = (name1, name2) => `${name1}, ${name2} and ${numLikes - 2} others like this`;

    // Handle case of more than three likes separately
    if (numLikes > 3) {
        return moreThanThreeLikes(names[0], names[1]);
    }

    // Create a dictionary mapping number of likes to formatter functions
    const formatter = {
        0: zeroLikes,
        1: oneLike,
        2: twoLikes,
        3: threeLikes,
    };

    // Get the appropriate formatter function based on the number of likes
    const format = formatter[numLikes];

    // Call the formatter function with names
    return format(...names);
}

// Test cases
console.log(likes([]));                                // "no one likes this"
console.log(likes(["Peter"]));                         // "Peter likes this"
console.log(likes(["Jacob", "Alex"]));                 // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"]));           // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));  // "Alex, Jacob and 2 others like this"
