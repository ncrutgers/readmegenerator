const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown.js");
const axios = require("axios");

// Store question objects in array
const questions = [
    {
        type: "input", 
        name: "username",
        message: "Enter your GitHub Username. Your GitHub public email and profile image will be posted on your README doc."
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation commands if any?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the instructions and examples for use?"
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators."
    },
    {
        type: "input",
        name: "license",
        message: "What kind of license should the project have?"
    },
    {
        type: "input",
        name: "badges",
        message: "Include badges script here?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contributing guidelines for other developers?"
    },
    {
        type: "input",
        name: "tests",
        message: "Commands to run to run tests if any."
    }

];
// writes to file with provided data
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err){
            throw err;
        }
        console.log("Successfully wrote data to file.")
    });
}

function init() {

    // prompt user with questions array
    inquirer
        .prompt(questions)
        .then(function(response){
            //make a query to the GitHub API with username param; retrieves GitHub email and profile image 
            const gitUrl = api.getUser(response.username);
            
            axios.get(gitUrl)
                .then(function(res) {
            
                const userInfo =  {
                username: response.username,
                userEmail: res.data.email,
                userAvatar: res.data.avatar_url,
                title: response.title,
                description: response.description,
                installation: response.installation,
                usage: response.usage,
                credits: response.credits,
                license: response.license,
                badges: response.badges,
                contributing: response.contributing,
                tests: response.tests                
                
                };
                //console.log(userInfo);
                var info = generateMarkdown(userInfo);
                //console.log(info);
                writeToFile("README.md", info);
                
            });
    });
      
}

init();
