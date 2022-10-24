const request = require('request');
let search = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {
  if (error) {
    console.log(`ERROR: ${error.code}`);
    return;
  }
  if (body.length < 3) {
    console.log(`The ${search} breed not found!`);
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});