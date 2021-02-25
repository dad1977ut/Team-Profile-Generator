const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
let team = [];
//build proms for employee
function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the manager ID?",
        name: "managerId",
      },
      {
        type: "input",
        message: "What is the manager email",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the manager office number ",
        name: "officeNumber",
      },
    ])
    .then((ansers) => {
      const manager = new Manager(
        ansers.managerName,
        ansers.managerId,
        ansers.managerEmail,
        ansers.officeNumber
      );
      team.push(manager);
    });
}

//add info to new employee
//put into templet
