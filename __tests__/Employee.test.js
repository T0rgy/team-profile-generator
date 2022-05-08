const Employee = require('../lib/Employee');

test("creates employee object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test("Name constructor arguments", () => {
    const testV = "Jacob";
    const e = new Employee(testV);
    expect(e.name).toBe(testV);
});

test("Id constructor argument", () => {
    const testV = 100;
    const e = new Employee("Jacob", testV);
    expect(e.id).toBe(testV);
});

test("Email constructor argument", () => {
    const testV = "test@email.com";
    const e = new Employee("Jacob", 100, testV);
    expect(e.email).toBe(testV);
});;

