console.log('Hello world')

let a: string;
var b = 'b' // shows as variable of type string as we can reassign the value to be any string
const c = 'c' // shows as variable of type 'c' instead of string because once assigned a value to const, we can't reassign the value

//any variable declarations in typescript automatically gets its type depending upon the variable it is assigned to.
//when not assigned to any value during declaration it gets type:  any.
//we can also explicitly define type using :<type> such as : string or : number

console.log('aa', a)