const heros =["Ironman", "Thor", "Hulk" , "Shaktiman"];

//console.log(heros);



const myObject = {
    name:"Himanshu",
    age:30,
    isworking:true
}

//console.log(typeof myObject);


const myFunc = function(){
    let a=30;
    let b=10;
    let c= a*b;
    console.log("Sum of a and B is " + c);
    return c;
}

console.log(myFunc());

//Thing to remember and to notice always:

// Stack Memory (Primitive Datatypes)  
// Heap Memory  (Non-Primitive Datatypes)

//Example for Stack Memory  (Change by value as in stock memory the copy of the variable is getting changed)

let userOne ="Himanshu"

let userTwo= userOne;

userTwo="Meenal";

console.log(userOne);
console.log(userTwo);




//For Example(Heep memory) change by reference used here: {Value by reference the change is done in actual place and no copy created}

const checkListOne ={
    email: "himan1156@google.com",
    phone: 761593747
}

const checkListTwo = checkListOne;

//checkListTwo.phone=9667815803;

console.log(checkListOne.phone);
console.log(checkListTwo.phone);

//So above is the example of Heap memory 