const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
let team = [];
//build proms for employee
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
      team.push(engineer);
    })
    .then(() => whatType());
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
      team.push(intern);
    })
    .then(() => whatType());
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
    })
    .then(() => whatType());
}
function whatType() {
  inquirer
    .prompt({
      type: "input",
      message: "What type of employee would you like to enter?",
      name: "employeeRole",
      choices: ["engineer", "intern", "manager", "Done"],
    })
    .then((answers) => {
      if (answers.employeeRole === "engineer") {
        createEngineer();
      } else if (answers.employeeRole === "intern") {
        createIntern();
      } else if (answers.employeeRole === "manager") {
        createManager();
      } else if (answers.employeeRole === "Done") {
      }
      console.log(team);
    });
}
whatType();

//add info to new employee
//put into templet
