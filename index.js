//three ways to decalre a variable -> var, let, const
var a=10;
// console.log(a);

a="hello";  //re-initialized
// console.log(a);

var a = 100  //re-declaration
// console.log(a);

//double qoutes " ", single qoute ' ',backtick ` `
// new line -> \n
var str="hello, \n how are you ??";

// console.log(typeof str);

// console.log(`hello,
// how are you
// hope u are fine`)

var num=200;
// console.log(`half of ${num} is ${num/2}`) //smart string with inbuilt computation
// console.log('half of ${num} is ${num/2}') //normal string, no computation

// re declaration is NOT ALLOWED with 'let' keyword
let l=10
//let l=200 // this line will give error of re-declaration

//Loops
// for(var a=0;a<10;a++)
//     if(a%2==0)
//         console.log(a)

//const keyword -> Not re-declare NOt re-initialize
// its value should remain constant once given
//const a = 10
//a=20 // this line will give error of assignment to constant variable

// var keyword is function scoped
// let keyword is block scoped: cannot be accessed outside the curly brace block
// everything written in this file is global scoped

//let j=13; // if this, then outer block j call will access this j, otherwise last j will give error
for(var a=0;a<=10;a++){
    let j=12            // this j is destroyed after the curser comes outor at the end (means when 1 computation is over) of the block
    if(a%2==0)
        console.log(j)
}
console.log(j) //here a can be accessed if "let j" is given but if "var j" then cannot be accessed, also if let j is defined outside of the loop block

