//Use node 'request' package to make HTTP requests
const request = require('request');

//Get input from command line
const breed = process.argv.slice(2);
//Capitlize first letter and change rest to lower case
const formattedBreed = breed[0].charAt(0).toUpperCase() + breed[0].slice(1).toLowerCase();

request(`https://api.thecatap.com/v1/breeds/search?q=${formattedBreed}`, (error, response, body) => {
  //If there's an error, print error message
  if (error) {
    console.log('Error:', error);
  } else {
    const data = JSON.parse(body); //deserialization - convert string to object
    if (data[0] === undefined) {
      //Print error if breed not found
      console.log(`Breed ${formattedBreed} not found`);
    } else
      //Print the breed description
      console.log(data[0].description);
  }
});