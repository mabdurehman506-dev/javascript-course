// example of promise
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Promise started");
//     resolve("Promise resolved");
//     reject("Promise rejected");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//   console.log("promise fullfilled");
// });
// promise.catch((error) => {
//   console.log("promise rejected with error:", error);
// });



// first example of promise chaining
// function asyncFunc1(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Async Function 1 completed");
//       resolve("Result from asyncFunc1");
//     }, 2000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Async Function 2 completed");
//       resolve("Result from asyncFunc2");
//     }, 2000);
//   });
// }

// function asyncFunc3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Async Function 3 completed");
//       resolve("Result from asyncFunc3");
//     }, 2000);
//   });
// }

// console.log("Starting async functions 1...");
// asyncFunc1()
//   .then((result1) => {
//     console.log(result1);
//     console.log("Starting async functions 2...");
//   })
//   .then(() => asyncFunc2())
//   .then((result2) => {
//     console.log(result2);
//     console.log("Starting async functions 3...");
//   })
//   .then(() => asyncFunc3())
//   .then((result3) => {
//     console.log(result3);
//     console.log("All async functions completed.");
//   })
//   .catch((error) => {
//     console.error("Error occurred:", error);
//   });


// example of promise chaining with data fetching
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Data fetched for ID:", dataId);
      resolve("Success");
    }, 3000);
  });
}

// promise chaining example
getData(1)
  .then((result) => {
 
    return getData(2);
  })
  .then((result) => {
    return getData(3);
  })
  .then((result) => {
    console.log(result);
  });
