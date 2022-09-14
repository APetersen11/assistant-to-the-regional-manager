const Employee = require("../lib/Employee");

// test for class results
test("testing that the employee class returns an object", () => {
  let employee = new Employee();
  expect(typeof employee).toBe("object");
});

// test name

test("test name constructor", () => {
  let name = "Alyssa";
  let employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("test name method", () => {
  let name = "Alyssa";
  let employee = new Employee(name);
  expect(employee.getName()).toBe(name);
});

// test id

test("test id constructor", () => {
  let id = 11;
  let employee = new Employee("Alyssa", id);
  expect(employee.id).toBe(id);
});

test("test id method", () => {
  let id = 11;
  let employee = new Employee("Alyssa", id);
  expect(employee.getId()).toBe(id);
});

// test email

test("test email constructor", () => {
  let email = "employee@thiscompany.com";
  let employee = new Employee("Alyssa", 11, email);
  expect(employee.email).toBe(email);
});

test("test email method", () => {
  let email = "employee@thiscompany.com";
  let employee = new Employee("Alyssa", 11, email);
  expect(employee.getEmail()).toBe(email);
});

// test get role method

test("test role method", () => {
    let role = "Employee";
    let employee = new Employee("Alyssa", 11, "employee@thiscompany.com");
    expect(employee.getRole()).toBe(role);
  });
  
