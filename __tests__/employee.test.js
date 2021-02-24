const Employee = require("../lib/employee");
test("Test to make sure we can add a name to a class.", () => {
  const employee = new Employee("John");
  expect(employee.name).toBe("John");
});
test("Test to make sure we can add a id to a class.", () => {
  const employee = new Employee("John", 1234);
  expect(employee.id).toBe(1234);
});
test("Test to make sure we can add a name to a class.", () => {
  const employee = new Employee("John", 1234, "test@test.com");
  expect(employee.email).toBe("test@test.com");
});
test("Test if getname returns name.", () => {
  const employee = new Employee("John", 1234, "test@test.com");
  expect(employee.getname()).toBe("John");
});
test("Test if getid returns name.", () => {
  const employee = new Employee("John", 1234, "test@test.com");
  expect(employee.getid()).toBe(1234);
});
test("Test if getemail returns name.", () => {
  const employee = new Employee("John", 1234, "test@test.com");
  expect(employee.getemail()).toBe("test@test.com");
});
test("Test if getrole returns name.", () => {
  const employee = new Employee("John", 1234, "test@test.com");
  expect(employee.getrole()).toBe("Employee");
});
