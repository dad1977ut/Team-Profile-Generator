const Employee = require("./employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;
    super(name, id, email);
  }
  getrole() {
    return "Manager";
  }
}
module.exports = Manager;