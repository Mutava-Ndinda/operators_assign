//Extract the four charcters from the string "extravaganza"
let a = "extravaganza";

let word =a[8] + a[9] + a[10] + a[11];
console.log(word);

//insert the following string at the fourth index
const food = "The quick fox jumped over the lazy dog";
const insert ="eat ";
const secfood = food.substring(0,4) + insert + food.substring(4);
console.log(secfood);

const food1 = "The";
const food2= "quick fox jumped over the lazy dog";
const result =`${food1} eat ${food2}`;
console.log(result)

//count how many times the string appears
//i flag - case insensetive- do not check the case
// g global word show it can be more than one time,everything
//b-boundary anchor -start and end-a word
const count = "the quick brown fox jumps over the lazy dog"
const count1 = (count.match(/\bthe\b/ig)|| []).length;
console.log("Number of occurences of 'the':",count1);

const count2 = (count.match(/\bbrown\b/gi)|| []).length;
console.log("Number of occurences of 'brown:",count2);


//find the words from the following strings
//1."are"
const string1 = "The pupils are reading in the library";
const isAreString1 = string1.includes("are");
console.log(isAreString1);

//2."sitting"
const string2 = "The child was sitting on the table before it fell";
const isString2 = string2.includes("sitting");
console.log(isString2);

//convert the following
let b = "wonderful";
console.log(b.toUpperCase());

let c = "amazing";
console.log(c.toLowerCase());

let d = "UndERneath";
console.log(d.toLowerCase());

const e = "A wonderful world";
const f = e.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
console.log(f);







