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
        message: "What is the employee's name?",
        name: "employeeName",
      },
      {
        type: "input",
        message: "What is the employee's ID?",
        name: "employeeId",
      },
      {
        type: "input",
        message: "What is the employee's email",
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
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the engineer's ID?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What is the engineer's email",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is the engineer's github username",
        name: "username",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.username
      );
      team.push(employee);
    });
}
function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "interName",
      },
      {
        type: "input",
        message: "What is the intern's ID?",
        name: "interId",
      },
      {
        type: "input",
        message: "What is the intern's email",
        name: "interEmail",
      },
      {
        type: "input",
        message: "Where does the intern go to school",
        name: "school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.school
      );
      team.push(employee);
    });
}
function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the manager's ID?",
        name: "managerId",
      },
      {
        type: "input",
        message: "What is the manager's email",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the manager's office number ",
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
