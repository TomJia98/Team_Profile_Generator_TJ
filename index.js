//imports
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const HTML = require("./src/html-source");
const fs = require("fs")



const managerSect = () => 
inquirer.prompt([
    {
        type: 'input',
        name: 'managersName',
        message: 'What is the name of your team manager?',
      },
      {
        type: "input",
        name: "managersID",
        message: "What is your managers ID?",
        validate(answer) {
          salaryRegex = /^[$]?\d[\d,]*$/
          if(!salaryRegex.test(answer)) {
            return "Not a valid ID!"
          }
          return true
        }
    },
      {
    type: 'input',
    message: 'What is your managers email address?',
    name: 'managersEmail',
    validate: function(email)
    {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
    }
},
{
  type: "input",
  name: "managersOfficeNumber",
  message: "What is your managers office number?",
  validate(answer) {
    salaryRegex = /^[$]?\d[\d,]*$/
    if(!salaryRegex.test(answer)) {
      return "Not a valid office number!"
    }
    return true
  }}
]);


const EngineerSect = () => 
inquirer
  .prompt([
    {
        type: 'input',
        name: 'engineersName',
        message: 'What is the name of your engineer?',
      },
      {
        type: "input",
        name: "engineersID",
        message: "What is your engineers ID?",
        validate(answer) {
          salaryRegex = /^[$]?\d[\d,]*$/
          if(!salaryRegex.test(answer)) {
            return "Not a valid ID!"
          }
          return true
        }
    },
      {
    type: 'input',
    message: 'What is your engineers email address?',
    name: 'engineersEmail',
    validate: function(email)
    {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
    }
},
{
  type: "input",
  name: "engineersGithub",
  message: "What is your engineers Github username?",
 
  }
]);





const InternSect = () => 
inquirer
  .prompt([
    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of your intern?',
      },
      {
        type: "input",
        name: "internsID",
        message: "What is your interns ID?",
        validate(answer) {
          salaryRegex = /^[$]?\d[\d,]*$/
          if(!salaryRegex.test(answer)) {
            return "Not a valid ID!"
          }
          return true
        }
    },
      {
    type: 'input',
    message: 'What is your interns email address?',
    name: 'internsEmail',
    validate: function(email)
    {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
    }
},
{
  type: "input",
  name: "internsSchool",
  message: "What school does your intern go to?",
 
  }
]);





const menuSect = () =>  inquirer.prompt([
  {
      type: 'list',
      message: 'Would you like to add another employee?',
      name: 'menu',
      choices: ['New Engineer', 'New Intern', 'Finish Building Team'],
    },
]).then((data) => {
  if (data.menu == 'New Engineer'){
    console.log("new engineer selected")
    EngineerSect().then((data2) => {
      const EngineerObj = new Engineer(data2.engineersName, data2.engineersID, data2.engineersEmail, data2.engineersGithub)

      fs.appendFile(`./dist/index.html`, HTML.engineerSection(EngineerObj), (err) =>
       {
          if (err) {
            console.error("engineer add failed, " + err)
          }})})
        .then(menuSect)}        
  else if (data.menu == 'New Intern'){
    console.log("new intern selected")
    InternSect().then((data3) => {
      const internObj = new Intern(data3.internName, data3.internsID, data3.internsEmail, data3.internsSchool)

      fs.appendFile(`./dist/index.html`, HTML.internSection(internObj), (err) =>
       {
          if (err) {
            console.error("intern add failed, " + err)
          }})})
          .then(menuSect)


  } else if (data.menu == 'Finish Building Team'){
    fs.appendFile(`./dist/index.html`, HTML.HTMLend(), (err) =>
    {
       if (err) {
         console.error("HTML finishing failed, " + err)
       }})
    console.log("Your HTML has been finished!")

  }
})
;


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

    fs.writeFile(`./dist/index.html`, HTML.HTMLstart(projectName), (err) =>
     {
        if (err) {
          console.error("project start failed," + err)
        }})})


        
.then(managerSect)

.then((data) => {
    const ManagerObj = new Manager(data.managersName, data.managersID, data.managersEmail, data.managersOfficeNumber)

    fs.appendFile(`./dist/index.html`, HTML.managerSection(ManagerObj), (err) =>
     {
        if (err) {
          console.error("manager add failed, " + err)
        }
    })})
    
    .then(menuSect)


