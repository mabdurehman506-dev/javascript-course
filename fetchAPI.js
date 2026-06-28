let URL = "https://dogapi.dog/api-docs/v2/swagger.json";

let getData = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
};

getData();