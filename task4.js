// Task 1: Student Registration Form
let studentName = "Naveen";
let age = 21;
let department = "Computer Science";
let cgpa = 8.5;

console.log("Student Name : " + studentName);
console.log("Age : " + age);
console.log("Department : " + department);
console.log("CGPA : " + cgpa);


// Task 2: Employee Details
let employee = {
  employeeId: "EMP101",
  employeeName: "Priya",
  department: "Frontend",
  salary: 45000
};

console.log("Employee Name : " + employee.employeeName);
console.log("Salary : " + employee.salary);


// Task 3: Shopping Cart
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset"];

console.log("First Product : " + products[0]);
console.log("Last Product : " + products[products.length - 1]);
console.log("Total Number of Products : " + products.length);


// Task 4: Student Marks
let subject1 = 85;
let subject2 = 90;
let subject3 = 78;
let subject4 = 88;
let subject5 = 92;

let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
let averageMarks = totalMarks / 5;

console.log("Total Marks : " + totalMarks);
console.log("Average Marks : " + averageMarks);


// Task 5: Age Checker
let userAge = 20;

if (userAge >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible");
}


// Task 6: Login System
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}


// Task 7: Calculator
let num1 = 20;
let num2 = 5;

console.log("Addition : " + (num1 + num2));
console.log("Subtraction : " + (num1 - num2));
console.log("Multiplication : " + (num1 * num2));
console.log("Division : " + (num1 / num2));
console.log("Modulus : " + (num1 % num2));


// Task 8: Electricity Bill
let customerName = "Rahul";
let unitsConsumed = 250;
let billAmount = 0;

if (unitsConsumed <= 100) {
  billAmount = unitsConsumed * 2;
} else if (unitsConsumed <= 200) {
  billAmount = (100 * 2) + ((unitsConsumed - 100) * 4);
} else {
  billAmount = (100 * 2) + (100 * 4) + ((unitsConsumed - 200) * 6);
}

console.log("Customer Name : " + customerName);
console.log("Units Consumed : " + unitsConsumed);
console.log("Bill Amount : ₹" + billAmount);


// Task 9: Employee Salary
let basicSalary = 30000;
let bonus = 5000;
let grossSalary = basicSalary + bonus;

console.log("Gross Salary : ₹" + grossSalary);


// Task 10: Movie Ticket Price
let ticketPrice = 180;
let numberOfTickets = 4;
let totalMovieBill = ticketPrice * numberOfTickets;

console.log("Total Amount : ₹" + totalMovieBill);


// Task 11: Product Discount
let productName = "Smart Watch";
let price = 6000;
let discountPercent = 0;

if (price > 5000) {
  discountPercent = 20;
} else {
  discountPercent = 10;
}

let discountAmount = (price * discountPercent) / 100;
let finalPrice = price - discountAmount;

console.log("Original Price : ₹" + price);
console.log("Discount : ₹" + discountAmount + " (" + discountPercent + "%)");
console.log("Final Price : ₹" + finalPrice);


// Task 12: Function Practice
function studentDetails(name, dept, studentCgpa) {
  console.log("Name : " + name);
  console.log("Department : " + dept);
  console.log("CGPA : " + studentCgpa);
}

studentDetails("Anitha", "Information Technology", 8.9);


// Task 13: Bank Balance
let accountHolder = "Suresh";
let currentBalance = 25000;
let withdrawAmount = 7000;
let remainingBalance = currentBalance - withdrawAmount;

console.log("Account Holder : " + accountHolder);
console.log("Remaining Balance : ₹" + remainingBalance);


// Task 14: Mobile Recharge
let mobileNumber = "9876543210";
let rechargeAmount = 299;

console.log("Recharge Successful");
console.log("Mobile Number : " + mobileNumber);
console.log("Recharge Amount : ₹" + rechargeAmount);


// Task 15: Restaurant Bill
let foodName = "Chicken Biryani";
let quantity = 3;
let itemPrice = 220;
let totalInvoiceBill = quantity * itemPrice;

console.log("Food Name : " + foodName);
console.log("Quantity : " + quantity);
console.log("Price per Item : ₹" + itemPrice);
console.log("Total Bill : ₹" + totalInvoiceBill);


// Mini Project: Employee Management System (Console Based)
let employeeDb = [
  {
    id: "EMP101",
    name: "Rahul",
    department: "Engineering",
    basicSalary: 45000,
    allowance: 5000,
    experienceInYears: 6,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    id: "EMP102",
    name: "Kavya",
    department: "Design",
    basicSalary: 30000,
    allowance: 3000,
    experienceInYears: 2,
    skills: ["Figma", "UI/UX", "Photoshop"]
  }
];

function addEmployee(id, name, department, basicSalary, allowance, experienceInYears, skills) {
  let newEmployee = {
    id: id,
    name: name,
    department: department,
    basicSalary: basicSalary,
    allowance: allowance,
    experienceInYears: experienceInYears,
    skills: skills
  };
  employeeDb.push(newEmployee);
  console.log(`Employee ${name} added successfully!`);
}

function calculateSalary(emp) {
  return emp.basicSalary + emp.allowance;
}

function checkExperienceLevel(years) {
  if (years >= 5) {
    return "Senior Level";
  } else if (years >= 2) {
    return "Mid Level";
  } else {
    return "Junior / Fresher";
  }
}

function displayEmployeeDetails() {
  console.log("--- Employee Management System ---");
  for (let i = 0; i < employeeDb.length; i++) {
    let emp = employeeDb[i];
    let totalSalary = calculateSalary(emp);
    let expLevel = checkExperienceLevel(emp.experienceInYears);

    console.log(`\n--- Details for ${emp.name} (${emp.id}) ---`);
    console.log("Department : " + emp.department);
    console.log("Experience : " + emp.experienceInYears + " Years (" + expLevel + ")");
    console.log("Total Salary : ₹" + totalSalary);
    console.log("Skills : " + emp.skills.join(", "));
  }
}

addEmployee("EMP103", "Arjun", "Backend", 55000, 7000, 4, ["Node.js", "Express", "MongoDB"]);
displayEmployeeDetails();
