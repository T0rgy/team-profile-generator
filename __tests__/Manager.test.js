const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

  test("getRole() returns Manager", () => {
    const testV = "Manager";
    const e = new Manager("Jacob", 100, "test@email.com", testV);
    expect(e.getRole()).toBe(testV);
  });

  test("Set office number via constructor argument", () => {
    const testV = Number;
    const e = new Manager("Jacob", 100, "test@email.com", testV);
    expect(e.officeNumber).toBe(testV);
  });

  test("getId() returns Manager's id", () => {
    const testV = Number;
    const e = new Manager("Jacob", testV, "test@email.com", 404);
    expect(e.getId()).toBe(testV);
  });