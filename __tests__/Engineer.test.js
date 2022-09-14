const Engineer = require("../lib/Engineer");

// test role method
test("test role method", () => {
  let role = "Engineer";
  let employee = new Engineer("Alyssa", 11, "engineer@thiscompany.com");
  expect(employee.getRole()).toBe(role);
});

// test github
test("test github", () => {
  let github = "Github";
  let employee = new Engineer("Alyssa", 11, "engineer@thiscompany.com", github);
  expect(employee.getGithub()).toBe(github);
});

test("test github", () => {
  let github = "Github";
  let employee = new Engineer("Alyssa", 11, "engineer@thiscompany.com", github);
  expect(employee.github).toBe(github);
});
