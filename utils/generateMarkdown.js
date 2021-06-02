// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = "";
  if (licenseType === "Apache") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  if (licenseType === "GNU") {
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  if (licenseType === "ISC") {
    licenseString = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  }
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (licenseType === "Mozilla") {
    licenseString = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  }
  return licenseString;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(data) {
  const licenseType = data.license[0];
  let licenseString = "";
  if (licenseType === "Apache") {
    licenseString = `https://opensource.org/licenses/Apache-2.0`;
  }
  if (licenseType === "GNU") {
    licenseString = `https://www.gnu.org/licenses/gpl-3.0`;
  }
  if (licenseType === "ISC") {
    licenseString = `https://opensource.org/licenses/ISC`;
  }
  if (licenseType === "MIT") {
    licenseString = `https://opensource.org/licenses/MIT`;
  }
  if (licenseType === "Mozilla") {
    licenseString = `https://opensource.org/licenses/MPL-2.0`;
  }
  return licenseString;
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Table of Content:
1. [Description](#description)
2. [Usage](#usage)
3. [License](#license)
4. [Contributors](#contributors)
5. [Tests](#tests)
6. [Issues](#issues)
7. [GitHub](#username)
8. [Email](#email)

## Description
${data.description}

## Usage
${data.usage}

## License
${renderLicenseBadge(data)}
${renderLicenseLink(data)}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Issues
${data.issues}

## GitHub
${data.github}

## Email
${data.email}
`;
}
module.exports = generateMarkdown;
