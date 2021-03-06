// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt (
        [
            {
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
        message:"What is your email?",
        name: "email",
        default: "kolatham96@gmail.com",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log ("Please enter a valid email in order to receive a badge.")
            }
            return true;
            }
        },
        
        {
            type: "input",
            message: "What is the title of your new project?",
            name: "title",
            default: "Project-Title",
            validate: function (answer){
                console.log(answer)
                console.log(answer.length)
                if (answer.length < 1) {
                    return console.log("Please enter a valid project title in order to receive a badge.")
                }
                return true;
            }
        },

        {
            type: "input",
            message: "What is the description for your new project?",
            name: "description",
            default: "This project is a coding assignment set by my boot camp.",
            validate: function (answer){
                console.log(answer)
                console.log(answer.length)
                if (answer.length < 1) {
                    return console.log("Please enter a valid project description in order to receive a badge.")
                }
                return true;
            }
        },

        {
            type: "input",
            message: "What is the usage of your new project?",
            name: "usage",
            default: "Usage",
            validate: function (answer){
                console.log(answer)
                console.log(answer.length)
                if (answer.length < 1) {
                    return console.log("Please enter a valid project usage in order to receive a badge.")
                }
                return true;
            }
        },

        {
            type: "input",
            message: "What are the contribution guidelines for your new project?",
            name: "contributing",
            default: "Olivia Latham, kolatham96@gmail.com",
            validate: function (answer){
                console.log(answer)
                console.log(answer.length)
                if (answer.length < 1) {
                    return console.log("Please enter a valid project contributing in order to receive a badge.")
                }
                return true;
            }
        },

        {
            type: "input",
            message: "What is the title of your new project?",
            name: "title",
            default: "Project-Title",
            validate: function (answer){
                console.log(answer)
                console.log(answer.length)
                if (answer.length < 1) {
                    return console.log("Please enter a valid project title in order to receive a badge.")
                }
                return true;
            }
        },

        {
            type: "input",
            message: "What tests did you run for your new project?",
            name: "test",
            default: "Test",
            validate: function (answer){
                console.log(answer)
                console.log(answer.length)
                if (answer.length < 1) {
                    return console.log("Please enter a valid project test in order to receive a badge.")
                }
                return true;
            }
        },

        {
            type: "input",
            message: "How do you install your new project?",
            name: "installation",
            default: "Git clone repository, save it locally, run node index.js in terminal",
            validate: function (answer){
                console.log(answer)
                console.log(answer.length)
                if (answer.length < 1) {
                    return console.log("Please enter a valid project installation in order to receive a badge.")
                }
                return true;
            }
        },
        
        {
            type: "list",
            name:"license",
            message:"Choose a license for your project",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'none']
        },
        
        ]
    )
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log("Success! You have just generated your README.md file!")
    })
}
const writeFileAsync = util.promisify(writeToFile)
// TODO: Create a function to initialize app
async function init() {
    try {
       const userResponses = await questions();
       console.log("Your responses:", userResponses);
       console.log("Thank you for your responses! Fetching your GitHub data.....") 

       console.log("Generating your README...")
       const markdown = generateMarkdown(userResponses);
       console.log(markdown);
       await writeFileAsync("ExampleREADME.md", markdown);
    } catch(error) {
        console.log(error)
    }
};

// Function call to initialize app
init();
