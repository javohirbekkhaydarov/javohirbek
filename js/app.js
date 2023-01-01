/* 

bu funksiyaning asosiy vazifasi berilgan 
songacha barcha natural sonlarning
 yig'indisin qaytarish 
 
 */

 // DAY 1 example 1

// function expression
const sum = (n) => (n * (n + 1)) / 2;
console.log(sum(5));



// function decloration
function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum  += i;
  return sum;
}
console.log(sum(5));