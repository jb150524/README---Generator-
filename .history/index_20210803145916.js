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
        name: "", 
        message: "Name of your repository?", 
    },
    {
        name: "title", 
        message: "Name of your repository?", 
    },
])