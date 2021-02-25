const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
let team = [];
//build proms for employee
function createEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee name?",
        name: "employeeName",
      },
      {
        type: "input",
        message: "What is the employee ID?",
        name: "employeeId",
      },
      {
        type: "input",
        message: "What is the employee email",
        name: "employeeEmail",
      },
    ])
    .then((answers) => {
      const employee = new Employee(
        answers.employeeName,
        answers.employeeId,
        answers.employeeEmail
      );
      team.push(employee);
    });
}
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
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.officeNumber
      );
      team.push(manager);
    });
}

//add info to new employee
//put into templet
