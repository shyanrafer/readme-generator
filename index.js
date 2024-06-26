// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');

// where do i use inquirer?
// TODO: Create an array of questions for user input - is this the function for the prompts?
const questions = [
  {
    name: 'projectName',
    message: 'What is the title of your project?'
  },
  {
    name: 'description',
    message: 'Write a brief description of your project.'
  },
  {
    name: 'installInstructions',
    message: 'How does one install your program?'
  },
  {
    name: 'useGuide',
    message: 'What is this project used for?'
  },
  {
    name: 'contribution',
    message: 'How does one contribute to this project?'
  },
  {
    name: 'tests',
    message: 'Include test instructions for your project.'
  },
  {
    name: 'licenseType',
    type: 'checkbox',
    message: 'Choose a license.'
  }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // will likely need to import generateMarkdown here
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
