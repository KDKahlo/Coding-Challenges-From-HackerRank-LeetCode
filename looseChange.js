function looseChange(cents) {
    // Round down the cents if it's a float
    cents = Math.floor(cents);

    // Initialize dictionary with all values equal to 0
    let change = {
        'Nickels': 0,
        'Pennies': 0,
        'Dimes': 0,
        'Quarters': 0
    };

    // Handle negative or zero input
    if (cents <= 0) {
        return change;
    }

    // Calculate the number of each coin denomination
    change['Quarters'] = Math.floor(cents / 25);
    console.log(change['Quarters']);
    cents %= 25;
    console.log(cents %=25)
    change['Dimes'] = Math.floor(cents / 10);
    console.log(change['Dimes']);
    cents %= 10;
    console.log(cents %= 10);
    change['Nickels'] = Math.floor(cents / 5);
    console.log(change['Nickels']);
    cents %= 5;
    console.log(cents %= 5);
    change['Pennies'] = cents;
    console.log(change['Pennies']);

    return change;
    
}

// Test the function
console.log(looseChange(56));      // Output: {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
console.log(looseChange(-435));    // Output: {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
console.log(looseChange(4.935));   // Output: {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}
