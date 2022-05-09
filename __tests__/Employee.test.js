const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const e = new Employee('Jacob', 90, 'JCTORGE@gmail.com');

    expect(e.name).toEqual(expect.any(String));
    expect(e.employeeId).toEqual(expect.any(Number));
    expect(e.email).toEqual(expect.any(String));
});

test("Name constructor arguments", () => {
    const testV = "Jacob";
    const e = new Employee(testV);
    expect(e.name).toBe(testV);
});

test("Id constructor argument", () => {
    const testV = Number;
    const e = new Employee("Jacob", testV);
    expect(e.employeeId).toBe(testV);
});

test("Email constructor argument", () => {
    const testV = "test@email.com";
    const e = new Employee("Jacob", 100, testV);
    expect(e.email).toBe(testV);
});;

test("Role constructor argument", () => {
    const testV = "Employee";
    const e = new Employee("Jacob", 100, testV);
    expect(e.getRole()).toBe(testV);
});;

