const inquirer = require("inquirer");

inquirer.prompt([
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
    choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
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
]);
