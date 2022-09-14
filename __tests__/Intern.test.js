const Intern = require("../lib/Intern");

// test role method
test("test role method", () => {
  let role = "Intern";
  let employee = new Intern("Alyssa", 11, "engineer@thiscompany.com");
  expect(employee.getRole()).toBe(role);
});

// test school
test("test school method", () => {
  let school = "School";
  let employee = new Intern("Alyssa", 11, "engineer@thiscompany.com", school);
  expect(employee.getSchool()).toBe(school);
});

test("test github constructor", () => {
  let school = "School";
  let employee = new Intern("Alyssa", 11, "engineer@thiscompany.com", school);
  expect(employee.school).toBe(school);
});
