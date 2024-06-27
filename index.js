// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// where do i use inquirer?
// TODO: Create an array of questions for user input - is this the function for the prompts?
// do i need to make a variable with the structure of the readme and given params as the assigned value? 
// use template literals for the params in code
// or do i import generate mardon here and then use the answers from questions array to fill in the content...
// use require here


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
    message: 'Choose a license.',
    // choices have to be an array just like questions
    choices: [
      'Creative Commons',
      'MIT',
      'Open Source'
    ]
  }
]

// call inquirer, use the prompt method with questions as the param.
inquirer
.prompt(questions)
// then use the answers 
.then((answers) => {
  const markdownn = generateMarkdown(answers);
  console.log(markdown)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', )
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();