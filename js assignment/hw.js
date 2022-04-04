/*  
1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223 
*/

function reverseNumber(num) {
  //turn into string then split into an array, reverse it and join it back
  return num.toString().split("").reverse().join("");
}

/*
2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run.
*/

function palindrome(str) {
  reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

/*
3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g
*/

function generateCombination(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      res.push(str.slice(i, j));
    }
  }

  return res;
}

/*
4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/

function alphOrder(str) {
  return str.split("").sort().join("");
}

/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox '
*/

function capitalLetter(str) {
  let arr = str.split(" ");
  return arr.map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
}

/*
6. Write a JavaScript function that accepts a string as a parameter and find the longest word
within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'
*/

function longestWord(str) {
  let arr = str.split(" ");
  let longest = "";

  for (let i = 0; i < arr.length; i++) {
    if (longest.length < arr[i].length) {
      longest = arr[i];
    }
  }
  return longest;
}

/*
7. Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5
*/
//vowelsCount("The quick brown fox")
function vowelsCount(str) {
  let count = 0;
  //remove all spaces and convert to lowercase
  str = str.replace(/\s/g, "").toLowerCase();
  let arr = str.split("");

  arr.forEach((letter) => {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      count++;
    }
  });
  return count;
}

/*
8. Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num > 1 && num % i != 0) {
      return num + " is a prime number";
    } else {
      return num + " is not a prime number";
    }
  }
}

/*
9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string,
and undefined.
*/

function valueType(input) {
  return typeof input;
}

/* 
10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
*/

function matrix(n) {
  let matrix = [];
  let row = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) {
        row.push(1);
      } else {
        row.push(0);
      }

      if (j === n - 1) {
        matrix.push(row);
        row = [];
      }
    }
  }
  return matrix;
}

/*
11. Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4
*/

function findSecondNum(arr) {
  //sort then return the second lowest and second greatest number
  arr.sort(function (a, b) {
    return a - b;
  });
  return [arr[1], arr[arr.length - 2]];
}

/* 
12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
+ 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
perfect numbers 496 and 8128.
*/

function perfectNumber(num) {
  let divisors = 0;
  if (num > 0) {
    for (let i = 1; i < num / 2 + 1; i++) {
      if (num % i === 0) {
        divisors += i;
      }
    }

    if (divisors === num) {
      console.log(num, "is a perfect number.");
    } else {
      console.log(num, "is not perfect.");
    }
  } else {
    console.log("Invalid number " + num);
  }
}

/* 
13. Write a JavaScript function to compute the factors of a positive integer. 
*/

function factor(num) {
  let factors = [];
  if (num < 0 || !Number.isInteger(num)) {
    return num + " is not a valid integer";
  } else if (num === 0) {
    return "Number cannot be 0";
  }

  for (let i = 0; i < num + 1; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

/* 
14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1
*/

function amountToCoins(number, arr) {
  let result = [];

  arr.forEach((element) => {
    while (number >= element) {
      number = number - element; // 46 - 25 = 21 - 10 = 11 - 10 = 1 - 1 = 0
      result.push(element);
    }
  });

  return result;
}

/* 
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
bases. Accept b and n from the user and display the result.
*/

function exponent(b, n) {
  return Math.pow(b, n);
}

/* 
16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"
*/

function unique(str) {
  let splitStr = str.split("");
  let result = splitStr.filter((element, index, array) => {
    return array.indexOf(element) === index;
  });
  return result.join("");
}

/* 
17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
*/

function occurrence(str) {
  let splitStr = str.split("");
  let obj = {};
  splitStr.forEach((element) => {
    if (obj[element]) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  });
  return obj;
}

/*
18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
the desired value.
*/

function binarySearch(num, array, start, end) {
  let sorted = array.sort((a, b) => a - b);

  let middleIndex = Math.floor((start + end) / 2);

  if (start > end) {
    console.log("Number", num, "is not found in ", array);
    return false;
  }
  if (num === sorted[middleIndex]) {
    console.log("Number", num, "is at index ", array.indexOf(num));
    return true;
  }

  if (num < sorted[middleIndex]) {
    binarySearch(num, sorted, start, middleIndex - 1);
  } else {
    binarySearch(num, sorted, middleIndex + 1, end);
  }
}

/* 
19. Write a JavaScript function that returns array elements larger than a number. 
*/

function isLarger(num, array) {
  let res = [];
  array.forEach((element) => {
    if (element > num) {
      res.push(element);
    }
  });
  return res;
}

/* 
20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample   character   list:
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/

randomID = (string, int) => {
  let result = "";
  if (Number.isInteger(int) && int > 0) {
    for (let i = 0; i < int; i++) {
      result += string.charAt(Math.floor(Math.random() * string.length));
    }
    return result;
  } else {
    console.log("Invalid Integer");
  }
};

/*
21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]
*/

possibleSubsets = (num, array) => {
  let result = [];
  let subsets = array.reduce(
    (someSubsets, value) =>
      someSubsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );

  subsets.forEach((element) => {
    if (element.length === num) {
      result.push(element);
    }
  });

  return result;
};

/*
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' 
Expected output: 3 
*/

occurrenceLetter = (string, letter) => {
  let counter = {};
  let ary = string.split("");
  ary.forEach((element) => {
    if (counter[element]) {
      counter[element]++;
    } else {
      counter[element] = 1;
    }
  });

  return counter[letter];
};

/*
23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e'
*/
notRepeated = (string) => {
  let result = new Map();
  let res = "";
  let split = string.split("");
  split.forEach((element) => {
    if (result.has(element)) {
      result.set(element, result.get(element) + 1);
    } else {
      result.set(element, 1);
    }
  });

  Array.from(result.entries()).forEach(([key, value]) => {
    if (value == 1) {
      res = key;
    }
  });
  return res;
};

/*
24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
 */

bubbleSort = (arr) => {
  let temp = 0;
  for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
};

/*
25. Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/

Longest_Country_Name = (arr) => {
  let longest = "";
  arr.forEach((element) => {
    if (element.length > longest.length) {
      longest = element;
    }
  });

  return longest;
};

/*
26. Write a JavaScript function to find longest substring in a given a string without repeating
characters. 
*/

function longestSubstring(str) {
  string = "";
  substring = "";
  splitString = str.split("");

  for (j = 0; j < splitString.length; j++) {
    for (i = j; i < splitString.length; i++) {
      if (string.includes(splitString[i])) break;
      else string += splitString[i];
    }
    if (substring.length < string.length) {
      substring = string;
    }
    string = "";
  }
  return substring;
}

/* 
27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
given string that is also a palindrome. For example, the longest palindromic substring of
"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
example, in the string "abracadabra", there is no palindromic substring with length greater than
three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all
substrings that are themselves palindromes and cannot be extended to larger palindromic
substrings) rather than returning only one substring or returning the maximum length of a
palindromic substring.
*/

function longest_palindrome(str) {
  let max_length = 0,
    res = "";

  for (let i = 0; i < str.length; i++) {
    let subs = str.substr(i, str.length);

    for (let j = subs.length; j >= 0; j--) {
      let sub_subs_str = subs.substr(0, j);
      if (sub_subs_str.length <= 1) continue;

      if (palindrome(sub_subs_str)) {
        if (sub_subs_str.length > max_length) {
          max_length = sub_subs_str.length;
          res = sub_subs_str;
        }
      }
    }
  }

  return res;
}

/* 
28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
*/

functionJS = (a) => {
  a;
};

tempFunction = () => {
  return console.log(
    "\n\nthis is from test function, which was passed in as an arg."
  );
};

/*
29. Write a JavaScript function to get the function name. 
*/

getFunctionName = (a) => {
  return a.name;
};
