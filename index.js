//imports
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const HTML = require("./src/html-source");
const fs = require("fs")

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your team?',
    }
  ])
  .then((data) => {
    const projectName = data.name;

    fs.writeFile(`index.html`, HTML.HTMLstart(projectName), (err) =>
    err => {
        if (err) {
          console.error("project start failed," + err)
        }})})
.then(() =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'managersName',
            message: 'What is the name of your team manager?',
          },
          {
            type: 'input',
            name: 'managersID',
            message: 'What is your managers ID?',
          },
          {
            type: 'input',
            name: 'managersEmail',
            message: 'What is your managers Email?',
          },
          {
            type: 'input',
            name: 'managersOfficeNumber',
            message: 'What is your managers Office Number?',
          }
    ]))
.then((data) => {
    const ManagerObj = new Manager(data.managersName, data.managersID, data.managersEmail, data.managersOfficeNumber)

    fs.appendFile(`index.html`, HTML.managerSection(ManagerObj), (err) =>
    err => {
        if (err) {
          console.error("manager add failed, " + err)
        }
    })})
    .then(() => { inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add another employee?',
            name: 'menu',
            choices: ['New Engineer', 'New Intern', 'Finish Building Team'],
          },
    ])

    })


