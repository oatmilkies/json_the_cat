//Use node 'request' package to make HTTP requests
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //Return error message
    if (error) {
      callback(error, undefined);
    } else {
      const data = JSON.parse(body); //deserialization - convert string to object
      //Undefined if breed is not found
      if (data[0] === undefined) {
        callback(error, undefined);
      } else
      //Success - return breed description
        callback(error, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };