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

let number = Number(prompt("enter the number"));
let copy = number;
let sum = 0;
while (number > 0) {
  rem = number % 10;
  let fact = 1;
  for (let i = 1; i <= rem; i++) {
    fact *= i;
  }
  sum += fact;
  number = Math.floor(number / 10);
}
console.log(sum == number ? "strong number" : "not a strong number");
