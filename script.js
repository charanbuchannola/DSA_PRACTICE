// var arr = [10, 20, 30, 40, 50];

// var sum = 0;

// arr.forEach((element) => {
//   sum += element;
// });
// console.log(sum);

// let a = 10;
// let b = 20;
// console.log(`sum of ${a} &  ${b} is ${a + b}`);

// let a = parseInt(prompt("enter a first number"));
// let b = parseInt(prompt("enter b second number"));

// console.log(a + b);

// let a = prompt("enter a name");
// let b = Number(prompt("age"));

// console.log(`Hello ${a}, your age is ${b}`);

// let a = parseFloat(prompt("enter lenth"));
// let b = parseFloat(prompt("enter width"));

// console.log(`area of rectangle is ${a * b}`);
// console.log(`area of rectangle is ${a + b}`);
// let a = Number(prompt("enter a"));
// let b = Number(prompt("enter b"));

// if (a > b) {
//   console.log(` ${a} is greater than ${b}`);
// } else {
//   console.log(`${b} is greater than ${a}`);
// }

// let a = Number(prompt("enter a"));
// let b = Number(prompt("enter b"));

// if (a % 2 === 0) {
//   console.log(` ${a} is even`);
// } else {
//   console.log(`${a} is odd`);
// }
// let name = prompt("enter name");
// let age = Number(prompt("enter age"));

// if (age > 18) {
//   console.log(` Hello ${name}, you are a valid voter`);
// } else {
//   console.log(` Hello ${name}, you are eligible to vote in 18 age`);
// }

// let number = Number(prompt("enter number between 1 and 7"));

// switch (number) {
//   case true:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid input");
// }

// let number = Number(prompt("enter the price"));
// let discount;

// if (number >= 0 && number <= 5000) {
//   // console.log("Price is 5000");
// } else if (number > 5000 && number <= 7000) {
//   // priceAfterDiscount = number - (number * 5) / 100;
//   // console.log(`Price after discount: ${priceAfterDiscount}`);
// } else if (number > 7000 && number <= 10000) {
//   // priceAfterDiscount = number - (number * 10) / 100;
//   // console.log(`Price after discount: ${priceAfterDiscount}`);
// } else if (number > 10000 && number <= 100000) {
//   // priceAfterDiscount = number - (number * 10) / 100;
//   // console.log(`Price after discount: ${priceAfterDiscount}`);
// }

// let units = Number(prompt("enter the  units of bill"));

// let amount = 0;

// if (units > 400) {
//   amount = (units - 400) * 13;
//   units = 400;
// }

// if (units > 200 && units <= 400) {
//   amount += (units - 200) * 8;
//   units = 200;
// }
// if (units > 100 && units <= 200) {
//   amount += (units - 100) * 6;
//   units = 100;
// }
// if (units > 0 && units <= 100) {
//   amount += units * 4.2;
// }

// console.log(`total amount to be paid: ${amount}`);

// let number = Number(prompt("enter the number"));
// for (var i = 0; i < number; i++) {
//   console.log("hello hyderabad");
// }

// let number = Number(prompt("enter the number"));
// let sum = 0;
// for (var i = 1; i <= number; i++) {
//   sum += i;
//   console.log(`sum: ${sum}`);
// }
// console.log(`sum: ${sum}`);

// let number = Number(prompt("enter the number"));

// for (let i = 2; i <= number / 2; i++) {
//   if (number % i === 0) {
//     console.log(`${number} is not a prime number`);
//     break;
//   } else if (number % i === 1) {
//     console.log(`${number} is a prime number`);
//     break;
//   }
// }

// sum of individual numbers
// let number = Number(prompt("enter the number"));
// let sum = 0;

// while (number > 0) {
//   let rem = number % 10;
//   sum += rem;
//   number = Math.floor(number / 10);
// }
// console.log(`sum is ${sum}`);

// Reverse the number

// let number = Number(prompt("enter the number"));
// let reverse = 0;

// while (number > 0) {
//   let rem = number % 10;
//   reverse = reverse * 10 + rem;
//   number = Math.floor(number / 10);
// }

// console.log(`reverse is ${reverse}`);

// pallindromic or not
// let number = Number(prompt("enter the number"));
// let copy = number;
// let reverse = 0;

// while (number > 0) {
//   let rem = number % 10;
//   reverse = reverse * 10 + rem;
//   number = Math.floor(number / 10);
// }

// console.log(
//   copy == reverse ? "pallindromic number" : "not a pallindromic number"
// );

// strong number
// let number = Number(prompt("enter the number"));
// let copy = number;
// let sum = 0;
// while (number > 0) {
//   rem = number % 10;
//   let fact = 1;
//   for (let i = 1; i <= rem; i++) {
//     fact *= i;
//   }
//   sum += fact;
//   number = Math.floor(number / 10);
// }
// console.log(sum == copy ? "strong number" : "not a strong number");

// automorphic number

// let n = Number(prompt("enter the number"));
// let sqt = n * n;
// let copy = n;

// let count = 0;
// while (n > 0) {
//   count++;
//   n = Math.floor(n / 10);
// }

// console.log(
//   copy == sqt % Math.pow(10, count) ? "automorphic number" : "not automorphic"
// );

// make it single digit

// let number = Number(prompt("enter the number"));

// let sum = 0;

// while (number > 0 || sum > 9) {
//   if (n == 0) {
//     n = sum;
//     sum = 0;
//   }

//   sum = sum + rem;
//   n = Math.floor(n / 10);
// }

// console.log(n);

//fibonacci series
// fibonacci series

// fibonacci series

// let n = Number(prompt("enter the number of terms"));

// let a = 0;
// let b = 1;
// let sum = 0;
// console.log("Fibonacci series:");
// console.log(a);

// for (let i = 1; i < n; i++) {
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
//   sum += c;
// }

// calculator Program

// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));
// let operator = prompt("Enter operator (+, -, *, /)");
// let result;
// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     if (num2 == 0) {
//       console.log("Error: Division by zero");
//       break;
//     }
//     result = num1 / num2;
//     break;
//   default:
//     console.log("Error: Invalid operator");
//     break;
// }
// console.log(`${num1} ${operator} ${num2} = ${result}`);

// // remove duplicates from sorted array

// let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];

// let uniqueArr = [...new Set(arr)];

// console.log("uniqueArr: " + uniqueArr);

// // guess the number

// let number = parseInt(prompt("enter the number between 0 and 100"))

// var random = Math.floor(Math.random());

// reverse a string

// let str = prompt("Enter a string");
// let reversed = str.split("").reverse().join("");
// console.log(reversed);

// pallindrome a string

// let string = prompt("Enter a string");
// let Reversed = str.split("").reverse().join("");

// if (str === reversed) {
//   console.log("The string is a palindrome");
// } else {
//   console.log("The string is not a palindrome");
// }

// let i = prompt("Enter a number");

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// // max number
// let arr = [1, 5, 3, 9];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("max: " + max);

// remove duplicates from an array

// let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];

// let i = 0;

// for (let j = 1; j < arr.length; j++) {
//   if (arr[i] !== arr[j]) {
//     i++;
//     arr[i] = arr[j];
//   }
// }
// console.log(arr);

//sum of an array

// let arr = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// maximum element from array

// let arr = [20, 40, 50, 8, 12, 68, 43];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log("Maximum element: " + max);

//second max element in an array

let arr = [20, 40, 50, 8, 12, 68, 43];

let max = arr[0];
let secondMax = -Infinity;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] < max) {
    secondMax = arr[i];
  }
}
