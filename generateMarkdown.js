// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === ""){return ""}
  if(license === "Creative Commons"){
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === ""){return ""}
  if(license === "MIT"){return "https://www.mit.edu/~amini/LICENSE.md"}
  if(license === "Creative Commons"){return "https://creativecommons.org/publicdomain/zero/1.0/legalcode.en"}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
// this fx needs to return a string
if(license === ""){return ""}
return `## License
${renderLicenseBadge(license)} <br/>
Notice: This project is licensed with a ${license} license. More information pertaining to the given license is provided in the link below. <br/>
${renderLicenseLink(license)}

`
}

// TODO: Create a function to generate markdown for README
// after exporting this file, I can pass the data from the questions prompt into here 
function generateMarkdown(data) {
  return `
# Title - ${data.projectName}
${renderLicenseBadge(data.licenseType)}

## Description
${data.description}

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Contact](#contact)

## Installation
${data.installInstructions}

## Usage
${data.useGuide}

## Contributing
${data.contribution}

## Tests
${data.tests}

${renderLicenseSection(data.licenseType)}

## Questions
Github username: ${data.questions} <br/>
Github profile link: ${data.profLink} <br/>
Repo link: ${data.repoLink}

## Contact
Best mode of contact: ${data.contact} <br/>
Contact info: ${data.contactInfo} <br/>
[Back to top](#title)
`;
}
// returns a string
module.exports = generateMarkdown;
// to export multiple, wrap with curlies and then require each individual exported bit on the subsequent page - include curlies there too
//EARLY RETURN PRINCIPLE IS FUNDAMENTAL TO CLEAN CODE - tutor section
function handleFormSumbit (event){
  event.preventDefault();
  //CAPTURE THE DATA
  //validate the data
  if(thedataisvalid == false){
   console.error("invalid submission")
   elementwithIDError .textContent = error
   return;
  } 
    addToLocalStorage();
    fetch().then().then(data => {
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
      }
    })
  } 

