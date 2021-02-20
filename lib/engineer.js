const Employee = require("./employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    this.github = github;
    super(name, id, email);
  }
  getGithub() {
    return this.github;
  }
  getrole() {
    return "Engineer";
  }
}
module.exports = Manager;