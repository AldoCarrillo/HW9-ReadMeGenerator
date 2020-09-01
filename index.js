var inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);



 function readmeReturn(){



    return ' # Title    ## Description     ## Table of content';




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
        
      
    },
    {
        name: "test",
        message: "Test?"
        
      
    }
  ])
  .then(function(response) {

    const newREDME = ''
    
    

    const htmlname = "<h1>" + response.name + "</h1>";
    const htmllocation = "<h2>" + response.location + "</h2>";
    const htmlprofile = "<h2>" + response.linkedin + "</h2>";



    fs.appendFile("index.html",htmlname + "\n"+ htmllocation +"\n" +htmlprofile, function(){
        console.log("completed");

        
    });

    
  });