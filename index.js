// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// Array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the project title?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Write a brief description of your project: ",
    name: "description",
  },
  {
    type: "input",
    message: "How will this project be used?",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose the appropriate license for this project: ",
    name: "license",
    choices: ["Apache", "GNU", "ISC", "MIT", "Mozilla", "Open"],
  },
  {
    type: "input",
    message: "Who are the project contributors?",
    name: "contributors",
  },
  {
    type: "input",
    message: "Is there a test included?",
    name: "tests",
  },
  {
    type: "input",
    message: "What do I do if I have an issue?",
    name: "issues",
  },
  {
    type: "input",
    message: "Please enter your GitHub username: ",
    name: "username",
  },
  {
    type: "input",
    message: "Please enter your email",
    name: "email",
  },
];

// Function to generate README
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize application
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log("Generating Markdown...");
    writeToFile("README.md", generateMarkdown({ ...data }));
    console.log("✔️  Successfully wrote to README.md");
  });
}

// Function call to initialize
init();
