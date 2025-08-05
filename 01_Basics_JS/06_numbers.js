const mobileNum = 761593747;

console.log(mobileNum);


const typeTwoNum = new Number(8000.7654);

console.log(typeTwoNum);
console.log(typeTwoNum.toString().length);
console.log(typeTwoNum.toFixed(3));



const floatNum = 45.785;
console.log(floatNum.toPrecision(5));



const balance = 10000000;

console.log(balance);
console.log(balance.toLocaleString('en-IN'));   /// If you want to use any specific number format here we have used EN-IN indian format by default it gives us num format.


// ########## ###### MATH ##### ############# ///


console.log(Math.pow(9,3));

const myCalc = Math.PI*1;

console.log(myCalc.toPrecision(3));


console.log((Math.round(Math.random()*10) + 1));

const min =10;
const max =20;
console.log( Math.round(Math.random()*(max - min + 1) + min));










