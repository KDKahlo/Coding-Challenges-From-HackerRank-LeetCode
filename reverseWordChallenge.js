

// DESCRIPTION:
// Reverse every other word in a given string, then return the string. 
// Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
// Punctuation marks should be treated as if they are a part of the word in this kata.

function ReverseEveryOtherWord(string) {
        //throw away the whitespace at the beginning and end of the string
        // trim the whitespace
        string = string.trim();
        console.log(string);
        // Split the string into an array of words
        //this will handle the splitting of the string and also ensure there is exactly one space between each word
        let words = string.split(/\s+/);
        console.log(words);

        // Iterate over the array and reverse every other word
        for (let i = 1; i < words.length; i += 2) {
          // I can use .split().reverse().join() to do exactly what it says. 
          //split() will split this string into an array of words.
          //reverse() every other word in the array because of the loop condition.
          //join() will join the array back into a single string with one space between each word.
          words[i] = words[i].split('').reverse().join('');
          // the join() method chained the words back together outside an array but they appear to be individual strings still.
          console.log(words[i]);
        }
        // using a second join() method made one solid string of my sentence again with every other word reversed and 
        //the punctation marks included in the reversal because of the whitespace removal in trim()
        return words.join(' ');
      
      }
      
      // Test code
      const sentence = "How can I reverse every other word in a string?";
      console.log(ReverseEveryOtherWord(sentence)); // Output: "How nac I esrever every rehto word in a ?gnirts"
      
