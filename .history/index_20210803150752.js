const fs = require("fs");
const inquirer = require("inquirer")

inquirer.prompt([

    // Basic questions //
    {
        name: "title", 
        message: "Name of your repository?", 
    },
    {
        name: "githubUsername", 
        message: "Your Github username?", 
    },
    {
        name: "githubProfileLink", 
        message: "Link of your Github profile?", 
    },
    {
        name: "email", 
        message: "Your email to be reached?", 
    },

    // Sections // 
    { 
        name: "description",
        message: "Enter a description if any:"
    },
    { 
        name: "installation",
        message: "Enter installation instructions if any:"
    },
    { 
        name: "usage",
        message: "Enter usage information if any:"
    },
    {        
        name: "license",
        choices: [
            new inquirer.Separator(),
            "apache2", "bsd2", "bsd3",
            new inquirer.Separator(),
            "cc1", "c", "bsd3",
    
])