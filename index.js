const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const pageTemplate = require("./src/page-template");

const team = [];

// fn 2 menu function
// sends them to selected function
// creates a loop, exits by hitting done and send to HTML function
// add inquirer prompts menu function -> what do you want to do?

// prompts asking for info
const addRole = [
  {
    type: "list",
    name: "roleChoice",
    message: "What employee role would you like to add?",
    choices: ["Engineer", "Intern", "Manager", "Exit"],
  },
];

// fn 1 add manager
const managerQs = [
  {
    type: "input",
    name: "employeeName",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the manager's ID number?",
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];

// fn 3 add engineer
// add inquirer prompts

const engineerQs = [
  {
    type: "input",
    name: "employeeName",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the engineer's ID number?",
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is the engineer's email?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is the engineer's GitHub Username?",
  },
];

// fn 4 add intern
// add inquirer prompts

const internQs = [
  {
    type: "input",
    name: "employeeName",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the intern's ID number?",
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is the intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What school is the intern current enrolled in?",
  },
];

// fn 5 build html

function init() {
  inquirer.prompt(addRole).then((data) => {
    switch (data.roleChoice) {
      case "Manager":
        addManger();
        break;
      case "Intern":
        addIntern();
        break;
      case "Engineer":
        addEngineer();
        break;
      default:
        buildHTML();
    }
  });
}

function addEngineer() {
  inquirer.prompt(engineerQs).then((data) => {
    console.log(data);
    let engineer = new Engineer(
      data.employeeName,
      data.employeeId,
      data.employeeEmail,
      data.gitHub
    );
    team.push(engineer);
    init();
  });
}

function addIntern() {
  inquirer.prompt(internQs).then((data) => {
    console.log(data);
    let intern = new Intern(
      data.employeeName,
      data.employeeId,
      data.employeeEmail,
      data.school
    );
    team.push(intern);
    init();
  });
}

function addManager() {
  inquirer.prompt(managerQs).then((data) => {
    console.log(data);
    let manager = new Manager(
      data.employeeName,
      data.employeeId,
      data.employeeEmail,
      data.officeNumber
    );
    team.push(manager);
    init();
  });
}

function buildHTML() {
  fs.writeFileSync("./dist/team.html", pageTemplate(team), "utf-8");
  console.log(team);
}

init();
