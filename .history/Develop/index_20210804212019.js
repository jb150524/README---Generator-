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
        message: "Create a table of contents for your project", 
    },
    {
        type: 'input',
        name: "installation", 
        message: "Enter installation instructions.", 
    },
    {
        type: 'input',
        name: "usage", 
        message: "Enter usage information", 
    },
    {
        type: 'list',
        name: "license", 
        message: "Choose a license for your ", 
    },
    {
        type: 'input',
        name: "title", 
        message: "Enter name of your project?", 
    },
    {
        type: 'input',
        name: "title", 
        message: "Enter name of your project?", 
    },


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
