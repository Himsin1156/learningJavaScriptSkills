const empName ="Himanshu Singh"
let empPhoneNumber = 9667815803;
let empAge = 30;
const empEmail ="himanshu1156@gmail.com"


// Here is a new and advances way to write a console command to get the output we have used ``and ${} to give our values from variables

console.log(`Hello my name is ${empName}, my mobile number is ${empPhoneNumber}, my age is ${empAge} and my email id is ${empEmail}. Hope you'd like my information`);


// Another and Advanced way to initialize the string

const localName = new String('      Himanshu      ');

console.log(localName.length);
console.log(localName[2]);

// substring  -- trims the string with givem limit here starts with 0 and counts for 4 digits like 0,1,2,3 total 4 digit so our string =himanshu will returns as himan

const newlocalName = localName.substring(0,5);

console.log(newlocalName);

console.log(localName);
console.log(localName.trim());








