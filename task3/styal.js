alert ("hello world")

// control structure 


// //     if-else=>
// // 1. Check if a number is odd or even and print on console

let num=+prompt ("Print any number");
if (num%2==0){
    console.log("Found a Even number");
} else { 
    console.log("Found a Odd number");
}


// // 2. Find the largest of two number

    // function ok(num1,num2){
    // if(num1>num2) 
    // {console.log("num1 is greater than num2")
    // } else {
    // console.log("num1 is less than num2")
    // }}
    // ok(20,40);
      

// // 3. Perform arithmetic operations on two numbers

// let num1=33;
// let num2=44;{
// console.log("Addition is "+(num1+num2));
// console.log("Substraction is "+(num1-num2));
// console.log("Multiplication is  "+(num1*num2));
// console.log("Division is "+(num1/num2 ));
// }




// ---------------------------------------------------------------------------------------------

// For loop
// 1. Write a JS code to print numbers from 1 to 10
// for(let a=6; a<=9; a++)      // increment or decrement 
// {
//     console.log("Number print  "+(a));
// }

// 2. Write a JS code to find the power of a number using for loop

// function ok(x,y){
// let power=a;
// for(let num1 =1; num1 <y; num1++)    // increment or decrement 
// (power *=x);
// return power;
// }
// console.log(("Power of number  ")+ok(1,2));
// console.log(("Power of number  ")+ok(2,2));
// console.log(("Power of number  ")+ok(3,2));
// console.log(("Power of number  ")+ok(4,2));
// console.log(("Power of number  ")+ok(5,2));
// console.log(("Power of number  ")+ok(6,2));
// console.log(("Power of number  ")+ok(7,2));
// console.log(("Power of number  ")+ok(8,2));
// console.log(("Power of number  ")+ok(9,2));
// console.log(("Power of number  ")+ok(10,2));

// 3. Write a JS code to print Even numbers
// for(x=1; x<=10;x++){
//      if(a % 2 == 0){
//       console.log("Even numbers   "+(x));
//     }
// }

// ------------------------------------------------------------------------------------

// Create a simple calculator using switch statement

// console.log();
// let x = +prompt("Type first number");
// let y = +prompt("Type second number");

//  let operator=prompt(`disply the menu to user and accept the input as a sign (operator)menu =>
//         +  addtion
//         -  substraction
//         *  multiplication
//         /  divistion
//         %  mod
//         **  power`);
//              switch(operator)
//         {
//         case '+':
//         console.log("Addtion of two number  "+ (x+y));

//         break;
//         case '-':
//         console.log("Substracrtion of two number  "+ (x-y));

//         break;
//         case '*':
//         console.log("Multiplication of two number  "+ (x*y));

//         break;
//         case '/':
//         console.log("Divistion of two number  "+ (x/y));

//         break;
//         case '%':
//         console.log("Remainder of two number  "+ (x%y));

//         break;
//         case '**':
//         console.log("power of two number   "+ (x**y));

//         break;
//         default:
//         console.log("Please Type something ");
//         }