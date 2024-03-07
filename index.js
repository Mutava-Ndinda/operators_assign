//Extract the four charcters from the string "extravaganza"
let a = "extravaganza";

console.log({character:a[8]});
console.log({character:a[9]});
console.log({character:a[10]});
console.log({character:a[11]});

//insert the following string at the fourth index
const food = "The quick fox jumped over the lazy dog";
const insert ="eat ";
const secfood = food.substring(0,4) + insert + food.substring(4);
console.log(secfood);

//count how many times the string appears
const count = "the quick brown fox jumps over the lazy dog"
const count1 = (count.match(/the/gi)|| [].length);
console.log("Number of occurences of 'the':",count1);

const count2 = (count.match(/brown/gi)|| [].length);
console.log("Number of occurences of 'brown:",count2);


//find the words from the following strings
//1."are"
const string1 = "The pupils are reading in the library";
console.log({index: string1.indexOf("are")});

//2."sitting"
const string2 = "The child was sitting on the table before it fell"
console.log({index:string2.indexOf("sitting")});

//convert the following
let b = "wonderful";
console.log(b.toUpperCase());

let c = "amazing";
console.log(c.toLowerCase());

let d = "UndERneath";
console.log(d.toLowerCase());




