// there 2 ways to define object like -> 1. Literals  , 2. Constructors

// object literals

const mySym = Symbol("helloKey");


const jsObject = {
//  key  : value    structure in object
    name:"Himanshu",
    age:30,
    isMarried:true,
    [mySym]:"myKey1",
    email:"himi1156@gmail.com",
    fruNamn:"Meenal"

}



console.log(jsObject.isMarried, jsObject.name,jsObject.fruNamn);
// another way to print or call object i.e objectname["key"]
console.log(jsObject["name"],jsObject["fruNamn"]);


const arrYum = [1,46,14,13,12,11];

const arrYum2 = ["Him","Anshu"]

arrYum.pop();

const joinArr =[...arrYum,...arrYum2]


console.log(arrYum);

console.log(joinArr);


console.log(jsObject[mySym]);
//Object.freeze(jsObject);


jsObject.greetings = function(){
     return ("Hello My Objection function");
    
}

jsObject.greetingsTwoDetails = function(){
   return (`Object Says ${this.email} of user ${this.name}`);
   
}

console.log(jsObject.greetings());

console.log(jsObject.greetingsTwoDetails());




