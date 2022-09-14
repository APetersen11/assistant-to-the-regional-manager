const Manager = require("../lib/Manager");

// test role method
test("test role method", () => {
  let role = "Manager";
  let employee = new Manager("Alyssa", 11, "engineer@thiscompany.com");
  expect(employee.getRole()).toBe(role);
});

// test school
test("test officeNumber method", () => {
  let officeNumber = "Office Number";
  let employee = new Manager(
    "Alyssa",
    11,
    "engineer@thiscompany.com",
    officeNumber
  );
  expect(employee.getOfficeNumber()).toBe(officeNumber);
});

test("test github constructor", () => {
  let officeNumber = "Office Number";
  let employee = new Manager(
    "Alyssa",
    11,
    "engineer@thiscompany.com",
    officeNumber
  );
  expect(employee.officeNumber).toBe(officeNumber);
});
