const Employee = require("../lib/employee");
const Intern = require("../lib/intern");
test("Test to make sure we can add a school to a class.", () => {
  const employee = new Intern("John", 1234, "test@test.com", "slcc");
  expect(employee.school).toBe("slcc");
});
test("Test to make sure getschool ruturns the school.", () => {
  const employee = new Intern("John", 1234, "test@test.com", "slcc");
  expect(employee.getSchool()).toBe("slcc");
});
test("Test to make sure getrole ruturns role.", () => {
  const employee = new Intern("John", 1234, "test@test.com", "slcc");
  expect(employee.getrole()).toBe("Intern");
});
