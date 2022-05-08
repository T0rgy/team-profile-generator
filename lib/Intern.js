// Defines and exports Intern Class.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, employeeId, email, school) {
        super(name, employeeId, email);
        this.school = school;
        this.title = "Intern";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.title;
    }
}

module.exports = Intern;