
/*------------------
1)
In the loop below, fix the
statement inside the body of the
do loop so that the console 
prints the numbers from 0-10.
------------------*/
// let count = 0;

// do {
//   console.log(count);
//   count++;
// }
// while (count < 10);
// console.log(count)




/*------------------
2)
Create a loop that counts
up to 100.
------------------*/
// let count = 0;

// do {
//   console.log(count);
//   count++;
// }
// while (count < 100);

// for (let count = 0; count < 100; count++) {
  
//   console.log(count);
// }
/*------------------
3)
Create a loop that counts
down from 100.
------------------*/
// let count = 100;

// do {
//   console.log(count);
//   count--;
// }
// while (count > 0);
// console.log(count)


/*------------------
4)
Add a console.log statement
in the body of the loop below
so that it prints the numbers
from zero to four.
------------------*/

// const start = 5;
// let end = 0;

// while (start > end) {
//   console.log(end)
//   end++;
  
// }


/*------------------
5)
Add a JavaScript expression
inside the ${} so that it prints
the difference between the capacity
and the count of people.
------------------*/

const people = 1;
const capacity = 12;

for (let people = 1; people <= capacity; people++) {
  console.log(`There is room for ${capacity - people} more guests in the building`);
}


/*------------------
6)
Add all EVEN numbers between 0 and 50.
Print output in console.log at the end.

Hint: increase your count by two each
time you iterate!
------------------*/
// let sum = 0;
// for (let num = 0; num <= 50; num +=2) {
//   if (num % 2 == 0) {
//     sum += num
    
//   } 
// }
// console.log(sum);


/*------------------
7)
Now, create a for loop that prints
ALL numbers between 0 and 50
to the console.

Add an if/else statement within the
body of the loop. If the number (x) is 
even, print `The number ${x} is even`.
If the number (x) is odd, print
`The number ${x} is odd`.
------------------*/
// for (let x = 0; x <= 50; x ++) {
//    if (x % 2 == 0) {
//      console.log(`The number ${x} is even`);
//    } else {
//     console.log(`The number ${x} is odd`)
//    }
//  }

/*------------------
8)
Let's try something new. 

To select a character in a string,
use "charAt()", and insert the number
you want to access inside the parentheses.
For example: "Sofia".charAt(0) is "S"
and "Sofia".charAt(2) is "f"

Using ".toUpperCase" converts a letter to
uppercase.

Make ONE change in the code below so
that every other letter is uppercase.
------------------*/
// const sentence = "i am shouting";
// const numberOfChars = 12;
// let result = "";
// let i = 0;

// while (i <= numberOfChars) {
//   let letter = sentence.charAt(0);
//   if (i % 2 === 0) {
//     letter = letter.toUpperCase();
//   }
//   result += letter;
//   i++;
// }

// console.log(result);

// const sentence = "i am shouting";
// const numberOfChars = 12;
// let result = "";
// let i = 0;

// while (i <= numberOfChars) {
//   let letter = sentence.charAt(i);
//   if (i % 2 === 0) {
//     letter = letter.toUpperCase();
//   }
//   result += letter;
//   i++;
// }

// console.log(result);


/*------------------
9)
Write a program that uses console.log to
print all the numbers from 1 to 100.

Now, for all numbers divisible by 3,
print "Fizz" instead of the number.
For numbers divisible by 5,
print "Buzz" instead.
For numbers divisible by BOTH 5 & 3, 
print "FizzBuzz".

This is a very common interview question.
Good luck!
------------------*/
// for (let number = 0; number < 100; number++) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     console.log(" FizzBuzz")
//   } if (number % 3 === 0) {
//     console.log("Fizz")
//   } if (number % 5 === 0) { console.log( "Buzz")
//     }
//   else {
//     console.log(number)
//   }
//


/*------------------
10)
Create the triangle below by writing
a loop that makes five calls to console.log.

*
**
***
****
*****
------------------*/
for (let star = "*"; star.length < 6; star += "*")
    console.log(star);
  
  
  
   /*
My pseudo code: 
I need to be able to run a loop inside of a loop but making sure they stay attached.
For this I'm going to start with what we learned in study group. 

Hint: Use nested loops; the outer loop for rows and the inner loop for columns.
First, I'm going to use these nested loops we learned about. 
I'll flip it so that the column starts off with 5 values and decreases.
Then, I will change the value so that 99 will count down by 3s until the largest row has 

Here we go:
*/
// for (let row = 29; row <= 38; row++) {
//   let counter = '';
//   let line = " ";
//   for (let column = 33; column >= row;  column--) {
 
   
//        line += (column *3) + " "
//    }
//   console.log(line);
//   }
let nums = [99, 96, 93, 90, 88];
for (let i = nums.length; i > 0 ; i--) {
  console.log(nums.join(" "))
  nums.pop();
}