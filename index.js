// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const licenses = [
    {
        name: "No License",
        value: {
            name: "No License",
            shortName: "",
            link: "",
            badge: ""
        }
    },
    {
        name: "Apache 2.0 License",
        value: {
            name: "Apache 2.0 License",
            shortName: "Apache 2.0",
            link: "https://opensource.org/licenses/Apache-2.0",
            badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
        }
    },
    {
        name: "No License",
        value: {
            name: "No License",
            shortName: "",
            link: "",
            badge: ""
        }
    },
    {
        name: "No License",
        value: {
            name: "No License",
            shortName: "",
            link: "",
            badge: ""
        }
    }
]
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a description about the project?",
        name: "description"
    }
    ,
    {
        type: "input",
        message: "How do you Install?",
        name: "Install"
    }
    ,
    {
        type: "input",
        message: "What is this used for?",
        name: "Usage"
    }
    ,
    {
        type: "input",
        message: "How to contribute",
        name: "Contribution"
    }
    ,
    {
        type: "input",
        message: "Testing Testing",
        name: "Testing"
    }
    ,
    {
        type: "rawlist",
        message: "Pick a License.",
        name: "license",
        choices: licenses
    }
    ,
    {
        type: "input",
        message: "Username?",
        name: "githubUsername"
    }
    ,
    {
        type: "input",
        message: "Email?",
        name: "Email"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)  
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
      let READMEContent = generateMarkdown(answers)
      writeToFile("generatedREADME.md", READMEContent)
    })
}



// Function call to initialize app
init();



