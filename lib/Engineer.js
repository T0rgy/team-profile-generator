// class to define and export Engineer Class
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employeeId, email, github) {
        super(name, employeeId, email);
        this.github = github;
        this.title = "Engineer";
    }

    getGitHub() {
        return this.github;
    }

    getRole () {
        return this.title;
    }
};

module.exports = Engineer;