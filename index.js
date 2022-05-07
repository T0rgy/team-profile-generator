const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

const Employee = require('./lib/Employee');
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
            validate: employID => {
                if (employID) {
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
    .then(managerInput => {
        const { name, employID, email, officeNum } = managerInput;
        const manager = new Manager (name, employID, email, officeNum);

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
            
        }
    ])
}


managerInput();