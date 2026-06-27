const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("Promise started");
//    resolve("Promise resolved");
    reject("Promise rejected");
    });
};

const promise = getPromise();
promise.then(() => {
  console.log("promise fullfilled");
});
promise.catch((error) => {
  console.log("promise rejected with error:", error);
});

// function getData(dataId, callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       console.log("Data fetched for ID:", dataId);
//       resolve("Success");
//       if (callback) {
//         callback();
//       }
//     }, 15000);
//   });
// }
