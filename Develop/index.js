// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    default: "kolatham",
    validate: function (answer) {
        if(answer.length < 1) {
            return console.log("Please enter a valid GitHub username in order to receive a badge.")
        }
        return true
    }
},

{
type: "input",
message:"What is the name of your GitHub Repo?",
name: "repo",
default: "GitHub-repo",
validate: function (answer) {
    if (answer.length < 1) {
        return console.log ("Please enter a valid GitHub repo in order to receive a badge.")
    }
    return true;
    }
},

{
    type: "input",
    message: "What is the title of your new project?",
    name: "title",
    default: "Project Title",
    validate: function (answer){
        if (answer.length < 1) {
            return console.log("Please enter a valid project title in order to receive a badge.")
        }
    }
},

{
    type: "list",
    message:"Choose a license for your project",
    choices: ["GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense"],
    name:"license"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log("Success! You have just generated your README.md file!")
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
