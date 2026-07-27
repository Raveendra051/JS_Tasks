// Task 1 – Student Registration
let studentName = "Rahul";
let department = "CSE";
let cgpa = 8.6;
let status = cgpa >= 6.0 ? "Eligible" : "Not Eligible";

console.log("Student Name : " + studentName);
console.log("Department : " + department);
console.log("CGPA : " + cgpa);
console.log("Status : " + status);


// Task 2 – Online Shopping Bill
let productPrice = 2500;
let quantity = 3;

let totalAmount = productPrice * quantity;
let discount = totalAmount > 5000 ? totalAmount * 0.10 : 0;
let finalPrice = totalAmount - discount;

console.log("Total : " + totalAmount);
console.log("Discount : " + discount);
console.log("Final Price : " + finalPrice);


// Task 3 – Employee Salary
let basicSalary = 35000;
let bonus = 5000;
let tax = 3000;
let netSalary = basicSalary + bonus - tax;

console.log("Basic Salary : " + basicSalary);
console.log("Bonus : " + bonus);
console.log("Tax : " + tax);
console.log("Net Salary : " + netSalary);


// Task 4 – Movie Ticket Booking
let movie = "Leo";
let ticketPrice = 180;
let tickets = 5;
let totalMovieCost = ticketPrice * tickets;

console.log("Movie : " + movie);
console.log("Tickets : " + tickets);
console.log("Total : " + totalMovieCost);


// Task 5 – Login System
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login Success");
} else {
  console.log("Invalid Username or Password");
}


// Task 6 – Electricity Bill
let units = 250;
let totalBill = 0;

if (units <= 100) {
  totalBill = units * 5;
} else if (units <= 200) {
  totalBill = (100 * 5) + ((units - 100) * 7);
} else {
  totalBill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Total Electricity Bill: ₹" + totalBill);


// Task 7 – Restaurant Order
let menu = ["Dosa", "Idly", "Poori", "Meals"];

console.log("First Item : " + menu[0]);
console.log("Last Item : " + menu[menu.length - 1]);
console.log("Total Items : " + menu.length);

menu.push("Fried Rice");

let idlyIndex = menu.indexOf("Idly");
if (idlyIndex !== -1) {
  menu.splice(idlyIndex, 1);
}

console.log("Updated Menu :", menu);


// Task 8 – Employee Object
let employee = {
  name: "Ravi",
  role: "Frontend Developer",
  salary: 40000
};

console.log("Employee Name : " + employee.name);
console.log("Role : " + employee.role);
console.log("Salary : " + employee.salary);


// Task 9 – Product Inventory
let inventoryProducts = [
  "Mouse",
  "Keyboard",
  "Monitor",
  "CPU",
  "Speaker"
];

for (let i = 0; i < inventoryProducts.length; i++) {
  console.log(`${i + 1} ${inventoryProducts[i]}`);
}


// Task 10 – Function
function calculateArea(length, width) {
  let area = length * width;
  console.log("Area = " + area);
}

calculateArea(10, 20);


// Task 11 – Bank Deposit
let currentBalance = 5000;

function deposit(amount) {
  currentBalance += amount;
}

function withdraw(amount) {
  currentBalance -= amount;
}

deposit(2000);
withdraw(1000);
console.log("Final Balance: " + currentBalance);


// Task 12 – Callback Function
function addition(a, b) {
  return a + b;
}

function calculate(fn, a, b) {
  let result = fn(a, b);
  console.log(result);
  console.log("Calculation Completed");
}

calculate(addition, 10, 20);


// Task 13 – Generator Function
function* couponGenerator() {
  yield "WELCOME10";
  yield "SAVE20";
  yield "SUPER30";
  yield "BIG50";
  yield "MEGA100";
}

let coupons = couponGenerator();
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);


// Task 14 – Currying
function discount(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(discount(10)(20)(30));


// Task 15 – Spread Operator
let frontend = ["HTML", "CSS", "JS"];
let backend = ["Node", "Express", "MongoDB"];

let fullStack = [...frontend, ...backend];
console.log(fullStack);


// Task 16 – Rest Operator
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(10, 20, 30, 40, 50));


// Task 17 – Array Destructuring
let colors = ["Red", "Blue", "Green", "Yellow"];

let [c1, c2, c3, c4] = colors;
console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);


// Task 18 – Object Destructuring
let user = {
  name: "Ravi",
  city: "hyd",
  role: "Developer"
};

let { name, city, role } = user;
console.log(name);
console.log(city);
console.log(role);


// Task 19 – Shopping Cart
let cart = ["Mobile", "Laptop", "Watch"];

cart.push("Headphones");
console.log("After push() :", cart);

cart.pop();
console.log("After pop() :", cart);

cart.shift();
console.log("After shift() :", cart);

cart.unshift("Tablet");
console.log("After unshift() :", cart);


// Task 20 – Product Search
let searchProducts = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
  "Speaker"
];

if (searchProducts.includes("Monitor")) {
  console.log("Product Available");
} else {
  console.log("Out of Stock");
}