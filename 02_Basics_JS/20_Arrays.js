const arr = [1,2,3,4,5,6];
const arr2 =[7,8,9,10,11,12];


// Push will add the element in the given array
arr.push(7);

//Pop will remove last element from the array 
arr.pop()


const mixarr = arr.concat(arr2);

console.log(mixarr);

//Example2  combining 2 array element with spread operator:

// Spread Operator


const mate1 = ["Himanshu","Deepak","Sadana"];
const mate2 =["Ashish","Roshan","Loid"];


const mixedArrWithSpreadOperator = [...mate1, ...mate2];

console.log(mixedArrWithSpreadOperator);



// Array inside Array and to fix all in one array:


const togetherArr =[2,3 ,[4,5,6],[7,[8,9,10]]];

const allInOneArr = togetherArr.flat(Infinity);

console.log(allInOneArr);

// Another Property on converting string into Array - array.from


const propertyAnother = Array.isArray("Himanshu");

const fromProperty = Array.from("Himanshu");

console.log(propertyAnother);
console.log(fromProperty);


// array.of and array.from works like the below

let score1 = 250;
let score2 = 500;
let score3 = 750;
let score4 = 1000;

const combinedScores= Array.of(score1,score2,score3,score4)

console.log(combinedScores);





