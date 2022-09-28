const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "hoffnik";
    const employee = new Engineer("Nik", 1, "nik@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Nik", 1, "nik@gmail.com", "hoffnik");
    expect(employee.getRole()).toBe(role);
  });