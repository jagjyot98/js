//three ways to decalre a variable -> var, let, const
var a=10;
console.log(a);

a="hello";  //re-initialized
console.log(a);

var a = 100  //re-declaration
console.log(a);

//double qoutes " ", single qoute ' ',backtick ` `
// new line -> \n
var str="hello, \n how are you ??";

console.log(typeof str);

console.log(`hello,
how are you
hope u are fine`)

var num=200;
console.log(`half of ${num} is ${num/2}`) //smart string with inbuilt computation
console.log('half of ${num} is ${num/2}') //normal string, no computation

// re declaration is NOT ALLOWED with 'let' keyword
let l=10
//let l=200 // this line will give error of re-declaration

//Loops
for(var a=0;a<10;a++)
    if(a%2==0)
        console.log(a)

//const keyword -> Not re-declare NOt re-initialize
// its value should remain constant once given
//const a = 10
//a=20 // this line will give error of assignment to constant variable