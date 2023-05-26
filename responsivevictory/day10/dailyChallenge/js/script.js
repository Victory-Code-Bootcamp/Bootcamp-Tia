// let a = 20;
// function fakeFunction()
// {
//   let a = 10;
//   console.log(a)
// }
// console.log(a);
// console.log(fakeFunction(a));

// let oddOrEven = num => (num % 2 === 0 ? "Even" : "Odd");
// console.log(oddOrEven(20));

function calculateTotal(price, tax) {
  price += price * tax;
  return price;
}

let result = calculateTotal(20, 0.1);
console.log(result.toFixed(2));
