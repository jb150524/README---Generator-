// TODO: Include packages needed for this application
    const fs = require('fs');
    const inquirer = require('inquirer');
    const util = require('util');

    const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: "title", 
        message: "Enter name of your project?", 
    },
    {
        type: 'input',
        name: "description", 
        message: "Describe your project?", 
    },
    {
        type: 'input',
        name: "contents", 
        message: "Create a table of contents for your project.", 
    },
    {
        type: 'input',
        name: "installation", 
        message: "Enter installation instructions.", 
    },
    {
        type: 'input',
        name: "usage", 
        message: "Enter usage information.", 
    },
    {
        type: 'list',
        name: "license",
        choices: [
            'Apache', 
            'MIT', 
            'Unlicense'], 
        message: "Choose a license for your project.", 
    },
    {
        type: 'input',
        name: "contribution", 
        message: "Enter contribution guidelines.", 
    },
    {
        type: 'input',
        name: "tests", 
        message: "Enter name test instruction.", 
    },
    {
        type: 'input',
        name: "github", 
        message: "Enter your Github username.", 
    },
    {
        type: 'input',
        name: "email", 
        message: "Enter your email.", 
    }
]);
};
    
const generateREADME = (resp) =>
`
# ${resp.title}

## Description
![Licence](https://img.shields.io/badge/license-${resp.license}-blueviolet.svg)
\n${resp.description}

## Table of Content
${resp.contents} \n

*[Title](#title)
*[Description](#description)
*[Contents](#contents)
*[Installation](#Installation)
*[Usage](#usage)
*[License](#license)
*[Contribution](#contribution)
*[Tests](#tests)

## Installation
${resp.installation}

## Usage
${resp.usage}

## License
${resp.license}

## Contribution
${resp.contribution}

## Tests
${resp.tests}
`;

promptUser()
.then((resp) => writerFile

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
