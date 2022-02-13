// 3 types of functions
// normal functions

// function defination
// function getready(){
//     console.log(brush)
//     console.log(brush)
//     console.log(brush)
// }
// function call
// function_name(arg1,arg2);

function add(a,b){ // a ans b are paramenters
    return a+b
}
// let ans=add(10,2); // function call with 10 & 2 are arguments
// console.log(ans)

// functions are treated as frist class citizens in javascript
// 1. funtions can be returned
// 2. functions can be passed as Parameters/arguments

function add(a,b){ // a ans b are paramenters
    // console.log(a+b)
}

function calculator(str,a,b){
    if(str =='add'){
        return function add(){
            // console.log(a+b);
        }
    }
}
    // }else if(str=='subtract'){

    // }

let ans = calculator('add',2,3);
// console.log("returned function is \n"+ans); // reurns functions code as string
// ans(); // when called here with barces then it is turned into a running function with the earlier called parameters


//2.fucntion Expression
let sayhi = function abcd(){  // here abcd() (not required) function is given another refrence name sayhi to be called
    // console.log("hello")
}
// sayhi();  // sayhi holds the defination of function (code)

// console.log(""+sayhi);  // prints fucntion code

//abcd();// gives error not defined
//console.log(""+abcd);  // prints fucntion code

//3. IIFE -> imediately Invoked function expression

function add(a,b){
    return a+b
}
add(2,3)
let additionIIFE = (function add(a,b) {
    return a+b;
}) (20,30) // here "(20,30)" these are invokation brackets & 20,30 are default values
console.log(additionIIFE) // here it will not display the code but will run it
console.log(additionIIFE(40,30));  // call with arguments