const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test("Can set office number via constructor argument", () => {
    const testV = 100;
    const e = new Manager("Foo", 1, "test@email.com", testV);
    expect(e.officeNumber).toBe(testV);
  });

  test("getRole() returns Manager", () => {
    const testV = "Manager";
    const e = new Manager("Jacob", 100, "test@email.com", testV);
    expect(e.getRole()).toBe(testV);
  });

  test("Can set office number via constructor argument", () => {
    const testV = 100;
    const e = new Manager("Foo", 1, "test@email.com", testV);
    expect(e.officeNumber).toBe(testV);
  });