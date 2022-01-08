// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch (license) {
case "MIT License":
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
case "GNU AGPLv3":
  return ;
case "Mozilla Public License 2.0":
  return;


}

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none"){
  return ""}
  else{
    return `* [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none"){
    return ""}
    else{
      return `## License
      This application uses ${license}`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseLink(data.license)}
## Installation
## Usage
## Contributing
## Tests
## Questions
Please reach out to me at ${data.email} if you have any questions. [${data.username}](https://github.com/${data.username})
${renderLicenseSection(data.license)}

`
}

module.exports = generateMarkdown;
