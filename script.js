// // 1
// console.log(prompt("1- Please Enter a Number : "));

// // 2
// const input1 = prompt("2- Please Enter a Number : ");
// if(input1 % 3 == 0 && input1 % 4 == 0) console.log("Yes");
// else console.log("No");

// // 3
// const num1 = prompt("3- Please Enter the first number : ");
// const num2 = prompt("3- Please Enter the second number : ");
// if(num1 > num2) console.log(num1);
// else console.log(num2);

// // 4
// const input2 = prompt("4- Please Enter a number : ");
// if(input2 > 0) console.log("Positive");
// else console.log("Negative");

// // 5
// const arr = [];
// arr.push(prompt("5- Please Enter the first number : "));
// arr.push(prompt("5- Please Enter the second number : "));
// arr.push(prompt("5- Please Enter the third number : "));
// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if(+arr[i] > max) max = arr[i];  
//   else if(+arr[i] < min) min = arr[i];
// }
// console.log("max = " + max);
// console.log("min = " + min);

// // 6
// const checkedNumber = prompt("6- Enter a number please : ");
// if(checkedNumber % 2 == 0) console.log("even")
// else console.log("odd");

// // 7
// const char = prompt("7- Enter a character please : ");
// if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'
// || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') console.log("vowel");
// else console.log("consonant");

// // 8
// const numForLoop = prompt("8- Enter a number please : ");
// for(let i = 1; i <= numForLoop; i++) console.log(i);

// // 9
// const multipliedNum = prompt("9- Enter a number please : ");
// if(Number.isInteger(+multipliedNum)) for(let i = 1; i <= 12; i++) console.log(i * multipliedNum);

// // 10
// const numForLoop2 = prompt("10- Enter a number please : ");
// for(let i = 1; i <= numForLoop2; i++){
//   if(i % 2 == 0) console.log(i);
// }

// // 11
// const numPow1 = prompt("11- Enter the first number please : "); // 4
// const numPow2 = prompt("11- Enter the second number please : "); // 3
// let arr = [];
// let res = 1;

// for (let i = 0; i < numPow2; i++) {
//   arr.push(numPow1);
//   res *= arr[i];
// }
// console.log(res);

// // 12
// let arr = [];
// arr.push(prompt("12- Enter the subject1 please : "));
// arr.push(prompt("12- Enter the subject2 please : "));
// arr.push(prompt("12- Enter the subject3 please : "));
// arr.push(prompt("12- Enter the subject4 please : "));
// arr.push(prompt("12- Enter the subject5 please : "));
// let total = 0;

// for(let i = 0; i < arr.length; i++) {
//   total += +arr[i];
// };

// console.log("Total Marks = " + total);
// console.log("Average Marks = " + total / arr.length);
// console.log("Percentage = " + ((500 - total) / 100) + "%");

// // 13
// const monthNum = prompt("Enter a month number please : ");
// if(monthNum == 1) console.log("31");
// else if(monthNum == 2) console.log("28 days in a common year and 29 days in leap years");
// else if(monthNum == 3) console.log("31");
// else if(monthNum == 4) console.log("30");
// else if(monthNum == 5) console.log("31");
// else if(monthNum == 6) console.log("30");
// else if(monthNum == 7) console.log("31");
// else if(monthNum == 8) console.log("31");
// else if(monthNum == 9) console.log("30");
// else if(monthNum == 10) console.log("31");
// else if(monthNum == 11) console.log("30");
// else if(monthNum == 12) console.log("31");
// else console.log("Enter a number between 1 and 12");

// // 14
// let arr = [];
// arr.push(prompt("12- Enter the subject1 please : "));
// arr.push(prompt("12- Enter the subject2 please : "));
// arr.push(prompt("12- Enter the subject3 please : "));
// arr.push(prompt("12- Enter the subject4 please : "));
// arr.push(prompt("12- Enter the subject5 please : "));
// let total = 0;

// for(let i = 0; i < arr.length; i++) {
//   total += +arr[i];
// };

// console.log("Percentage = "+ ((500 - +total) / 100) + "%");
// if((500 - +total) / 100 >= 90) console.log("Grade A");
// if((500 - +total) / 100 >= 80) console.log("Grade B");
// if((500 - +total) / 100 >= 70) console.log("Grade C");
// if((500 - +total) / 100 >= 60) console.log("Grade D");
// if((500 - +total) / 100 >= 40) console.log("Grade E");
// if((500 - +total) / 100 < 40) console.log("Grade F");

// // 15
// const monthNum = prompt("Enter a month number please : ");
// switch (monthNum) {
//   case 1:
//     console.log(31);
//   case 2:
//     console.log(29);
//     break;
//   case 3:
//     console.log(31);
//     break;
//   case 4:
//     console.log(30);
//     break;
//   case 5:
//     console.log(31);
//     break;
//   case 6:
//     console.log(30);
//     break;
//   case 7:
//     console.log(31);
//     break;
//   case 8:
//     console.log(31);
//     break;
//   case 9:
//     console.log(30);
//     break;
//   case 10:
//     console.log(31);
//     break;
//   case 11:
//     console.log(30);
//     break;
//   case 12:
//     console.log(31);
//     break;
//   default:
//     console.log("Enter a number between 1 and 12");
//     break;
// }

// // 16
// const char = prompt("7- Enter a character please : ");
// switch(char) {
//   case 'a':
//     console.log('Vowel');
//     break;
//   case 'e':
//     console.log('Vowel');
//     break;
//   case 'i':
//     console.log('Vowel');
//     break;
//   case 'o':
//     console.log('Vowel');
//     break;
//   case 'u':
//     console.log("Vowel");
//     break;
//   case 'A':
//     console.log("Vowel");
//     break;
//   case 'E':
//     console.log("Vowel");
//     break;
//   case 'I':
//     console.log("Vowel");
//     break;
//   case 'O':
//     console.log("Vowel");
//     break;
//   case 'U':
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Consonant");
//     break;
// }

// // 17
// const integer1 = prompt("17- Please Enter the first number : ");
// const integer2 = prompt("17- Please Enter the second number : ");
// // for first number
// switch(+integer1 > +integer2) {
//   case true:
//     console.log("max number = " + integer1);
//     console.log("min number = " + integer2);
//     break;
//   }
// // for second number
// switch(+integer2 > +integer1) {
//   case true:
//     console.log("max number = " + integer2);
//     console.log("min number = " + integer2);
//     break;
// }

// // 18
// const checkedNumber = prompt("18- Enter a number please : ");
// switch(checkedNumber % 2) {
//   case 0:
//     console.log("even");
//     break;
//   default:
//     console.log("odd");
//     break;
// };

// // 19
// const checkedNumber = prompt("19- Enter a number please :")
// // Zero
// switch(+checkedNumber == 0) {
//   case true:
//     console.log("Zero");
//     break;
// }

// // Positive
// switch (+checkedNumber > 0) {
//   case true:
//     console.log("Positive");
//     break;
// }

// // Negative
// switch (+checkedNumber < 0) {
//   case true:
//     console.log("Negative");
//     break;
// }

// // 20
// const num1 = prompt("20- Enter first number : ");
// const num2 = prompt("20- Enter second number : ");
// const operator = prompt("20- Enter the operator Ex. (+, -, *, /)");

// switch(operator) {
//   case '+': 
//   console.log(Number(num1) + Number(num2));
//   break;
//   case '-': 
//   console.log(Number(num1) - Number(num2));
//   break;
//   case '*': 
//   console.log(Number(num1) * Number(num2));
//   break;
//   case '/':
//   console.log(Number(num1) / Number(num2));
//   break;
// }