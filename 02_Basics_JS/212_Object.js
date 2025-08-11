//const amazonUser = new Object()     // This is a singlton Object

const amazonUsers ={}                // This is non-singleton object 

amazonUsers.id = "51717820";
amazonUsers.userName = "Himan1156";
amazonUsers.password = 123456;
amazonUsers.mobile = 9667815803;


//console.log(Object.keys(amazonUsers));   // Way to print all the keys and values

//console.log(Object.values(amazonUsers));


//console.log(Object.entries(amazonUsers));  // Entries method which make all value as array

//console.log(amazonUsers.hasOwnProperty("userName"));






//console.log(amazonUsers);

const guestUser = {
    email: "abc@gmail.com",
    mobile: 8299014163,
    fullName : {
        firstName: "Deepak",
        lastName: "Chaurasia"
    }
}


//console.log(guestUser.fullName);


const user1 = {1 : "Himanshu", 2 : "Singh"};

const user2 = {3 : "Meenal" , 4 : "Singh"};

//const fullDetailsUser = { ...user1, ...user2 }     // Another way to comobine object like array i.e. Spread operator

//const concateObj = Object.assign({}, user1,user2);   // Assign function to combine the object

//console.log(fullDetailsUser);


//console.log(concateObj);



  // object destructure syntax
const playGame ={
    gameName: "Cricket",
    ticket: 5400,
    ground: "Chinnaswami_Stadium",
    totalPlayer:24
}


//console.log(playGame);

// here object destucture by colon : 
const{ground : gro} = playGame    // curly braces shows the detructuring

console.log(gro);


// what is json,, this is what json is and looks like within scope of curly braces
[
{
    "gameName" : "Cricket",
    "ticket": 5400,
    "ground": "Chinnaswami_Stadium",
    "totalPlayer":24 

}
]

// json can be shown with [ ]  square bracket as well like below


[
  {"gameName" : "Cricket",
    "ticket": 5400,
    "ground": "Chinnaswami_Stadium",
    "totalPlayer":24 },

  { "gameName" : "Cricket",
    "ticket": 5400,
    "ground": "Chinnaswami_Stadium",
    "totalPlayer":24},

  { "gameName" : "Cricket",
    "ticket": 5400,
    "ground": "Chinnaswami_Stadium",
    "totalPlayer":24}

]






