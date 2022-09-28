const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "UCSB";
    const employee = new Intern("Nik", 1, "Nik@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Nik", 1, "Nik@gmail.com", "hoffnik");
    expect(employee.getRole()).toBe(role);
  });