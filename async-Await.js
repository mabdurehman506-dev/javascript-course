// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather is good");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeather() {
//    await api();
//    await api();
//    await api();
//    await api();
// }
// getWeather();

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Data fetched for ID:", dataId);
      resolve("Success");
    }, 3000);
  });
}

// async function getMultipleData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }
// getMultipleData();

// function with iife
(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
})();
