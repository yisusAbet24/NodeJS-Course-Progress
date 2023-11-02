console.log("start the program"); // !1

setTimeout(() => {
  console.log("first Timeout"); // !5
}, 3000);

// ! 3 seconds

setTimeout(() => {
  console.log("Second timeout"); // !3
}, 1);

setTimeout(() => {
  console.log("Third timeout"); // !4
}, 0);

console.log("end the program"); // !2
