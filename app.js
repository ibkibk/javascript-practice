// // const ageInDays = () => {
// //   let birthYear = prompt("when were you born...");
// //   let convertTheAge = (2020 - birthYear) * 365;
// //   let h1 = document.createElement("h1");
// //   let answer = document.createTextNode(convertTheAge);
// //   h1.setAttribute("id", "ageInDays");
// //   h1.appendChild(answer);
// //   document.getElementById("A").appendChild(h1);
// // };
// // ageInDays();

// import { of } from "rxjs";
// import { right } from "inquirer/lib/utils/readline";

// // const reset = () => {
// //   document.getElementById("ageInDays").remove();
// // };

// // Find the difference between the square of the sum
// // and the sum of the squares of the first N natural numbers.
// // const sos = (n, m) => {
// //   let first = ((n * (n + 1)) / 2) * ((n * (n + 1)) / 2);
// //   let second = (m * m * (m + 1)) / 2;
// //   return first - second;
// // };

// // sos();
// // console.log(sos(10, 10));
// // const steps = (number) => {
// //     if (number <= 0) {
// //       throw Error("Only positive numbers are allowed");
// //     }
// // const numberAndSteps = (number) => {
// //   let step = 0;
// //   if (number % 2 == 0) {
// //     return (number /= 2);
// //   } else if (number % 2 !== 0) {
// //     return 3 * number + 1;
// //   }
// //   step += 1;
// // };

// // numberAndSteps();
// // console.log(numberAndSteps(18));

// // const words = "fatih fatih ibrahim murat kadir";

// // const newWords = words.split(" ");
// // newWords.filter((name) => name);
// // console.log(newWords);

// // const first = "buy";
// // const stringChecker = (first) => {
// //   if ((first.length > 0) & (first.length < 2)) {
// //     return true;
// //   }
// // };

// // console.log(stringChecker(first));
// // 16.How do you check if a string contains only digits?

// // const first = "buy";
// // const checker = () => {
// //   if ((first.length > 0) & (first.length < 2)) {
// //     return true;
// //   } else return false;
// // };
// // checker();

// // console.log(checker());

// // 9.How do you check if two strings are anagrams of each other?
// // const CheckIsAnagram = (word1, word2) => {
// //   let newWord1 = word1.split("").sort().join("").toLowerCase();
// //   let newWord2 = word2.split("").sort().join("").toLowerCase();
// //   return newWord1 === newWord2
// //     ? `${newWord1} and ${newWord2} are anagrams!`
// //     : `${newWord1} and ${newWord2} are not anagrams.`;
// // };
// // console.log(CheckIsAnagram("bobo", "obob"));
// // console.log(CheckIsAnagram("bobo", "boo4b"));
// // console.log(CheckIsAnagram("dog", "god"));

// 3.How do you find duplicate numbers in an array if it contains multiple duplicates?
// const numbers = ["5", "5", "4", "3", "2", "6", "7", "7", "2"];
// const newNumbers = numbers.filter(
//   (item, index) => numbers.indexOf(item) !== index
// );

// // console.log(newNumbers);

// // 4.How do you remove duplicates from an array in place?
// // const numbers = ["a", "c", "d", "s", "s", "w", "w", "a"];
// // const newNumbers = numbers.filter(
// //   (item, index) => numbers.indexOf(item) == index
// // );

// // console.log(newNumbers);

// // 15.How do you find all permutations of a string?
// // const factorial = (n) => {
// //   return n != 1 ? n * factorial(n - 1) : 1;
// // };
// // console.log(factorial(5));

// 7.How do you reverse the words in a sentence?
// const words = "ibragim kurhan ibrahim kurhan";
// const tek = words.split(" ").reverse();
// console.log(tek);

// // 1.How do you find the missing numbers in a given integer array?
// // const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];
// // let number = [];

// // for (let i = 1; i < numbers.length; i++) {
// //   if (numbers[i] - numbers[i - 1] != 1) {
// //     let x = numbers[i] - numbers[i - 1];
// //     let j = 1;
// //     while (j < x) {
// //       number.push(numbers[i - 1] + j);
// //       j++;
// //     }
// //   }
// // }
// // console.log(number);

// 2.How do you find the duplicate number on a given integer array?

// const numbers = ["5", "5", "4", "3", "2", "6", "7", "7", "2"];
// const newNumbers = numbers.filter(
//   (item, index) => numbers.indexOf(item) !== index
// );
// console.log(newNumbers);

// 5.How do you find the largest and smallest number in an unsorted integer array?
// numbers = [2, 4, 9, 2, 0, 16, 24];

// const smallest = Math.min(...numbers);
// const largest = Math.max(...numbers);

// console.log(smallest);
// console.log(largest);

// // 6.How do you find all pairs of an integer array whose sum is equal to a given number?

// // const intArray = [2, 11, 8, 3, 9, 4, 5, 10, 29, 30, 52];
// // const givenNumber = 13;
// // let result = [];

// // for (let i = 0; i < intArray.length; i++) {
// //   for (let j = 0; j < intArray.length; j++) {
// //     if (j != i && intArray[i] + intArray[j] == givenNumber) {
// //       result.push(intArray[i], intArray[j]);
// //     }
// //   }
// // }
// // const lastResult = result.filter(
// //   (item, index) => result.indexOf(item) == index
// // );
// // console.log(lastResult);

// // 8.How do you print duplicate characters from a string?

// // const words = "ibrahim";
// // const newWords = words
// //   .split("")
// //   .filter((item, index) => words.indexOf(item) !== index)
// //   .toString();
// // console.log(newWords);

// // const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

// // let unique = [...new Set(names)];
// // console.log(unique); // 'John', 'Paul', 'George', 'Ringo'

// // 10.How do you print the first non-repeated character from a string?

// // const words = "ibrahim";
// // const last = words.split("");
// // const newWords = words
// //   .split("")
// //   .filter((item, index) => words.indexOf(item) !== index);
// // const final = [];
// // for (let i = 0; i < last.length; i++) {
// //   let match = false;
// //   for (let j = 0; j < newWords.length; j++) {
// //     if (last[i] == newWords[j]) {
// //       match = true;
// //       break;
// //     }
// //   }
// //   if (!match) {
// //     final.push(last[i]);
// //   }
// // }

// // console.log(final[0]);

// // 11.How do you check if a given string is a palindrome?

// // const palindrome = (word) => {
// //   return word === word.split("").reverse().join("");
// // };
// // console.log(palindrome("eye"));

// // 12.How can a given string be reversed using recursion?

// // const reverseString = (str) => {
// //   if (str === "") return "";
// //   else return reverseString(str.substr(1)) + str.charAt(0);
// // };
// // console.log(reverseString("hello"));

// // 13.How do you check if two strings are a rotation of each other?

// // const checkRoation = (str1, str2) => {
// //   if (str1.length !== str2.length) {
// //     return false;
// //   }
// //   let doubleTheString = str1.concat(str1);
// //   return doubleTheString.includes(str2) !== -1;
// // };

// // console.log(checkRoation("ibrahim", "birahim"));

// // 14.How do you swap two numbers without using a third variable?

// // let a = 1;
// // let b = 2;

// // a = a + b;
// // // 1. a = 1+2 new value of a changed to 3
// // b = a - b;
// // // 2. b = 3-2 new value of b changed to 1
// // a = a - b;
// // // 3. a= 3-1 new value of a changed to 2

// // let a = 2;
// // let b = 1;
// // ===================================================================================
// // Isogram
// // Determine if a word or phrase is an isogram.

// // An isogram (also known as a "nonpattern word") is a word
// // or phrase without a repeating letter, however spaces
// // and hyphens are allowed to appear multiple times.

// // Examples of isograms:

// // lumberjacks
// // background
// // downstream
// // six-year-old
// // The word isograms, however, is not an isogram,
// // because the s repeats.

// // const isogram = () => {
// //   const word = "ibrahim";
// //   const newWord = word.split("");
// //   const a = [];
// //   for (let i = 0; i < newWord.length; i++) {
// //     if (newWord[i] == neWword[i + 1]) {
// //       a += newWord[i];
// //     }
// //   }
// // };
// // isogram();
// // console.log(isogram(a));
// // HIGH SCORES
// // Manage a game player's High Score list.

// // Your task is to build a high-score component of the classic Frogger game,
// // one of the highest selling and addictive games of all time, and a classic
// // of the arcade era. Your task is to write methods that return the
// // highest score from the list,
// // the last added score and the three highest scores.

// // const scores = [3, 5, 1, 8, 78, 54, 23, 56, 7, 9, 23];

// // const lastOne = scores.pop();
// // console.log(lastOne);
// // const topOne = scores.sort((a, b) => b - a).splice(0, 1);
// // console.log(topOne);
// // const topThree = scores.sort((a, b) => b - a).splice(0, 3);
// // console.log(topThree);

// // ROMAN NUMBERS
// // Write a function to convert from normal numbers to Roman Numerals.

// // The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

// // The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

// //  1  => I
// // 10  => X
// //  7  => VII
// // There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

// // Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

// // To see this in practice, consider the example of 1990.

// // In Roman numerals 1990 is MCMXC:

// // 1000=M 900=CM 90=XC

// // 2008 is written as MMVIII:

// // 2000=MM 8=VIII

// // const romanNumberConverter = (num) => {
// //   let romanNumbers = {
// //     M: 1000,
// //     CM: 900,
// //     D: 500,
// //     CD: 400,
// //     C: 100,
// //     XC: 90,
// //     L: 50,
// //     XL: 40,
// //     X: 10,
// //     IX: 9,
// //     V: 5,
// //     IV: 4,
// //     I: 1,
// //   };

// //   let roman = "";

// //   Object.keys(romanNumbers).forEach((key) => {
// //     while (num >= romanNumbers[key]) {
// //       roman += key;
// //       num -= romanNumbers[key];
// //     }
// //   });
// //   return roman;
// // };
// // romanNumberConverter();

// // console.log(romanNumberConverter(2987));

// // SERIES
// // Given a string of digits, output all the contiguous substrings of length n in that string in the order that they appear.

// // For example, the string "49142" has the following 3-digit series:

// // "491"
// // "914"
// // "142"
// // And the following 4-digit series:

// // "4914";
// // "9142";

// // const digitFinder = (arr, n) => {
// //   let digits = [];
// //   for (let i = 0; i + n <= arr.length; i++)
// //     if (n > arr.length) {
// //       return false;
// //     } else if (n <= arr.length) {
// //       digits.push(arr.slice(i, i + n));
// //     }
// //   return digits;
// // };
// // console.log(digitFinder());

// // Grade School

// // Given students' names along with the grade that they are in,
// // create a roster for the school.

// // In the end, you should be able to:

// // Add a student's name to the roster for a grade
// // "Add Jim to grade 2."
// // "OK."
// // Get a list of all students enrolled in a grade
// // "Which students are in grade 2?"
// // "We've only got Jim just now."
// // Get a sorted list of all students in all grades.
// // Grades should sort as 1, 2, 3, etc., and students within
// // a grade should be sorted alphabetically by name.
// // "Who all is enrolled in school right now?"
// // "Grade 1: Anna, Barb, and Charlie. Grade 2: Alex, Peter, and Zoe. Grade 3…"

// // const gradeFinder = () => {
// //   const grades = {
// //     grade1: "anna,bob,barb",
// //     grade2: "alex,peter,zoe",
// //   };

// //   let newArr = "";

// //   Object.entries();
// // };

// // REVERSE AN INTEGER
// // const intergerr = (int) => {
// //   const rev = int.toString().split("").reverse().join("");
// //   return parseInt(rev);
// // };
// // console.log(intergerr(1256));

// // capitalize specific character
// // first method
// // const cap = (str) => {
// //   const newS = str.toLowerCase().split(" ");

// //   for (let i = 0; i < newS.length; i++) {
// //     newS[i] = newS[i].substring(0, 1).toUpperCase() + newS[i].substring(1);
// //   }
// //   return newS.join(" ");
// // };
// // console.log(cap("ibrahim kurhan"));
// // secondMethod
// // const capitalize = (str) => {
// //   return str
// //     .toLowerCase()
// //     .split(" ")
// //     .map((word) => word[0].toUpperCase() + word.substring(1))
// //     .join(" ");
// // };
// // console.log(capitalize("ibrahim kurhan"));

// // MAX CHARACTER
// // const maxChar = (str) => {
// //   const map = {};

// //   str.split("").forEach((word) => {
// //     if (map[word]) {
// //       map[word]++;
// //     } else {
// //       map[word] = 1;
// //     }
// //   });
// // };
// // console.log(maxChar("ibrahim"));
// // const longestWord = (ben) => {
// //   const wordArr = ben.toLowerCase().match(/[a-z0-9]+/g);

// //   const sortedWords = wordArr.sort((a, b) => b.length - a.length);
// //   const longestArr = sortedWords.filter(
// //     (word) => word.length === sortedWords[0].length
// //   );
// //   if (longestArr.length === 1) {
// //     return longestArr[0];
// //   } else {
// //     return longestArr;
// //   }
// // };

// // console.log(longestWord("ibrahiim kurhannnnn jdhdhddbdb"));

// // const number = "27654";
// // const digit = 3;
// // const newdigts = [];
// // console.log(digit.length);
// // for (let i = 0; i <= number.length; i++) {
// //   if (digit <= number.length) {
// //     const newNumber = number.split("").splice(0, 3).toString();
// //     newdigts.push(newNumber);
// //   }
// // }
// // console.log(newdigts.toString().split(" "));

// // import brandStore from './brand-store';
// // import Color from 'color';

// // const defaultColours = [
// //   { name: "primary", value: "#333" },
// //   { name: "secondary", value: "#222" },
// //   { name: "tertiary", value: "#555" },
// // ];

// // const defaultBodyFont = "Lato";
// // const allowedFonts = ["lato", "arial", "helvetica", "courier"];

// // const convertToRgb = (c) => Color(c).rgb().string();

// // import { brandStore } from "./brandStore.mjs";

// // import Color from "color";

// // const defaultColors = [
// //   { id: 1, name: "primary", value: "#333" },
// //   { id: 2, name: "secondary", value: "#222" },
// //   { id: 3, name: "tertiary", value: "#555" },
// // ];

// // const defaultBodyFont = "Lato";
// // const allowedFonts = ["lato", "arial", "helvetica", "courier"];

// // const convertToRgb = (c) => Color(c).rgb().string();

// // const validateBodyFont = (bodyFont) => {
// //   let found = false;
// //   allowedFonts.forEach((a) => {
// //     if (a === bodyFont.toLowerCase()) found = true;
// //   });
// //   if (found) {
// //     return bodyFont;
// //   }
// //   return defaultBodyFont;
// // };

// // const buildTheme = (colors, bodyFont) => {
// //   if (!colors) {
// //     return (colors = defaultColors);
// //   }
// //   if (!bodyFont) {
// //     colors = defaultBodyFont;
// //   }
// //   const newColors = {};
// //   colors.forEach((c) => {
// //     newColors[c.name] = convertToRgb(c.value);
// //   });

// //   return {
// //     colors: newColors,
// //     bodyFont: validateBodyFont(bodyFont),
// //   };
// // };

// // export const getBranding = (user) => {
// //   if (user.brandId && brandStore.length) {
// //     brandStore.forEach((brand) => {
// //       const matchedBrands = brand.id === user.brandId;
// //       if (matchedBrands) {
// //         defaultColors = brand.defaultColors;
// //         defaultBodyFont = brand.bodyFont;
// //       }
// //       return matchedBrands;
// //     });
// //   }
// //   return buildTheme(defaultColors, defaultBodyFont);
// // };
// // number 7
// // option 1
// // const reversedWords = (str) => {
// //   let final = "";
// //   for (let i = 0; i < str.length - 1; i--) {
// //     final += str[i];
// //   }
// //   return final;
// // };
// // console.log(reversedWords("ibrahim kurhan"));
// // option 2
// // const words = "ibrahim kurhan fatih ata";
// // const newWords = words.split("").reverse().join("");
// // console.log(newWords);
// // number 8
// //  Option 1
// // const words = "ibrahim";
// // const newWords = words
// //   .split("")
// //   .filter((item, index) => words.indexOf(item) !== index)
// //   .toString();
// // console.log(newWords);
// // option2
// // const str = "ibrahim";
// // const duplicateChar = (str) => {
// //   let words = str.split("");
// //   let letters = [];
// //   let count = 1;
// //   for (let i = 0; i < words.length; i++) {
// //     if (words[i] === words[i + 1]) {
// //       count++;
// //     } else {
// //       let value = `${count}${words[i]}`;
// //       letters = [...letters, value];
// //       count = 1;
// //     }
// //   }
// //   return letters.join("");
// // };
// // console.log(duplicateChar("kurhan ibrammmhimmm"));

// // ========================================================================
// // 7-How do you reverse the words in a sentence?

// // const wordReverser = () => {
// //   const sentence = "trying to reverse the words";
// //   const reversed = sentence.split("").reverse().join("");
// //   return reversed;
// // };
// // console.log(wordReverser());

// // 8-How do you print duplicate characters from a string?

// // const dublicatePrinter = () => {
// //   const sentence = "print the diblicate words from the sentence";
// //   const senArr = sentence.split(" ");
// //   const filteredSenArr = senArr.filter(
// //     (item, index) => senArr.indexOf(item) !== index
// //   );
// //   return filteredSenArr;
// // };
// // console.log(dublicatePrinter());
// // ===========================================================================

// // 9-How do you check if two strings are anagrams of each other?

// // const anagram = (word1, word2) => {
// //   const newWord1 = word1.split("").sort().join("").toLowerCase();
// //   const newWord2 = word2.split("").sort().join("").toLowerCase();
// //   if (newWord1 === newWord2) {
// //     return `${newWord1} and ${newWord2} are anagram`;
// //   } else {
// //     `${newWord1}and ${newWord2} arent anagram`;
// //   }
// // };
// // console.log(anagram("raki", "kari"));

// // ======================================================================================

// // 10- How do you print the first non-repeated character from a string?

// // const word = "ibrahim";
// // const newWord = word.split("");
// // const noneRepeated = newWord.filter(
// //   (item, index) => newWord.indexOf(item) !== index
// // );
// // console.log(noneRepeated);

// // let unique = [...new Set(names)];

// // 1. How do you find the missing numbers in a given integer array?

// // const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
// // const misingNumberArray = [];
// // for (let i = 0; i < number.length; i++) {
// //   if (number[i] - number[i - 1] != 1) {
// //     let x = number[i] - number[i - 1];
// //     let y = 1;
// //     while (y < x) {
// //       misingNumberArray.push(number[i - 1] + y);
// //       y++;
// //     }
// //   }
// // }

// // console.log(misingNumberArray);

// // 2.How do you find the duplicate number on a given integer array?
// const numbers = ["1", "2", "3", "6", "7", "5", "4", "2"];
// const newNumbers = [];
// const findingTheN = (numbers) => {
//   const dubNumber = numbers.filter(
//     (item, index) => numbers.indexOf(item) !== index
//   );
//   newNumbers.push(dubNumber);
// };
// console.log(newNumbers);
// // 2.How do you find the duplicate number on a given integer array?

// const numbers = ["5", "5", "4", "3", "2", "6", "7", "7", "2"];
// const newNumbers = numbers.filter(
//   (item, index) => numbers.indexOf(item) !== index
// );
// console.log(newNumbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 13];
// const missingNumber = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] - numbers[i - 1] !== 1) {
//     let x = numbers[i] - numbers[i - 1];
//     let y = 1;
//     while (y < x) {
//       missingNumber.push(numbers[i - 1] + y);
//       y++;
//     }
//   }
// }
// console.log(missingNumber);

// const numbers = [1, 2, 3, 4, 4, 5, 6, 6];
// // const numbers = ["5", "5", "4", "3", "2", "6", "7", "7", "2"];
// const dublicate = numbers.filter(
//   (item, index) => numbers.indexOf(item) !== index
// );
// console.log(dublicate);

// // 3. How do you find duplicate numbers in an array if it contains multiple duplicates?
// // 4. How do you remove duplicates from an array in place?

// const numbers = [1, 2, 3, 4, 4, 5, 6, 6];
// const newNumbers = numbers.filter(
//   (item, index) => numbers.indexOf(item) == index
// );
// console.log(newNumbers);

// // 5. How do you find the largest and smallest number in an unsorted integer array?

// const scores = [3, 5, 1, 8, 78, 54, 23, 56, 7, 9, 23];
// const newArr = [];
// const newScore = scores.sort((a, b) => a - b);
// const first = newScore.slice(0, 1).join(" ");
// newArr.push(first);
// const last = newScore.slice(-1).join(" ");
// newArr.push(last);
// console.log(newArr);

// const scores = [3, 5, 1, 8, 78, 54, 23, 56, 7, 9, 23];
// const newScore = [];

// const a = Math.min(...scores);
// newScore.push(a);
// const b = Math.max(...scores);
// newScore.push(b);
// console.log(newScore);

// // 6. How do you find all pairs of an integer array whose sum is equal to a given number?

// const numbers = [1, 8, 3, 4, 7, 5, 6];
// const givenNumber = 11;
// const result = [];

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < numbers.length; j++) {
//     if (j != i && numbers[i] + numbers[j] == givenNumber) {
//       result.push(numbers[i], numbers[j]);
//     }
//   }
// }
// const newResult = result.filter((item, index) => result.indexOf(item) == index);
// console.log(newResult);

// // 7. How do you reverse the words in a sentence?

// const reverser = (str) => {
//   const newSentence = str.split("").reverse().join("");
//   return newSentence;
// };
// console.log(reverser("Cannot read property"));

// // 8. How do you print duplicate characters from a string?

// const printer = (str) => {
//   const newStr = str.split(" ");
//   const first = newStr.filter((item, index) => newStr.indexOf(item) !== index);
//   return first;
// };
// console.log(printer("ibrahim kurhan ibrahim kurhan"));

// // 9. How do you check if two strings are anagrams of each other?

// const anagram = (word1, word2) => {
//   const newWord1 = word1.split("").sort().join("").toLowerCase();
//   const newWord2 = word2.split("").sort().join("").toLowerCase();
//   if (newWord1 === newWord2) {
//     return `${newWord1} and ${newWord2} are anagram`;
//   } else {
//     return `${newWord1} and ${newWord2} arent anagram`;
//   }
// };
// console.log(anagram("raki", "kari"));

// const anag = (word1, word2) => {
//   const newWord1 = word1.split("").sort().join("").toLowerCase();
//   const newWord2 = word2.split("").sort().join("").toLowerCase();
//   if (newWord1 === newWord2) {
//     return `${word1} and ${word2} are anagram of each other`;
//   } else {
//     return `${word1} and ${word2} are not  anagram of each other`;
//   }
// };
// console.log(anag("boob", "obab"));

// // 10. How do you print the first non-repeated character from a string?

// const word = "ibrahbim";
// for (let i = 0; i < word.length; i++) {
//   if (word.indexOf(word[i]) == word.lastIndexOf(word[i])) {
//     console.log(word[i]);
//     break;
//   }
// }

// // let unique = [...new Set(names)];
// // 10. How do you print the first non-repeated character from a string?

// // 9. How do you check if two strings are anagrams of each other?

// const anagram = (word1, word2) => {
//   const new1 = word1.split("").sort().join("").toLowerCase();
//   const new2 = word2.split("").sort().join("").toLowerCase();
//   if (new1 == new2) {
//     return `${new1} and ${new2} are anagram `;
//   } else {
//     return `${new1} and ${new2} arent anagram `;
//   }
// };
// console.log(anagram("boob", "obob"));
// // 9. How do you check if two strings are anagrams of each other?
// // 10. How do you print the first non-repeated character from a string?
// const word = "ibrahim";
// for (let i = 0; i < word.length; i++) {
//   if (word.indexOf(word[i]) == word.lastIndexOf(word[i])) {
//     console.log(word[i]);
//     break;
//   }
// }

// const noneRepeated = (word) => {
//   for (let i = 0; i < word.length; i++) {
//     if (word.indexOf(word[i]) == word.lastIndexOf(word[i])) {
//       return word[i];
//     }
//   }
// };
// console.log(noneRepeated("kurhuk"));
// // 1. How do you find the missing numbers in a given integer array?
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13];
// const result = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] - numbers[i - 1] !== 1) {
//     let x = numbers[i] - numbers[i - 1];
//     let y = 1;
//     while (y < x) {
//       result.push(numbers[i - 1] + y);
//       y++;
//     }
//   }
// }
// console.log(missing(result));
// // 2. How do you find the duplicate number on a given integer array?
// const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 11, 13];
// const newnum = numbers.filter((item, index) => numbers.indexOf(item) !== index);
// console.log(newnum);

// // 3. How do you find duplicate numbers in an array if it contains multiple duplicates?
// const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 11, 13];
// const newnum = numbers.filter((item, index) => numbers.indexOf(item) !== index);
// console.log(newnum);
// // 4. How do you remove duplicates from an array in place?
// const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 11, 13];
// const newnum = numbers.filter((item, index) => numbers.indexOf(item) == index);
// console.log(newnum);
// // 5. How do you find the largest and smallest number in an unsorted integer array?
// const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 11, 13];
// const result = [];
// const smallest = Math.min(...numbers);
// result.push(smallest);
// const maximum = Math.max(...numbers);
// result.push(maximum);
// console.log(result);

// // 6. How do you find all pairs of an integer array whose sum is equal to a given number?
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13];
// const given = 10;
// const result = [];
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < numbers.length; j++) {
//     if (j != i && numbers[i] + numbers[j] == given) {
//       result.push(numbers[i], numbers[j]);
//     }
//   }
// }
// const lastResult = result.filter(
//   (item, index) => result.indexOf(item) == index
// );
// console.log(lastResult);

// // 7. How do you reverse the words in a sentence?
// const reverser = (str) => {
//   const newStr = str.split("").reverse().join("").toLowerCase();
//   return newStr;
// };
// console.log(reverser("ibrahijm kurhan"));
// // 8. How do you print duplicate characters from a string?
// const strPrinter = (str) => {
//   const newStr = str
//     .split("")
//     .filter((item, index) => str.indexOf(item) !== index)
//     .join("");
//   return newStr;
// };
// console.log(strPrinter("ibrahima"));
// // 9. How do you check if two strings are anagrams of each other?
// const anag = (str1, str2) => {
//   const newStr1 = str1.split("").sort().join("").toLowerCase();
//   const newStr2 = str2.split("").sort().join("").toLowerCase();
//   if (newStr1 == newStr2) {
//     return `${newStr1} and ${newStr2} are anagram`;
//   } else {
//     return `${newStr1} and ${newStr2} are not anagram`;
//   }
// };
// console.log(anag("boob", "obob"));
// // 10. How do you print the first non-repeated character from a string?
// const words = (word) => {
//   for (let i = 0; i < word.length; i++) {
//     if (word.indexOf(word[i]) == word.lastIndexOf(word[i])) {
//       return word[i];
//     }
//   }
// };
// console.log(words("ibrahim"));
// // 11. How do you check if a given string is a palindrome?
const words = (word) => {
  const rev = word.split("").reverse().join("");
  if (word == rev) {
    return `${word} and ${rev} are pall`;
  } else {
    return `${word} and ${rev} are not pall`;
  }
};
console.log(words("madam"));
// // 12. How can a given string be reversed using recursion?

// // 13. How do you check if two strings are a rotation of each other?
// const rotat = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let double = str1.concat(str1);
//   if (double.inculdes(str2) != -1) {
//     return roteted;
//   }
// };
// console.log(rotat("hello", "lohel"));

// const rotEq = (str1, str2) => {
//   let str = str1 + str1;
//   return str.includes(str2);
// };

// console.log(rotEq("abcd", "bcda"));
// console.log(rotEq("abcde", "cdeab"));
// console.log(rotEq("abcd", "acdb"));
// // 14. How do you swap two numbers without using a third variable?

// let a = 1;
// let b = 2;

// a = a + b;
// // 1. a = 1+2 new value of a changed to 3
// b = a - b;
// // 2. b = 3-2 new value of b changed to 1
// a = a - b;
// // 3. a= 3-1 new value of a changed to 2

// let a = 2;
// let b = 1;

// // 15. How do you find all permutations of a string?
// const myarray = (n) => {
//   return n != 1 ? n * myarray(n - 1) : 1;
// };
// console.log(myarray(5));
// // const factorial = (n) => {
// //   return n != 1 ? n * factorial(n - 1) : 1;
// // };
// // console.log(factorial(5));
// // 5. How do you find the largest and smallest number in an unsorted integer array?

// // findTheNumber();
// // console.log(findTheNumber([1, 2, 3, 4, 5]));
// const scores = [3, 5, 1, 8, 78, 54, 23, 56, 7, 9, 23];
// const newScore = [];

// const a = Math.min(...scores);
// newScore.push(a);
// const b = Math.max(...scores);
// newScore.push(b);
// console.log(newScore);

// const findTheNumber = () => {
//   const scores = [3, 5, 1, 8, 78, 54, 23, 56, 7, 9, 23];
//   const newScore = [];
//   const a = Math.min(...scores);
//   newScore.push(a);
//   const b = Math.max(...scores);
//   newScore.push(b);
//   console.log(newScore);
// };
// findTheNumber();
// // console.log(newScore);
// // console.log(findTheNumber());

// // 6. How do you find all pairs of an integer array whose sum is equal to a given number?
// const nefunc = () => {
//   const numbers = [2, 3, 4, 5, 6, 7, 8, 7, 6];
//   const given = 10;
//   const result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       if (j != i && numbers[i] + numbers[j] == given) {
//         result.push(numbers[i], numbers[j]);
//       }
//     }
//   }
//   const newone = result.filter((item, index) => result.indexOf(item) == index);
//   console.log(newone);
// };
// nefunc();

// 7. How do you reverse the words in a sentence?
// const reverser = (str) => {
//   const newStr = str.split("").reverse().join("");
//   return newStr;
// };
// console.log(reverser("ibrahim"));
// const reverser = () => {
//   const words = "ibragim kurhan ibrahim kurhan";
//   const tek = words.split("").reverse().join("");
//   return tek;
// };

// console.log(reverser(tek));
// const reverser = (str) => {
//   const newStr = str.split("").reverse().join("").toLowerCase();
//   return newStr;
// };
// console.log(reverser("ibrahijm kurhan"));
// // 7. How do you reverse the words in a sentence?

// // 8. How do you print duplicate characters from a string?

// const dub = (str) => {
//   const printStr = str.split("");
//   const newPrint = printStr.filter(
//     (item, index) => printStr.indexOf(item) !== index
//   );
//   return newPrint;
// };

// console.log(dub("ibrahim"));

// // 9. How do you check if two strings are anagrams of each other?
// // 10. How do you print the first non-repeated character from a string?
// // 11. How do you check if a given string is a palindrome?
// // 13. How do you check if two strings are a rotation of each other?

// const rot = (str1, str2) => {
//   const first = str1.concat(str1);
//   return first.includes(str2);
// };
// console.log(rot("hello", "lohal"));

// const findPermutations = (string) => {
//   // if (!string || typeof string !== "string") {
//   //   return "Please enter a string";
//   // } else if (string.length < 2) {
//   //   return "Please enter a string";
//   // }
//   let permutationsArray = [];
//   for (let i = 0; i < string.length; i++) {
//     let remainingChars =
//       string.slice(0, i) + string.slice(i + 1, string.length);
//     permutationsArray.push(remainingChars);
//     console.log(permutationsArray);
//   }
// };
// // console.log(permutationsArray);

// findPermutations("ibrahim");

// // 16. How do you check if a string contains only digits?

// const strChecker = (str) => {
//   if (str.length > 0 && str.length < 2) {
//     return "it is only one digit";
//   } else {
//     return "it is more than  one digit";
//   }
// };
// console.log(strChecker("ab"));

// 13. How do you check if two strings are a rotation of each other?
// 6. How do you find all pairs of an integer array whose sum is equal to a given number?

// // const ageInDays = () => {
// //   let birthYear = prompt("when were you born...");
// //   let convertTheAge = (2020 - birthYear) * 365;
// //   let h1 = document.createElement("h1");
// //   let answer = document.createTextNode(convertTheAge);
// //   h1.setAttribute("id", "ageInDays");
// //   h1.appendChild(answer);
// //   document.getElementById("A").appendChild(h1);
// // };
// // ageInDays();
// =================================================================================================
// NODE JS
// let time = 0;

// let timer = setInterval(function () {
//   time += 2;
//   console.log(time + "second have passed");
//   if (time > 5) {
//     clearInterval(timer);
//   }
// }, 2000);
// TO FIND WHICH FILE OR dECTIRORY YOU ARE IN
// console.log(__dirname);
// console.log(__filename);

// let stuff = require("./count");

// console.log(stuff.counter(["ibrahim", "kadir", "kerim"]));
// console.log(stuff.adder(5, 6));
// console.log(stuff.adder(stuff.pi, 5));

// let events = require("events");

// let myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", function (mssg) {
//   console.log(mssg);
// });

// myEmitter.emit("someEvent", "the event was emmited");

// let events = require("events");

// let util = require("util");

// let Person = function (name) {
//   this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// leapYear();
// console.log(leapYear(1997));

// const isLeap = (year) => {
//   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// isLeap();
// console.log(isLeap(1996));
// let james = new Person("james");
// let mary = new Person("mary");
// let ryu = new Person("ryu");
// let people = [james, mary, ryu];

// people.forEach(function (person) {
//   person.on("speak", function (mssg) {
//     console.log(person.name + " said: " + mssg);
//   });
// });

// james.emit("speak", "heyy dude");
// ryu.emit("speak", "i want a curry");

// let fs = require("fs");

// fs.readFile("readme.txt", "utf8", function (err, data) {
//   fs.writeFile("writeMe.txt", data);
// });
// // fs.writeFileSync("writeMe.txt", "readme");
// console.log("test");

// let http = require("http");

// let server = http.createServer(function (req, res) {
//   console.log("request was made:" + req.url);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("hey ibrahim");
// });

// server.listen(3000, "127.0.0.1");
// console.log("we are all listennig");

// Introduction
// Given a person's allergy score, determine whether or not they're allergic to a given item,
//  and their full list of allergies.

// An allergy test produces a single numeric score which contains the information about all the allergies
// the person has (that they were tested for).

// The list of items (and their value) that were tested are:

// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

// Now, given just that score of 34, your program should be able to say:

// Whether Tom is allergic to any one of those allergens listed above.
// All the allergens Tom is allergic to.
// Note: a given score may include allergens not listed above (i.e. allergens that score 256, 512, 1024, etc.).
// Your program should ignore those components of the score. For example, if the allergy score is 257, your program
//  should only report the eggs (1) allergy.
// const alerigi = (num) => {
//   const alergiesObject = {
//     eggs: 1,
//     peanuts: 2,
//     shellfish: 4,
//     strawberries: 8,
//     tomatoes: 16,
//     chocolate: 32,
//     pollen: 64,
//     cats: 128,
//   };
//   const newOne = Object.keys(alergiesObject);
//   for (let i = 0; i < newOne.length; i++) {
//     if (num == newOne[i]) {
//       console.log(Object.entries(newOne[i]));
//     }
//   }
// };
// console.log(alerigi(32));
