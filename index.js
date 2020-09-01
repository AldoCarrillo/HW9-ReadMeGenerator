var inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


const writeFileAsync = util.promisify(fs.writeFile);



 function readmeOutput(answers){

    const title = answers.title;
    const description = answers.description;
    const installation = answers.installation;
    const usage = answers.usage;
    const credits = answers.credits;
    const license = answers.license;


    return `
    
    # Title
    ${title}

    ## Description
    ${description}

    ## Table of content

        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [License](#license)


    ## Installation
    ${installation}



    ## Usage 
    ${usage}



    ## Credits
    ${credits}


    ## License
    ${license}
    `;




}



inquirer
  .prompt([
    {
        name: "title",
        message: "Title of the README?"
        
    },
    {
        name: "description",
        message: "Enter Description of the README"
        
    },
    {
        name: "installation",
        message: "Installation Instructions?"
        
      
    },
    {
        name: "usage",
        message: "Usage Information?"
        
      
    },{
        name: "credits",
        message: "credits?"
        
      
    },
    {
        name: "license",
        message: "license?"
        
      
    }
  ])
  .then(function(response) {
    return readmeOutput(response);
       
  })
  .then(function(readme){
    return writeFileAsync('./ReadMEOutput.md', readme);
});