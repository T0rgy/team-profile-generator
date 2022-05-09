// Define and export Employee Class
class Employee {
    constructor(name, employeeId, email) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.title = "Employee";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.employeeId;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.title;
    }
};

module.exports = Employee;