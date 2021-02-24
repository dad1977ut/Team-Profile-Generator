const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
test("Test to make sure we can add an office number to a class.", () => {
  const employee = new Manager("John", 1234, "test@test.com", 101);
  expect(employee.officeNumber).toBe(101);
});
test("Test to make sure getrole return role.", () => {
  const employee = new Manager("John", 1234, "test@test.com", 101);
  expect(employee.getrole()).toBe("Manager");
});
