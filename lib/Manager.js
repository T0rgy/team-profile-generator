// Defines and exports Manager Class
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, employeeId, email, officeNumber) {
        super(name, employeeId, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;