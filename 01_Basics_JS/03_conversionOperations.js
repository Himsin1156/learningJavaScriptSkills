let score = null;  // here datatype is string


console.log(typeof score);

console.log(typeof (score));

let valueInNumber = Number(score);    // coverting the string to Number

console.log(typeof valueInNumber);   

console.log(valueInNumber);


// Some investigation facts on conversion:
//where value of score was like below 

// "33"   => 33 ;
// "33abx" => NaN ;
// true => 1 , False => 0 ;
// Null  => 0 ;
// undefned = NaN ;