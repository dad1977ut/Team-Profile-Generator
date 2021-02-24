const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
test("Test to make sure we can add a github to a class.", () => {
  const employee = new Engineer("John", 1234, "test@test.com", "test");
  expect(employee.github).toBe("test");
});
test("Test to make sure getGithub returns github.", () => {
  const employee = new Engineer("John", 1234, "test@test.com", "test");
  expect(employee.getGithub()).toBe("test");
});
test("Test to make sure getrole return role.", () => {
  const employee = new Engineer("John", 1234, "test@test.com", "test");
  expect(employee.getrole()).toBe("Engineer");
});
