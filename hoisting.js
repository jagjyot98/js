// HOISTING: variable and function can be accessed before declaration 

// console.log(a)//undefined
// greet()//hello
// hey() //undefined

var a=10;
function greet(){
    console.log("hello")
}

var hey=function(){     //here "hey" is a variable which will be given its value i.e function code late
    console.log("yolo")
}

hey()//yolo
console.log(a); //10
greet() //hello