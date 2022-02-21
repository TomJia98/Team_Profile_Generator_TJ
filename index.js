//imports
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const HTML = require("./src/html-source");
const fs = require("fs")


//creating the sections that will be run
const managerSect = () => 
inquirer.prompt([
    {//asks the name of manager
        type: 'input',
        name: 'managersName',
        message: 'What is the name of your team manager?',
      },

      {//asks the managers ID, prompts "not a valid ID!" if userinput is not a number
        type: "input",
        name: "managersID",
        message: "What is your managers ID?",
        validate(answer) {
          IDRegex = /^[$]?\d[\d,]*$/
          if(!IDRegex.test(answer)) {
            return "Not a valid ID!"
          }
          return true
        }
    },

      {//asks for the managers email, wont send if the email isnt correct 
    type: 'input',
    message: 'What is your managers email address?',
    name: 'managersEmail',
    validate: function(email)
    {
       
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
    }
},

{//asks for the managers office number, will prompt "Not a valid office number!" if the user input isnt a number
  type: "input",
  name: "managersOfficeNumber",
  message: "What is your managers office number?",
  validate(answer) {
    IDRegex = /^[$]?\d[\d,]*$/
    if(!IDRegex.test(answer)) {
      return "Not a valid office number!"
    }
    return true
  }}
]);


const EngineerSect = () => 
inquirer
  .prompt([
    {//asks the user for the engineers name
        type: 'input',
        name: 'engineersName',
        message: 'What is the name of your engineer?',
      },

      {//asks the engineers ID, prompts "not a valid ID!" if user input is not a number
        type: "input",
        name: "engineersID",
        message: "What is your engineers ID?",
        validate(answer) {
          IDRegex = /^[$]?\d[\d,]*$/
          if(!IDRegex.test(answer)) {
            return "Not a valid ID!"
          }
          return true
        }
    },

      {//asks for the engineers email, wont send if the email isnt correct 
    type: 'input',
    message: 'What is your engineers email address?',
    name: 'engineersEmail',
    validate: function(email)
    {
        
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
    }
},

{//asks for the engineers github username
  type: "input",
  name: "engineersGithub",
  message: "What is your engineers Github username?",
 
  }
]);

const InternSect = () => 
inquirer
  .prompt([
    {//asks for the interns name
        type: 'input',
        name: 'internName',
        message: 'What is the name of your intern?',
      },

      {//asks the interns ID, prompts "not a valid ID!" if user input is not a number
        type: "input",
        name: "internsID",
        message: "What is your interns ID?",
        validate(answer) {
          IDRegex = /^[$]?\d[\d,]*$/
          if(!IDRegex.test(answer)) {
            return "Not a valid ID!"
          }
          return true
        }
    },

      {//asks for the nterns email, wont send if the email isnt correct 
    type: 'input',
    message: 'What is your interns email address?',
    name: 'internsEmail',
    validate: function(email)
    {
        
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
    }
},

{//asks for the interns school
  type: "input",
  name: "internsSchool",
  message: "What school does your intern go to?",
 
  }
]);


const menuSect = () =>  inquirer.prompt([
  {//asks the user for what they want to do next
      type: 'list',
      message: 'Would you like to add another employee?',
      name: 'menu',
      choices: ['New Engineer', 'New Intern', 'Finish Building Team'],
    },

]).then((data) => {
  if (data.menu == 'New Engineer'){//if the user selected "New Engineer", run this

    console.log("new engineer selected")

    EngineerSect().then((data2) => {//asks the engineer questions, then appends them to the HTML
      const EngineerObj = new Engineer(data2.engineersName, data2.engineersID, data2.engineersEmail, data2.engineersGithub)

      fs.appendFile(`./dist/index.html`, HTML.engineerSection(EngineerObj), (err) =>
       {
          if (err) {
            console.error("engineer add failed, " + err)
          }})})

        .then(menuSect)}//after the HTTML file has had the data added, re-run the menu 
        
        //_________________________________________________________________________

  else if (data.menu == 'New Intern'){//same as engineer, but for the intern

    console.log("new intern selected")

    InternSect().then((data3) => {
      const internObj = new Intern(data3.internName, data3.internsID, data3.internsEmail, data3.internsSchool)

      fs.appendFile(`./dist/index.html`, HTML.internSection(internObj), (err) =>
       {
          if (err) {
            console.error("intern add failed, " + err)
          }})})

          .then(menuSect)

//_________________________________________________________________________

  } else if (data.menu == 'Finish Building Team'){//if this is selected, finish building the HTML

    fs.appendFile(`./dist/index.html`, HTML.HTMLend(), (err) =>
    {
       if (err) {
         console.error("HTML finishing failed, " + err)
       }})
    console.log("Your HTML has been finished!")

  }
});
 

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your team?',
    }
  ])

  .then((data) => {//creates the basic outline for the HTML that the other sections will be added to later
    const projectName = data.name;

    fs.writeFile(`./dist/index.html`, HTML.HTMLstart(projectName), (err) =>
     {
        if (err) {
          console.error("project start failed," + err)
        }})})


.then(managerSect)

.then((data) => {//adds the manager section to the HTML, then goes to the menu section
    const ManagerObj = new Manager(data.managersName, data.managersID, data.managersEmail, data.managersOfficeNumber)

    fs.appendFile(`./dist/index.html`, HTML.managerSection(ManagerObj), (err) =>
     {
        if (err) {
          console.error("manager add failed, " + err)
        }
    })})
    
.then(menuSect)


