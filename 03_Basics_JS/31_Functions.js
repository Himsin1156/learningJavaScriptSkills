

function myName(){          // Syntax of function  

    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");

}

// Calling this function myName:

//myName();



function addTwoNum(num1,num2){
    //console.log(num1+num2);
    return num1+num2;
    
}

//const sum =  addTwoNum(3,7);

//console.log(`Sum of given number is ${addTwoNum(3,2)}`);

// function userName(username){
//    if(!username){
//     console.log("Please enter correct username!");
//     return;
//    }
//    console.log(`${username} is logged in`);
   
// }


//userName("Him");


// Function calling the object or object called by function


const userCart = {
    name: "Himanshu",
    product: "Laptop",
    Price: 13000,
    isAddedInCart:true

}


function cartProducts(anyobject){    //Here parameter passed as anyobject for always but argument will be passed as our object which we made.
    console.log(`Product Added in cart ${anyobject.product} for Price ${anyobject.Price} belongs to user ${anyobject.name} also cart added product ${anyobject.isAddedInCart}`);
    
}

 //here passing the object in argument
 //cartProducts(userCart);  



 const totalCartValue = [100,300,400,600,1000];

 function cartFunctionAdd(anyArray){
       return anyArray[3];
      
 }

 console.log(cartFunctionAdd(totalCartValue));