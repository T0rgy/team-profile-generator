const Engineer = require('../lib/Engineer');

test("GitHub with contructor", () => {
    const testV = "t0rgy";
    const e = new Engineer("Jacob", 100, "test@email.com", testV);
    expect(e.github).toBe(testV);
});

test("getRole() return /Engineer", () => {
    const testV = "Engineer";
    const e = new Engineer("Jacob", 100, "test@email.com", "t0rgy");
    expect(e.getRole()).toBe(testV);
});

test("GitHub username with getGitHub()", () => {
    const testV = "t0rgy";
    const e = new Engineer("Jacob", 100, "test@email.com", testV);
    expect(e.getGitHub()).toBe(testV);
});