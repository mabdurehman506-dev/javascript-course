function getData(dataId, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Data fetched for ID:", dataId);
      resolve("Success");
      if (callback) {
        callback();
      }
    }, 15000);
  });
}
