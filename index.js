const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

const managerInput = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Please enter the manager's employee ID.",
            validate: empId => {
                if (empId) {
                    console.log ("Please enter the manager's employee ID!")
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number.",
            validate: officeNum => {
                if (officeNum) {
                    console.log ("Please enter the manager's office number!")
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
    .then(mInput => {
        const { name, employeeID, email, officeNumber } = mInput;
        const manager = new Manager (name, employeeID, email, officeNumber);

        teamMembers.push(manager);
        console.log(manager);
    })
    
};

const addEmployee = () => {
    console.log(`
    -------------------------------------
    Let's add some employees to the team!
    _____________________________________
    `);

    return inquirer.prompt ([
        {
           type: 'list',
           name: 'role',
           message: "Choose your employee's role",
           choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: "name",
            message: "What's the employee's name?",
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Please enter the employee's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's gitHub username.",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'confirmMoreEmployees',
            message: "Would you like to add more team members?",
            default: false,
        },

    ])
    .then(employeeInfo => {
        let { name, employeeId, email, role, github, school, confirmMoreEmployees } = employeeInfo;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer(name, employeeId, email, github);

            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern(name, employeeId, email, school);

            console.log(employee);
        }

        teamMembers.push(employee);

        if (confirmMoreEmployees) {
            return addEmployee(teamMembers);
        } else {
            return teamMembers;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team profile has successfully been create! To view look for the index.html file in /dist folder.")
        }
    })
};


managerInput()
    .then(addEmployee)
    .then(teamMembers => {
        return generateHTML(teamMembers);
    })
    .then(htmlPage => {
        return writeFile(htmlPage);
    })
    .catch(err => {
        console.log(err);
    });
