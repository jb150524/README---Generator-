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

    __TOC__

    ${installation&&installation.length?"Installation\n"+installation:""}

    ${usage&&usage.length?"Usage\n---\n"+usage:""}

    ${license&&license.length?"License\n---\n"+license.getText(license):""}
    
    ${contribution&&contribution.length?"Contribution\n---\n"+contribution:""}
    
    ${tests&&tests.length?"Tests\n---\n"+tests:""}

    ${ hasQuestionDetails?"Questions\n---\n":""}    
    ${ githubUsername&&githubUsername.length?"- What is your Github username?\n\t- It is:"+githubUsername+"\n":"" }    
    ${ githubProfileLink&&githubProfileLink.length?"\n- Where can I see more of your repositories?\n\t- Click here: ["+githubProfileLink+"]("+githubProfileLink+")\n":"" }
    ${ email&&email.length?"\n- Where can I reach you?\n\t- You can reach me with additional questions at <a a href='mailto:"+email+"'>'"+email+"</a>.\n":"" }`;    

    text = text.replace(/\n\n\n/gm, "\n");

    text = addTableOfContents(text, description, installation, usage, license, contribution, test, hasQuestionDetails);
        
    const filename = "Generate-README.md";
    fs.writeFileSync(filename, text);

    console.group("README Generator");
    console.log(`Written to ${filename}:\n${text}`);
    console.groupEnd();

}).catch(err => {
    console.log("Error: ", err);
});

function addTableOfContents(text, description, installation, usage, license, contribution, test, hasQuestionDetails) {
    let toc = "";

    if (description && description.length)
        toc += "- [Description](#description)\n";
    if (installation && installation.length)
        toc += "- [Installation](#installation)\n";
    if (usage && usage.length)
        toc += "- [Usage](#usage)\n";
    if (license && license.length)
        toc += "- [License](#licence)\n";
    if (contribution && contribution.length)
        toc += "- [Contribution](#contribution)\n";
    if (tests && tests.length)
        toc += "- [Tests](#tests)\n";
    if (hasQuestionDetails)
        toc += "- [Questions](#questions)\n";
            
    if (toc.length) toc = "Table of Contents\n---\n" + toc;
    text = text.replace(/__TOC__/, toc);

    return text;


    // Licence Options //

    let licenser = {

        getText: (license) => {
            switch (license) {
                case "apache2":
                    return "";
                    break;
                case "bsd2":
                    return "";
                    break;
                case "bsd3":
                    return "";
                    break;

                    // --

                case "cc1":
                    return "";
                    break;
