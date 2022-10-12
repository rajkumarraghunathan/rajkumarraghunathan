//Print an odd number in an array
let oddNumber=function()
{
let array=[1,2,3,4,5,6,7,8,9];
console.log("odd numbers in an array");
for(let i=0;i<array.length;i++)
{
    
    if(array[i]%2!=0)
    {
        console.log(array[i]);
    }
}
//Sum of all number in an array
console.log("Sum of all numbers in an arrray");
let sum=0;
for(let i=0;i<array.length;i++)
{
sum+=array[i];
}
console.log(sum);
console.log("All prime numbers in an array");

};
 oddNumber();


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
       if ((item % j) == 0) { 
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
//Remove Duplicates from an Array
console.log("Remove Duplicates from an array");
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);
//rotated K times
console.log("rotated K times");
function RightRotate(a, n, k)
{
 
   
    k = k % n;
 
    for (let i = 0; i < n; i++) {
        if (i < k) {
 
           
            console.log(a[n + i - k] + " ");
        }
        else {
 
           
            console.log((a[i - k]) + " ");
        }
    }
    
}
 

let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
 
RightRotate(Array, N, K);
//Median sorted
function getMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
   
    for (count = 0; count <= n; count++)
    {
        
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
       
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 

var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
   console.log("Median is "+ getMedian(ar1, ar2, n1));
else
   console.log();("Doesn't work for arrays of unequal size");