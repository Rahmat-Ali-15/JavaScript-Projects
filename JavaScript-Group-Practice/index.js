// let year = 1700

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log("Leap year")
// }
// else{
//     console.log("Not Leap Year")
// }

//# Fibonacci series

// let input = 6

// let a = 0
// let b = 1
// let fibo = []

// for (let i = a; i < input; i++){
//     fibo.push(a)
//     let c = a + b
//     a = b
//     b = c
// }
// console.log(fibo)

//# Factorial

// let st = 1
// let fact = 1
// let n = 5

// while(st <= n){
//     fact = fact * st
//     st += 1
// }
// console.log(`Factorial of ${n}! is ${fact}`)

// # Palindrome

// let str = "12321";
// let revStr = ""

// for (let i = str.length - 1; i>=0; i--){
//     revStr += str[i]
// }

// if(typeof Number(str) === Number(revStr)){
//     console.log(`${str} is a Palindrome Number`)
// }
// else{
//     console.log(`${str} is not a Palindrom`)
// }

// # Armstrong Number

// let num = "152"
// let sum = 0

// for (let i = 0; i < num.length; i++){
//     sum += num[i] ** num.length
// }

// if (Number(num) === sum){
//     console.log(`The number ${num} is an Armstrong Number`)
// }
// else{
//     console.log(`The Number ${num} is not an Armstrong Number`)
// }

// # Fibonacci Series

// let a = 0
// let b = 1
// let num = 5
// let fiboArr = []

// for (let i = a; i < num; i++){
//     fiboArr.push(a)
//     let c = a + b;
//     a = b
//     b = c
// }
// console.log(`The Fibonacci Series to the number ${num} is [${fiboArr}]`);

// # Checking whether a number is Even or Odd

// let num = 6;

// if(num % 2 === 0){
//     console.log(`The number ${num} is an Even Number`)
// }
// else{
//     console.log(`The number ${num} is an Odd Number`)
// }

// # Finding Even or Odd number to the given range

// let st = 30
// let end = 69
// let evenArr = []
// let oddArr = []

// for (let i = st; i <= end; i++){
//     if (i % 2 === 0 ){
//         evenArr.push(i)
//     }
//     else{
//         oddArr.push(i)
//     }
// }
// console.log(evenArr, "Even Number")
// console.log(oddArr, "Odd Number")

// # Counting vowels in Words

// let word = 'hello';
// let count = 0

// for (let i = 0; i < word.length; i++){
//     if(word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o"|| word[i] === "u"){
//         count = count + 1
//     }
// }
// console.log(count)

// # Take three numbers and find the largest using only if-else

// let a = 5;
// let b = 5
// let c = 2

// if (a === b && b === c){
//     console.log(`a = ${a}, b = ${b} & c = ${c}, all three numbers are equal`)
// }
// else if(a === b && a > c){
//     console.log(`a = ${a} & b = ${b}, a & b are equal and greatest`)
// }
// else if (b === c && b > a){
//     console.log(`b = ${b} & c = ${c}, b & c are equal and greatest`)
// }
// else if (a > b && a > c){
//     console.log(`a = ${a} is greatest`)
// }
// else if (b > a && b > c){
//     console.log(`b = ${b} is greatest`)
// }
// else{
//     console.log(`c = ${c} is greatest`)
// }

// # Strong Password Checker

// let a = '1254hkajf'
// let hasNumver = /\d/.test(a)

// if (a.length >= 8 && a !== 'password' && hasNumver){
//     console.log("Strong Password")
// }
// else{
//     console.log("Weak Password")
// }

// # Electricity Bill Calculated

// let units = 5;
// let bill = 0;

// if (units <= 100){
//     bill = units * 5
// }
// else if (units <= 200){
//     bill = (100 * 5) + (units - 100) * 8
// }
// else {
//     bill = (100 * 5) + (100 * 8) + (units - 200) * 10
// }

// # Frequency Count in Js

// let arr = [
//   "mango",
//   "banana",
//   "apple",
//   "mango",
//   "banana",
//   "apple",
//   "mango",
//   "banana",
//   "apple",
//   "mango",
//   "banana",
//   "apple",
//   "mango",
//   "banana",
//   "apple",
//   "mango",
//   "banana",
//   "apple",
//   "mango",
//   "banana",
//   "apple",
// ];

// const ans = arr.reduce((acc, currVal) => {
//   acc[currVal] = (acc[currVal] || 0) + 1;
//   return acc
// }, {});
// console.log(ans);

// ! Function

// # Sum of two numbers

// function Sum(a,b) {
//     return a + b
// }

// console.log("🚀 ~ Sum:", Sum(5,3)); // Output -> 8

// # Even or Odd

// function Odd_Even(n){
//     if(n % 2 === 0){
//         return "Even"
//     }
//     return "Odd"
// }

// console.log(Odd_Even(7))

// # Largest of three numbers

// function largest(a,b,c) {
//     if(a>b && a >c) return a
//     if(b>a && b>c) return b
//     return c;
// }

// console.log(largest(5,6,2))

// function largest(a, b, c) {
//     return Math.max(a, b, c);
// }

// console.log(largest(5,6,2))

// # Reverse String

// function reverse(str) {
//     return str.split("").reverse().join(""); // "tamhaR"
// }
// console.log(reverse("Rahmat"))

// function reverse(str) {
//     let rev = "";
//     for(let i = str.length-1; i>= 0; i--){
//         // rev += str[i]
//         rev= rev + str[i]
//     }
//     return rev
// }
// console.log(reverse("Rahmat")) // "tamhaR"

// # Factorial

// function factorial(n) {
//     let fact = 1
//     for (let i  = 1; i <= n; i++){
//         fact = fact * i;
//     }
//     return fact;
// }

// console.log(factorial(5))

// # Count Vowels

// function countVowels(str) {
//     let count = 0;
//     for(let chr of str){
//         if(chr === "a" || chr === "e" || chr === "i" || chr === "o" || chr === "u"){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowels("abcde"))

// function countVowels(str) {
//     let count = 0;
//     let vowel = "aeiou"
//     for(let chr of str){
//         if(vowel.includes(str[i])){
//             count++;
//         }
//     }
//     return count
// }

// console.log(countVowels("abcde"))

// function countVowels(str) {
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
//             count++
//         }
//     }
//     return count
// }

// console.log(countVowels("abcde"))

// function countVowels(str) {
//     let count = 0;
//     let vowel = "aeiou"
//     for(let i = 0; i < str.length; i++){
//         if(vowel.includes(str[i])){
//             count++;
//         }
//     }
//     return count
// }

// console.log(countVowels("abcde"))


// 1️⃣ Find Missing Number (Google/Amazon type)

// # Given an array of size n-1 containing numbers from 1 to n, find the missing number using a for loop.

// let arr = [1, 2, 3, 4];

// let n = arr.length + 1;

// let expectedSum = (n * (n + 1)) / 2;

// let actualSum = 0;

// for (let i = 0; i < arr.length; i++) {
//   actualSum += arr[i];
// }

// let missingNum = expectedSum - actualSum;
// console.log("🚀 ~ missingNum:", missingNum);

// 2️⃣ Check if Array is Strictly Increasing

// # Return true if every next element is greater than the previous one.

// const isStrictlyIncreasing = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= arr[i - 1]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };
// console.log(isStrictlyIncreasing([1, 2, 3, 4]));

// # 3️⃣ Move All Zeros to End (In-place)
// Without creating a new array.

// const moveZero = (arr) => {
//   let position = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       let temp = arr[i];
//       arr[i] = arr[position];
//       arr[position] = temp;

//       position++;
//     }
//   }
//   return arr;
// };

// let ans = moveZero([1, 0, 3, 0, 5, 7, 0, 9, 8]);
// console.log("🚀 ~ ans:", ans);

//# 4️⃣ Reverse Words in a Sentence (Without split/reverse). Use only loop.

// let str = "I am king";
// let result = "";
// let word = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   if (str[i] !== " ") {
//     word = str[i] + word;
//   } else {
//     result += word + " ";
//     console.log("🚀 ~ result:", result);
//     console.log("🚀 ~ word:", word);
//     word = "";
//   }
// }
// result += word;

// console.log("🚀 ~ result:", result);

// # Palindrome

// function palindrom(str) {
//     let reverse = str.split("").reverse().join("");
//     return str === reverse ? "Palindrome" : "Not Palindrome"
// }
// console.log(palindrom("121"))

// function palindrom(str) {
//     let rev = ""
//     for(let i = str.length-1; i>=0; i--){
//         rev = rev + str[i]
//     }
//     return str === rev ? "Palindrome" : "Not Palindrome"
// }

// console.log(palindrom('abcba'))

// # Array sum

// function arrSum(arr) {
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum
// }

// console.log(arrSum([1,2,3,4,5]))

// # Write a function to return the largest number in an array.

// function largest(arr) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(largest([5, 6, 2, 7, 9]));

// # Second largest (Without sort)

// function secondLargest(arr) {
//     let max = -Infinity;
//     let secondMax = -Infinity

//     for(let el of arr){
//         if(el > max){
//             secondMax = max;
//             max = el
//         }
//         else if(el > secondMax && el !== max){
//             secondMax = el
//         }
//     }
//     return secondMax
// }

// console.log(secondLargest([5,7,6,1,3,4]))


// # Write a function to return the smallest number in an array.

// function smallest(arr) {
//     let small = Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < small){
//             small = arr[i];
//             console.log("🚀 ~ small:", small);
//         }
//     }
//     return small;
// }

// console.log(smallest([5,2,7,1,8]))


// function removeDuplicates(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));




// # Fibonacci Using Function
//# Return nth Fibonacci number.

// function fibonacci(n) {
//     if(n <= 1) return n;

//     let a = 0
//     let b = 1
//     let next;
//     for(let i = 2; i <= n; i++){
//         next = a + b;
//         a = b
//         b = next
//     }
//     return b
// }

// console.log(fibonacci(1));

// let num = 50

// console.log(num % 2)

// let num = 21;

// if(num % 2 === 0){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }

// function largest(a,b,c) {
//     if (a === b && a > c){
//         return "a & b are equal and greater than c"
//     }
//     else if (a === c && a > b){
//         return "a & c are equal and greater than b"
//     }
//     else if (b === c && b > a){
//         return "b & c are equal and greater than a"
//     }
//     else if (a === b && b === c){
//         return "a, b & c all are equal"
//     }
//     else if(a > b && a > c){
//         return a
//     }
//     else if (b > a && b > c){
//         return b
//     }
//     else{
//         return c
//     }
// }

// console.log(largest(5,5,5))

// # Write a function to check if a number is prime.

// function isPrime(n) {
//     if(n < 2) return "Invalid Number";

//     for(let i = 2; i < n; i++){
//         if(n % i === 0){
//             return "Not Prime";
//         }
//     }
//     return "Prime"
// }

// console.log(isPrime(78))



// # Write a function to capitalize first letter of each word.

// function capitalize(str) {
//     let word = str.split(" ");
//     for (let i = 0; i < word.length; i++){
//         word[i] = word[i][0].toUpperCase() + word[i].slice(1)
//     }
//     return word.join(" ")
// }

// console.log(capitalize("rahmat ali"))


// function capitalize(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++){
//         if(i === 0 || str[i-1] === " "){
//             result += str[i].toUpperCase();
//         }
//         else{
//             result += str[i]
//         }
//     }
//     return result;
// }

// console.log(capitalize("rahmat ali"))

// let arr = [2,3,4,5,1]
// let l = 0

// for (let i = 0; i<arr.length; i++){
//     for (let j = i+1; j <arr.length - 1; j++){
//         if(arr[i] < arr[j]){
//             l = arr[j]
//         }
//     }
// }
// console.log(l)