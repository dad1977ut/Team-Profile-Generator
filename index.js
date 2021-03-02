const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const { generateKeyPair } = require("crypto");
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
        name: "internName",
      },
      {
        type: "input",
        message: "What is the intern's ID?",
        name: "internId",
      },
      {
        type: "input",
        message: "What is the intern's email",
        name: "internEmail",
      },
      {
        type: "input",
        message: "Where does the intern go to school",
        name: "school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
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
const generateTeam = () => {
  let html = "";
  for (let index = 0; index < team.length; index++) {
    const person = team[index];
    html += `<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${person.name}<br>
    ${person.getrole()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">id: ${person.id}</li>
      <li class="list-group-item">email: <a href="mailto:${person.email}">${
      person.email
    }</a></li>
      <li class="list-group-item">office number: ${person.officeNumber}</li>
    </ul>
  </div>`;
    return html;
  }
};
const generatePage = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Team</title>
      <!-- Required meta tags -->
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
  
      <!-- Bootstrap CSS -->
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </head>
    <body>
    <h1 class="display-2 text-center bg-light">Team</h1>
    ${generateTeam()}
      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
};
function whatType() {
  inquirer
    .prompt({
      type: "input",
      message: "What type of employee would you like to enter?",
      name: "employeeRole",
      choices: ["engineer", "intern", "manager", "done"],
    })
    .then((answers) => {
      if (answers.employeeRole === "engineer") {
        createEngineer();
      } else if (answers.employeeRole === "intern") {
        createIntern();
      } else if (answers.employeeRole === "manager") {
        createManager();
      } else if (answers.employeeRole === "done") {
        fs.writeFileSync("index.html", generatePage());
      }
      console.log(team);
    });
}
whatType();

//add info to new employee
//put into templet
