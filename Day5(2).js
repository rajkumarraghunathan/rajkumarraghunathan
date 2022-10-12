//Print an odd number in an array
let array=[1,2,3,4,5,6,7,8,9];
let oddNumber=()=>
{

console.log("odd numbers in an array");
for(let i=0;i<array.length;i++)
{
    
    if(array[i]%2!=0)
    {
        console.log(array[i]);
    }
}
}
oddNumber();
//Title case
const str = "raj kumar";
const a = str.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
console.log("Title Case");
console.log(a);
//Sum of all number in an array
let sum=()=>
{
    let total=0;
    for(let j=0;j<array.length;j++)
    {
        total+=array[j];
    }
    console.log("Sum of all number in an array");
    console.log(total);
}
sum();

//Palindrome
let string="rajkumar";
let palindrome=()=>
{
    let reverseString=string.split("").reverse().join("");
    if(string===reverseString)
    {
        console.log("String is a palindrome");
    }
    else{
        console.log("String is  not a palindrome");
        
    }
}
palindrome();

//prime number
var ar = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

 let isPrime=(item)=> {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < ar.length; index++) {
  if (isPrime(ar[index])) {
      prime.push(ar[index])
  }
}

console.log(prime);

//median of two sorted array
