alert ("hello world")

// // 1.without Parametarised
// // // 1.Addition
// function yes(){
//     let num1=+prompt("enter 1st Number");
//     let num2=+prompt("enter 2st Number");
//     console.log("addition of two numbers is:"+(num1+num2));
// }
// yes();

// // // 2.substraction
// function yes(){
//     let num1=+prompt("enter 1st Number");
//     let num2=+prompt("enter 2st Number");
//     console.log("substraction of two numbers is:"+(num1-num2));
// }
// yes();

// // // 3.Multiplication
// function no(){
//     let num1=+prompt("enter 1st Number");
//     let num2=+prompt("enter 2st Number");
//     console.log("Multiplication of two numbers is:"+(num1*num2));
// }
// no();


// // 4.division
// function soo(){
//     let num1=+prompt("enter 1st Number");
//     let num2=+prompt("enter 2st Number");
//     console.log("division of two numbers is:"+(num1/num2));
// }
// soo();
// ----------------------------------------------------------------------------------------

// // 2.parametarised
// // 1.Normal function

// var firstname="javascript";
// console.log(firstname);

// // 1.Addition Function
// function add(num1,num2){
    // console.log ("Addition of two numbers is: " + (num1+num2) );
//  }
// add(33,55);

// // 2.substraction function
// function sub(num1,num2){
//         console.log ("substraction of two numbers is: " + (num1-num2) );
//     }
//   sub(33,55);
    
// // 3.multiplication function
// function multi(num1,num2){
//     console.log ("multiplication of two numbers is: " + (num1*num2) );
// }
// multi(33,55);

// // 4.division function
// function div(num1,num2){
//     console.log ("division of two numbers is: " + (num1/num2) );
// }
// div(33,55);

// --------------------------------------------------------------------------------------
// //3. return statment without parametarised
// // 1.addition
// function add(){
//     let a=33,b=22;
//     return a+b;
// }
// let addition=add();
// console.log ("addition is:"+(addition));

// // 2.substraction
// function yes(){
//     let a=33,b=22;
//     return a-b;
// }
// let substraction=yes();
// console.log ("substraction is:"+(substraction));


// // 3.multiplication
// function non(){
//     let a=10,b=8;
//     return a*b;
// }
// let multiplication=non();
// console.log ("multiplication is:"+(multiplication));

// // 4.division
// function bye(){
//     let a=10,b=8;
//     return a/b;
// }
// let division=bye();
// console.log ("division is:"+(division));

// ------------------------------------------------------------------------

// // 4.return statment with parametarised

// // 1.addition 
//     const add=(num1,num2)=>{
//         return num1+num2;
    
//     }
//     let Addtion=add(44,77);
//     console.log("Addtion of two number is:"+(Addtion));

//     // 2.substraction
//     const sub=(num1,num2)=>{
//         return num1-num2;
    
//     }
//     let substraction=sub(77,44);
//     console.log("substraction of two number is:"+(substraction));

//     // 4.multiplication
//     const multi=(num1,num2)=>{
//         return num1*num2;
    
//     }
//     let multiplication=multi(44,2);
//     console.log("multiplication of two number is:"+(multiplication));

//     // 5.division
//     const div=(num1,num2)=>{
//         return num1/num2;
    
//     }
//     let division=div(150,15));
//     console.log("division of two number is:"+(division));

// -------------------------------------------------------------------------
// // 5.parameterized arrow function -

// // 1.addition

//     let pro = (num1, num2) => {
//         console.log("addition is:"+(num1 + num2));
//       }
//       pro(40, 12);
      
// // 2.substraction

//     let go = (num1, num2) => {
//         console.log("substraction is:"+(num1 - num2));
//       }
//       go(50, 12);

// // 3.Multiplication

//     let bby = (num1, num2) => {
//         console.log("Multiplication is:"+(num1 *num2));
//       }
//       bby(50, 12);

// // 4.dicision

//     let see = (num1, num2) => {
//         console.log("division is:"+(num1 /num2));
//       }
//       see(50, 12);

    //   -------------------------

// // 6.whithout parameterized arrow function -

// // 1.addition
//     let pro = (num1,num2) => {
//         console.log("addition by using of arrow function!");
//       };
//       pro();

// // 2.substraction
// let sub = (num1,num2) => {
//     console.log("substraction by using of arrow function!");
//   };
//   sub();
      
// // 3.multiplication
// let multi = (num1,num2) => {
//     console.log("multiplication by using of arrow function!");
//   };
//   multi();

//   // 4.division
// let div = (num1,num2) => {
//     console.log("division by using of arrow function!");
//   };
//   div();

    //   --------------------------------------------------------------------------

    // // 7.  arrow function (without curly braces) 

    // // 1.addition
    //   let add=() =>6+4;
    // console.log (add());

    // // 2.substraction
    // let sub=() =>70-35;
    // console.log (sub());
    
    //  //3.multiplication
    //  let multi=() =>10*2;
    //  console.log (multi());

    //   // 4.division
    // let div=() =10/2;
    // console.log (div());

    // ---------------------------------
    
    // 8.arrow function (without parenthesis) 
    // 1.addition
    let add = n1 => n1+n1;
    console.log(add(40));

    // 2.substraction
    let sub = n1 => n1-n1;
    console.log(sub(20));

    // 3.multiplication
    let multi = n1 => n1*n1;
    console.log(multi(40));

    // 4.division
    let div = n1 => n1/n1;
    console.log(div(20));