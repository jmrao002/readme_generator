// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  const licenseType = data.license;
  let licenseBadge = "";
  if (licenseType === "Apache") {
    licenseBadge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  if (licenseType === "GNU") {
    licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  if (licenseType === "ISC") {
    licenseBadge = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  }
  if (licenseType === "MIT") {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (licenseType === "Mozilla") {
    licenseBadge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  }
  return licenseBadge;
}

function renderLicenseLink(data) {
  const licenseType = data.license;
  let LicenseLink = "";
  if (licenseType === "Apache") {
    LicenseLink = `https://opensource.org/licenses/Apache-2.0`;
  }
  if (licenseType === "GNU") {
    LicenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
  }
  if (licenseType === "ISC") {
    LicenseLink = `https://opensource.org/licenses/ISC`;
  }
  if (licenseType === "MIT") {
    LicenseLink = `https://opensource.org/licenses/MIT`;
  }
  if (licenseType === "Mozilla") {
    LicenseLink = `https://opensource.org/licenses/MPL-2.0`;
  }
  return LicenseLink;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

${renderLicenseBadge(data)}

## Description
🔍 ${data.description}

## Table of Contents:
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributors](#contributors)
6. [Tests](#tests)
7. [Issues](#issues)
8. [GitHub](#username)
9. [Email](#email)

## Installation
💾 ${data.installation}

## Usage
💻 ${data.usage}

## License
📜 This Application is licensed under ${data.license}<br>
Learn more about ${data.license} here: ${renderLicenseLink(data)}

## Contributing
👪 ${data.contributors}

## Tests
🧪 ${data.tests}

## Questions
😺 Find me on GitHub: https://github.com/${data.username}<br>
📧 Or send me an email at ${data.email}
`;
}
module.exports = generateMarkdown;
