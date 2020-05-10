# Good README Generator

## Description

Create a command-line application that dynamically generates a README.md from a user's input. 

The user will be prompted for their GitHub username, which will be used to make a call to the GitHub API to retrieve their email and profile image. They will then be prompted with questions about their project.

* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* At least one badge
* Contributing
* Tests
* Questions
  * User GitHub profile picture
  * User GitHub email

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)

## Installation

Run following commands for dependencies installations:

```sh
npm install
```

## Usage

Note: user's GitHub public email and profile image will be posted on their README.md document. Changes to GitHub profile email settings must be made public and selected prior to running the application. 

Run the following commands for execution of application:
 
```sh
node index.js
```

Questions will be prompted to user in command line and generate a README.md file. User may make changes as necessary.

![GIF file](./assets/appvideo.gif)

README file will look as follows:

<embed src="./assets/generatedREADME/README.pdf" width="500" height="375" 
 type="application/pdf">

## Questions

Any questions please contact [GitHub Profile](https://github.com/ncrutgers) or by email at [undefined](undefined)

![Profile Image](https://avatars0.githubusercontent.com/u/61257976?v=4)
