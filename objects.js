// Everything in js is object
let arr=["a","b"]

let arr1={
    0:"a",
    1:"b"
};
// console.log(arr.length)

//js objects are always in key value pair
let ob={}
// console.log(ob);// empty object


let person={
    name:"ABC",
    age:12,
    phone:90000000,
    gender:"male"
};
// console.log(person);
// console.log(`hey ${person.name}, thank y`);// Dot notation
// console.log(person["gender"]);// square bracket notation

                                    // key can hold either property or a method

let cap={
    frstname:"steve",
    lstname:"rogers",
    
    friends:["bucky","tonu stark","bruce banner"],
    
    age:102,
    isavenger:true,
    
    address:{
        state:"Manhattan",
        city:"new york",
        country:"USA"
    },

    sayhi: function (){         //method-> function defined inside an object
        console.log(`hello mi name is ${this.frstname}`);// empty object
    }
};
// console.log(cap)
// console.log(cap.friends)

// console.log(cap.friends[0])
// console.log(cap["friends"][0])

// console.log(cap.sayhi)  // function code
// console.log(cap.sayhi()) // function run here fucntion is not return anything, directly printing so will show undefined
// cap.sayhi() // will directly run the fucntion code

// console.log(cap.address.city) //accessing address proprties using nested dot notation

console.log(typeof cap.frstname)  //print type of the object property

delete cap.lstname         // deleting the key(property) from abject
console.log(cap.lstname)

// for loop
// for(let k in cap){
//     console.log(`${k}: ${cap[k]}`) //displays keys

    // console.log(cap[k]) // displays key's value
    // console.log(cap.k)// looks for a key in cap object which is not present
// }