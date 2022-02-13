let cars=["BMW","AUDI",1,2,3,true]  // different datatypes can be stored in a arry
console.log(cars);

//accesing the elemnts of array
console.log(cars[0])

//replacing elemnts
cars[3]="Mahindra"
console.log(cars[3])

//aadding elemnts in array
cars[6]="Vokswagen"
console.log(cars)
// // an empty element if run next 2 lines
// cars[8]="honda"
// console.log(cars)

// methods of arry

// 1.pop removes element form last
cars.pop()
console.log(cars)

// 2.push adds elment to last
cars.push("TATA")
console.log(cars)

// 3.unshift adds elememnts to starting lof array
cars.unshift("JLR")
console.log(cars)

// 4.shift removes element from 0th index of array
cars.shift()
console.log(cars)

// 5.length
console.log(cars.length)  //to find length of array


                    //2d array
let arry2d=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(arry2d)

console.table(arry2d) //displays the 2d array in a tabular form

console.log(arry2d[0][1])

console.log(arry2d[0].length)  //gives the length of a row in a 2d array