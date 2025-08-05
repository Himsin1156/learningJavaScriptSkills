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





