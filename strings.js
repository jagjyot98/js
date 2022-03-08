var str="hello pepcoders"
       //0123456789.....  index of elements

console.log(str)
console.log(str[6])

// Strings are IMMUTABLE
str[4]="Z"  // wont change anything
console.log(str)

//IMMUTABLILITY -> any element will NOT be changed

// string methods
// 1.extraction methods

// A. slice method  ->  slice(start,end)   start -> inclusive and end -> exclusive

console.log(str.slice(2,5)) // "llo"  shows elements from 2 to 4(end-1)

console.log(str.slice(5,))  // from 5th to end

console.log(str.slice(-3))  // last 3 elements

// console.log(str.slice( ,6))  // cannot miss the start index

console.log(str.slice(6,-2))  // 6th to 3rd last (end-1) 


// B.substring method  -> taking a substring out of a string

let abc=str.substr(2,6)
console.log(abc) //start , end+1

// these both do not overwrite the source string
console.log(str.toLowerCase()) //prints lower case of string
console.log(str.toUpperCase()) //prints upper case of string

// Concatenation -> joins two strings as one
let frststr = "u guys"
let scndstr = "r smart"
console.log(frststr+scndstr)  //1
console.log(frststr.concat(scndstr," and me.")) //2

// Trim method -> removes leading and trailing white spaces from a string
let trmstr = "    hello   hi"

console.log(trmstr)
console.log(trmstr.trim()) //print -> "hello   hi"

console.log(trmstr.length)  // 14
console.log(trmstr.trim().length) // length decreased: 10

// Slipt method -> to break a string into elements
var str ="Hello hello i am hello jagjyot"
// var a=str.split(" ") //each word is broken from whole string
// console.log(str.split(""))  //each charater is broken 
console.log(str.split("hello"))
// console.log(a)