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
        message: "Enter your GitHub Username"
    },
    // {
    //     type: "input",
    //     name: "title",
    //     message: "What is your project title?"
    // },
    // {
    //     type: "input",
    //     name: "description",
    //     message: "What is the description?"
    // },
    // {
    //     type: "input",
    //     name: "contents",
    //     message: "What is the table of contents?"
    // },
    // {
    //     type: "input",
    //     name: "installation",
    //     message: "What are the installation details?"
    // },

    // {
    //     type: "input",
    //     name: "usage",
    //     message: "What is the usage?"
    // },
    // {
    //     type: "input",
    //     name: "license",
    //     message: "What is the license?"
    // },
    // {
    //     type: "input",
    //     name: "badge",
    //     message: "Include a badge."
    // },
    // {
    //     type: "input",
    //     name: "contributing",
    //     message: "What are the contributing factors?"
    // },
    // {
    //     type: "input",
    //     name: "tests",
    //     message: "Did you write any tests?"
    // },
    // {
    //     type: "input",
    //     name: "questions",
    //     message: "Questions"
    // }

];

function writeToFile(fileName, data) {

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
                userEmail: res.data.email,
                userAvatar: res.data.avatar_url
                };
                console.log(userInfo);

            });
    });
      
}

init();
