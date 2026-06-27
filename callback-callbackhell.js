function getData(dataId, callback) {
  setTimeout(function () {
    console.log("Data fetched for ID:", dataId);
    if (callback) {
      callback();
    }
  }, 2000);
}

// Example usage of getData with nested callbacks (callback hell)
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4, () => {
        getData(5);
      });
    });
  });
});
