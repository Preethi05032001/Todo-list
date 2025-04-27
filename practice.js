// //Log a statement using console.log()
// console.log("Hello from script");

// //Variables

// let age = 25;
// console.log(age);

// const salary = 50000;
// console.log(salary);

// //Data Types (object type)
// const person = {
//     firstName : "gowri",
//     lastName : "prasad",
//     age : 25,
// }
// console.log(person.lastName);

// //arrays

// const oddNumbers = [1,3,5,7,9];
// console.log(oddNumbers[2]);


// let x = 10; //assignment operators

// let a = 10;
// let b = 5;
// console.log(a - b); //arithmetic operators


// let p = 10;
// let q = 5;
// console.log(p != q);  //comparison operators


// const isValidNumber = x > 8 && 8 < x;
// console.log(isValidNumber);
// const isValidNumber1 = x > 8 || 8 < x;
// console.log(isValidNumber1);
// const isValid = false;
// console.log(!isValid); //logical operators


// console.log('Brusce ' + 'Wayne'); //string concatenation


// const isEven = 10 % 2 === 0? 'number is even' : 'number is odd';
// console.log(isEven); //ternary operator


// //Equality
// const var1 = 10;
// const var2 = '10';
// console.log(var1 == var2);
// console.log(var1 === var2);

// const num  = -10;
// if (num > 0) {
//     console.log('number is positive');
// } else {
//    console.log('number is not positive');
// }

// const num1 = 0;
// if (num1 > 0) {
//     console.log('number is positive');
// }
// else if (num1 < 0) {
//     console.log('number is negative');
// }
// else {
//     console.log('number is zero');
// }


// const color = 'pink';
// switch (color) {
//     case 'red' : console.log('color is red');
//     break;
//     case 'blue' : console.log('color is blue');
//     break;
//     case 'green' : console.log('color is green');
//     break;
//     default : console.log('nat a valid color');
// }


// function greet(username) {
//     console.log('good morning ' + username);
// }
// greet('preethi');
// greet('priya');
// greet('anu');

function add(a , b) {
    return a + b;
}

const sum = add(10 , 20); 
console.log(sum);