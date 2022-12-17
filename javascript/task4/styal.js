alert("HELLO WORLD")

// Array=>

// const names=["name",11,true,undefined,null];
// console.log(names);                 //full array

// console.log(names[1]);              //single value via index number 0,1,2,..

// console.log(names[2],names[0]);     //multiple value via index number 0,1,2,.. 

// -------------------------------------------------------------------------------
// Array Methods =>


// Array literator methods

// 1.map
// let numbers=["ok",25,55,64,33,];    
// console.log(numbers);                      //single array

// numbers.map((a,index)=>{                
// console.log(a,index);                     //multiple parametars are also used
// });

// numbers.map((a,index,array)=>{  
// console.log(array);                       //multiple array
// });

// 2.filter
// let mobiles =[
//     {brand: "mi",model:"6pro",price: "14000" },

//     {brand: "oppo",model:"reno",price: "12000" },

//     {brand: "max",model:"2plus",price: "12000" },

//     {brand: "realme",model:"11",price: "22000" },

//     {brand: "mi", model:"11pro",price: "27000" }];
    
//   console.log(mobiles);
//   const mimobiles=mobiles.filter((mobile) =>{
//     console.log(mobile);
//   });

// 3.foreach 
// let numbers=[21,22,10,70,85];   
// let result=numbers.forEach((number,index) => {
//     console.log(number);                                  //number show sathi

//     console.log(index);                                  //index number show sathi
// });

// 4.reduce 
// let numbers = [2,4,6,8,10,12];   //addition is 42               //only used for numbers 
// let add=numbers.reduce((total,number)=>{
//     total=total+number;
//     return total;
// });
// console.log(add); 

// ---------------------------------------------------------------------------------------------------

// Basic operations (adding & removing):

// // 1.Push-(add element at end of array)

// let color=["green","pink","orange"];
// color.push("green");      
// console.log(color);

// // 2.unshift-(add element at the start of array)

// let colors=["red","yellow","orange"];
// colors.unshift("black");      
// console.log(colors);

// // 3.pop-(remove element at end of array)

// let bike=["Tata","splander","suzuki","dream"];
// bike.pop("dream");      
// console.log(bike);

// // 4.shift-(remove element at the start of array)

// let cars=["swift","bmw","nano","Thar"];
// cars.shift("Thar");      
// console.log(cars);

// ----------------------------------------------------------------------------------------------------------

// Modifying array:

// // 1.Splice-(add,update,delete at the one time)

// let colors=["red","yellow","orange"];
// colors.splice(1,1,"voilet");                  //add,update,delete 
// console.log(colors);

// // // 2.slice -(copy entire or partial array)

// let cars=["innova","BMW","scorpio","Xuv"];
// let carmodel=cars.slice(1,3);                      //via index number 0,1,2,3
// console.log(carmodel);

// // 3.Concat-(combine the array)

let color=["red","orange","blue"];
let addcolor=[ "red","yellow","nevy"];
let allcolors= color.concat(addcolor);
console.log(allcolors);

// // 4.Fill-(fill the entire array)

//  let singers=["arijit","darshan","lata","kishor"];             
// singers.fill =["jass-manak"];                                 //replace any element by any value 
// console.log(singers);

// // 5.Tostring-(from array to comma seprated string)

// let bollywoodstars=["Salman","Akshay","Hritik","Sidharth","varun"];  
// let result=bollywoodstars.toString();
// console.log(result);

// // // 6.Join -( include any character as a seprator from array)

// let stars=["Salman","Akshay","Hritik","Sidharth","varun"];  
// let ok=stars.join("/");                                      // /-as a seprator to string
// console.log(ok);

// ---------------------------------------------------------------------------------------------------------

// Searching & Sorting:

// // 1.Sort-(used sort the array in ascending order)(only string can sort not a Numbers)
// let fruits=["Apple","Mango","Cherry","Orange","Banana"];                  
// fruits.sort();                                                         //strings first letter is big
// console.log(fruits);


// // 2.reverse-(used sort the array in Descending order)
// let fruit=["Apple","Mango","Cherry","Orange","Banana"];                //strings first letter is big
// let ASCfruits=fruit.sort();                                            //firstly ascendding and then reverse = Descending
// let DESfruits=ASCfruits.reverse();
// console.log(fruit);

// // 3.Includes- (returns True/False)                          //Result madhe pass karaycha 
// let mobile=[2,4,6,8,10];
// let result=mobile.includes(10);
// console.log(result);

// // 4.Indexof - (True returns index no & False returns -1)
// let value=[1,2,3,4,5,6,7,8,9,0];                                //output shows index number
// let ok=value.indexOf(5);
// console.log(ok);