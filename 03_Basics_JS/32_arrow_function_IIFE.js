

const nonArrowFunc = function(userName){
    let username = "Himan";
    console.log(this.username);
    
}

//Arrow Function   - Syntax would be like  :    () => { }

const arrowFunc = () => {
    let username = "Himan";
    console.log(this);
    
}

//console.log(arrowFunc());


// Implicit return function

const addTwoNums = (num1,num2) => (num1 + num2);

//console.log(addTwoNums(3,3));


// IIFI   i.e () ()  as like function()   // Immediately Invoked Function Expressions IIFE () => ()()

(function  code1 (num1){    // Named IIFI
    console.log("Printed_code1");
})();

//  (define paramter) (pass argument) like below example this is example of arrow function.  (Un-named IIFI)  with passed parameter and arguments

( (name,mob) => (console.log(`Printed_code2 username by arrow function ${name} and ${mob}`))) ("Himanshu", 9667152072);


