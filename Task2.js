// Task 1: Employee Variables
let empName = "Ravi";
let empId = "EMP1001";
let department = "Frontend";
let salary = 25000;
let isPermanent = true;

console.log("Name : " + empName);
console.log("Employee ID : " + empId);
console.log("Department : " + department);
console.log("Salary : " + salary);
console.log("Permanent : " + isPermanent);


// Task 2: Student Details
let student = {
  Name: "Rahul",
  Age: 21,
  Course: "CSE",
  College: "ABC Engineering College",
  Passed: true
};

console.log("Student Name : " + student.Name);
console.log("Course : " + student.Course);
console.log("Passed Status : " + student.Passed);


// Task 3: Shopping Cart
let cart = ["Milk", "Rice", "Oil", "Sugar", "Soap"];

console.log(cart[0]);                 
console.log(cart[2]);                 
console.log(cart[cart.length - 1]);   
console.log(cart.length);             


// Task 4: Company Employee Database
let companyEmp = {
  name: "Priya",
  designation: "Software Developer",
  salary: 45000,
  skills: ["JavaScript", "React", "Node.js", "MongoDB"]
};

console.log("Employee Name : " + companyEmp.name);
console.log("Designation : " + companyEmp.designation);
console.log("Second Skill : " + companyEmp.skills[1]);


// Task 5: Salary Calculation
let basicSalary = 25000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;

console.log("Total Salary : " + totalSalary);


// Task 6: GST Calculator
let productPrice = 4500;
let gstPercentage = 18;

let gstAmount = (productPrice * gstPercentage) / 100;
let finalAmount = productPrice + gstAmount;

console.log("GST Amount : " + gstAmount);
console.log("Final Amount : " + finalAmount);


// Task 7: Even or Odd
let number = 25;
let evenOrOdd = (number % 2 === 0) ? "Even Number" : "Odd Number";

console.log(evenOrOdd);


// Task 8: Login System
let usernameInput = "admin";
let passwordInput = "12345";

if (usernameInput === "admin" && passwordInput === "12345") {
  console.log("Login Success");
} else {
  console.log("Invalid Credentials");
}


// Task 9: Voting Eligibility
let age = 22;
let voteStatus = (age >= 18) ? "Eligible for Vote" : "Not Eligible";

console.log(voteStatus);


// Task 10: EMI Eligibility
let emiSalary = 40000;
let experience = 3;

if (emiSalary > 30000 && experience >= 2) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}


// Task 11: Product Discount
let price = 5000;
let discountPercent = 10;

let discountAmount = (price * discountPercent) / 100;
let finalPrice = price - discountAmount;

console.log("Discount Amount : " + discountAmount);
console.log("Final Price : " + finalPrice);


// Task 12: User Registration
let regName = "Suresh";
let email = "suresh@example.com";
let phone = "9876543210";
let city = "Chennai";

console.log("----- User Details -----");
console.log("Name : " + regName);
console.log("Email : " + email);
console.log("Phone : " + phone);
console.log("City : " + city);


// Task 13: Social Media Profile
let userProfile = {
  Username: "tech_guru",
  Followers: 12500,
  Following: 180,
  Posts: 340,
  Verified: true
};

console.log("Username : " + userProfile.Username);
console.log("Followers : " + userProfile.Followers);
console.log("Verified Status : " + userProfile.Verified);


// Task 14: Restaurant Menu
let menu = ["Idli", "Dosa", "Poori", "Meals", "Parotta"];

console.log("Second Item : " + menu[1]);
console.log("Fourth Item : " + menu[3]);
console.log("Last Item : " + menu[menu.length - 1]);


// Task 15: Banking System
let accountBalance = 25000;
let withdraw = 8000;
let remainingBalance = accountBalance - withdraw;

console.log("Remaining Balance : " + remainingBalance);


// Task 16: Mobile Store
let mobilePrice = 25000;
let exchangeValue = 5000;
let couponValue = 2000;

let netPayable = mobilePrice - exchangeValue - couponValue;

console.log("Final Amount : " + netPayable);


// Task 17: Employee Promotion
let empExperience = 5;
let performance = true;

if (empExperience >= 5 && performance === true) {
  console.log("Promotion Approved");
} else {
  console.log("Promotion Pending");
}


// Task 18: Movie Ticket
let ticketPrice = 180;
let numberOfPeople = 5;
let totalMovieCost = ticketPrice * numberOfPeople;

console.log("Total Amount : " + totalMovieCost);


// Task 19: Weather App
let temperature = 38;
let weatherStatus = (temperature > 35) ? "Hot Day" : "Normal Weather";

console.log(weatherStatus);


// Task 20: Mini HR Management (Real-Time)
let hrEmployee = {
  empCode: "EMP1001",
  name: "Rahul",
  department: "Frontend",
  designation: "Associate Software Engineer",
  salary: 28000,
  skills: ["HTML", "CSS", "JavaScript", "React"],
  permanent: true
};

console.log("Employee Code : " + hrEmployee.empCode);
console.log("Employee Name : " + hrEmployee.name);
console.log("Department : " + hrEmployee.department);
console.log("Salary : " + hrEmployee.salary);
console.log("Last Skill : " + hrEmployee.skills[hrEmployee.skills.length - 1]);
console.log("Permanent Status : " + hrEmployee.permanent);