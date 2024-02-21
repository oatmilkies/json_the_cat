const { fetchBreedDescription } = require('./breedFetcher');

//Get input from command line
const breed = process.argv.slice(2);
//Capitlize first letter and change rest to lower case
const breedName = breed[0].charAt(0).toUpperCase() + breed[0].slice(1).toLowerCase();

//Display results of the  fetch breed request
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (desc === undefined) {
    console.log(`${breedName} not found`);
  } else
    console.log(desc);
});