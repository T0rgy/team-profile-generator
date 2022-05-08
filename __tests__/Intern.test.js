const Intern = require("../lib/Intern");

test("School via constructor", () => {
    const testV = "UW Madison";
    const e = new Intern("Jacob", 100, "test@email.com", testV);
    expect(e.school).toBe(testV);
});

test("getRole returns /intern", () => {
    const testV = "Intern";
    const e = new Intern("Jacob", 100, "test@email.com", "UW Madison");
    expect(e.getRole()).toBe(testV);
});

test("School via getSchool()", () => {
    const testV = "UW Madison";
    const e = new Intern("Jacob", 100, "test@email.com", testV);
    expect(e.getSchool()).toBe(testV);
});