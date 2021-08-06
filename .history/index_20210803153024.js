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
            "cc1", "cc4-international", "cc4-sharealike",
            new inquirer.Separator(),
            "EPL1", "GNU GPLv2", "GNU GPLv3",
            new inquirer.Separator(),
            "MIT", "Unlicense", 
        ],
        type: 'list'
    },
    {
        name: "contribution",
        message: "Enter contribution guidelines if any:"
    },
    {
        name: "test",
        message: "Enter test instruction if any:"
    },
]).then(answers => {

    let {
        title,
        githubUsername,
        githubProfileLink,
        email,

        description,
        installation,
        usage,
        license,
        contribution,
        test,

    } = answers;

    let hasQuestionDetails = (githubUsername || githubProfileLink || email) && (githubUsername.length + githubProfileLink.length + email.length);

    let text = `${ tittle&&title.length?tittle + "\n====\n":"" }
    ${license&&license.length?license.getBadges(license)+"\n":""}
    ${description&&description.length?"Description\n---\n"+description:""}

    // Table of Contents //

    ${installation&&installation.length?"Installation\n"+installation:""}

    ${usage&&usage.length?"Usage\n---\n"+usage:""}

    ${license&&license.length?"License\n---\n"+license.getText(license):""}
    
    ${contribution&&contribution.length?"Contribution\n---\n"+contribution:""}
    
    ${test&&test.length?"Test\n---\+usage:""}
