// Task 1: Employee Login System
let inputUsername = prompt("Enter username:");
let inputPassword = prompt("Enter password:");

if (inputUsername === "admin" && inputPassword === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}


// Task 2: E-Commerce Discount
let amount = 6500;
let finalDiscountAmount = amount;

if (amount >= 5000) {
    console.log("20% Discount Applied");
    finalDiscountAmount = amount - (amount * 0.20);
} else {
    console.log("No Discount");
}
console.log("Final Amount : " + finalDiscountAmount);


// Task 3: ATM Withdrawal
let balance = 10000;
let withdraw = 4000;

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Transaction Success");
    console.log("Balance:", balance);
} else {
    console.log("Insufficient Balance");
}


// Task 4: Student Grade System
let mark = 87;

if (mark >= 90) {
    console.log("Grade A");
} else if (mark >= 80) {
    console.log("Grade B");
} else if (mark >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// Task 5: Traffic Signal
let signal = "green";

switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid");
}


// Task 6: Online Shopping Delivery Charge
let orderAmount = 750;
let deliveryCharge = orderAmount >= 1000 ? 0 : 80;
let totalCost = orderAmount + deliveryCharge;

console.log("Order Amount : " + orderAmount);
console.log("Delivery : " + deliveryCharge);
console.log("Total : " + totalCost);


// Task 7: User Age Verification
let userAge = Number(prompt("Enter your age:"));

if (userAge < 18) {
    console.log("Not Eligible");
} else {
    console.log("Eligible");
}


// Task 8: Find Largest Number among 3 Numbers
let num1 = 10;
let num2 = 20;
let num3 = 15;

if (num1 >= num2 && num1 >= num3) {
    console.log("Largest Number: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Largest Number: " + num2);
} else {
    console.log("Largest Number: " + num3);
}


// Task 9: Mobile Password
let pin = prompt("Enter 4-digit PIN:");

if (pin.length === 4) {
    console.log("Login Success");
} else {
    console.log("Invalid PIN");
}


// Task 10: Product Stock
let stock = 0;

if (stock === 0) {
    console.log("Out of Stock");
} else {
    console.log("Available");
}


// Task 11: Employee Salary Bonus
let empSalary = 45000;
let bonus = 0;

if (empSalary > 50000) {
    bonus = 10000;
} else if (empSalary > 30000) {
    bonus = 5000;
} else {
    bonus = 2000;
}
console.log("Salary Bonus: " + bonus);


// Task 12: Electricity Bill
let units = 150;
let totalBill = 0;

if (units <= 100) {
    totalBill = units * 2;
} else if (units <= 200) {
    totalBill = (100 * 2) + ((units - 100) * 4);
} else {
    totalBill = (100 * 2) + (100 * 4) + ((units - 200) * 6);
}
console.log("Electricity Bill: " + totalBill);


// Task 13: Movie Ticket Booking
let movieAge = 25;

if (movieAge < 5) {
    console.log("Free");
} else if (movieAge <= 18) {
    console.log("₹100");
} else {
    console.log("₹200");
}


// Task 14: Hospital Token System
let patientType = "Emergency";

switch (patientType) {
    case "Emergency":
        console.log("Token 1");
        break;
    case "Senior Citizen":
        console.log("Priority");
        break;
    case "Normal":
        console.log("Regular Queue");
        break;
    default:
        console.log("Invalid Type");
}


// Task 15: Company Attendance
let attendanceStatus = "Present";

if (attendanceStatus === "Present") {
    console.log("Working");
} else if (attendanceStatus === "Leave") {
    console.log("Leave Approved");
} else if (attendanceStatus === "Absent") {
    console.log("Salary Deduction");
} else {
    console.log("Invalid Status");
}


// Task 16: Grocery Cart Total
let rice = 500;
let sugar = 300;
let oil = 250;

let groceryTotal = rice + sugar + oil;

if (groceryTotal > 1000) {
    groceryTotal -= (groceryTotal * 0.10);
    console.log("10% Discount Applied");
}
console.log("Total Amount: " + groceryTotal);


// Task 17: Array Task
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1} ${products[i]}`);
}


// Task 18: Employee Database
let employeeObj = {
    name: "Rahul",
    role: "Developer",
    salary: 50000
};

for (let key in employeeObj) {
    console.log(employeeObj[key]);
}


// Task 19: Type Casting
let strNum = Number("100");
let strBool = Boolean("true");
let numStr = String(200);

console.log(strNum, typeof strNum);
console.log(strBool, typeof strBool);
console.log(numStr, typeof numStr);


// Task 20: Banking Menu
let menuChoice = 3;

switch (menuChoice) {
    case 1:
        console.log("Deposit");
        break;
    case 2:
        console.log("Withdraw");
        break;
    case 3:
        console.log("Balance");
        break;
    case 4:
        console.log("Exit");
        break;
    default:
        console.log("Invalid Choice");
}

