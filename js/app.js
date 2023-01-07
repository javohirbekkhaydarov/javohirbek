/* 

bu funksiyaning asosiy vazifasi berilgan 
songacha barcha natural sonlarning
 yig'indisin qaytarish 
 
 */

 // DAY 1 example 1

// function expression
const som = (n) => (n * (n + 1)) / 2;
console.log(som(5));



// function decloration
function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum  += i;
  return sum;
}
console.log(sum(5));


// fizz buzz in Javascript

for(let i = 1; i <= 5; i++) {
  if(!(i % 15)) console.log('FizzBuzz')
  else if(!(i % 3)) console.log('Fizz')
  else if (!(i % 5)) console.log('Buzz')
  else {
    console.log(i)
  }
}
