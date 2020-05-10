// function that generates and returns markdown
function generateMarkdown(data) {
  console.log(data);
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

Run the following commands for dependencies installations:

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${data.license}

## Badges

Check out the badges hosted by [shields.io](https://shields.io/)

Example: ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

${data.badges}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Any questions please contact [GitHub Profile](https://github.com/${data.username}) or by email at [${data.email}](${data.email})

![Profile Image](${data.userAvatar}&s=75)
`;
}

module.exports = generateMarkdown;
