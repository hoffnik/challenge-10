const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "12345";
    const employee = new Manager("Nik", 1, "Nik@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Nik", 1, "Nik@gmail.com", "hoffnik");
    expect(employee.getRole()).toBe(role);
  });