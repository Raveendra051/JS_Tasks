// 1. STUDENT REGISTRATION (Variables + Objects)
const student = {
  name: "Rahul Sharma",
  age: 20,
  department: "Computer Science",
  courseFee: 45000
};

console.log("--- 1. Student Registration ---");
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Department: ${student.department}`);
console.log(`Course Fee: ₹${student.courseFee}`);

if (student.age >= 18) {
  console.log("Status: Eligible");
} else {
  console.log("Status: Not Eligible");
}


// 2. EMPLOYEE SALARY CALCULATOR (Functions)
function calculateSalary(basicSalary, bonus, deduction) {
  return basicSalary + bonus - deduction;
}

console.log("\n2. Employee Salary Calculator");
const totalSalary = calculateSalary(30000, 5000, 2000);
console.log(`Total Salary: ₹${totalSalary}`);


// 3. SHOPPING CART (Array)
console.log("\n3. Shopping Cart ");
let cart = ["Laptop", "Mouse", "Keyboard", "Headphone"];

cart.push("Monitor"); 
cart.pop(); 
console.log(`Total Products: ${cart.length}`);
console.log(`First Product: ${cart[0]}`);
console.log(`Last Product: ${cart[cart.length - 1]}`);


// 4. LOGIN VALIDATION (If Else)
function validateLogin(username, password) {
  const storedUser = "admin";
  const storedPass = "12345";

  if (username === storedUser && password === storedPass) {
    console.log("Login Success");
  } else {
    console.log("Invalid Username or Password");
  }
}

console.log("\n--- 4. Login Validation ---");
validateLogin("admin", "12345");


// 5. MOVIE TICKET BOOKING (Ternary)
console.log("\n--- 5. Movie Ticket Booking ---");
const userAge = 20;
const bookingStatus = userAge >= 18 ? "Eligible" : "Not Eligible";
console.log(`Booking Status: ${bookingStatus}`);


// 6. EMPLOYEE SEARCH (Array + Find)
console.log("\n--- 6. Employee Search ---");
const employees = [
  { name: "Arun", salary: 25000 },
  { name: "Kavin", salary: 40000 },
  { name: "Ravi", salary: 55000 }
];

const foundEmployee = employees.find(emp => emp.name === "Kavin");
console.log("Found Employee:", foundEmployee);


// 7. PRODUCT FILTER (Filter)
console.log("\n--- 7. Product Filter ---");
const productsList = [
  { name: "Mouse", price: 350 },
  { name: "Keyboard", price: 800 },
  { name: "USB Cable", price: 150 },
  { name: "Headphone", price: 1200 }
];

const cheapProducts = productsList.filter(item => item.price < 500);
console.log("Products below ₹500:", cheapProducts);


// 8. STUDENT MARKS (Map)
console.log("\n--- 8. Student Marks ---");
const originalMarks = [45, 56, 67, 89];
const newMarks = originalMarks.map(mark => mark + 5);
console.log("New Marks (with 5 Grace Marks):", newMarks);


// 9. ATTENDANCE CHECKER (Every)
console.log("\n--- 9. Attendance Checker ---");
const studentMarks = [90, 85, 70, 65];
const allPassed = studentMarks.every(mark => mark > 50);
console.log(`All scored above 50: ${allPassed}`);


// 10. OTP GENERATOR (Math + String)
console.log("\n--- 10. OTP Generator ---");
function generateOTP() {
  let otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}
console.log(`Generated OTP: ${generateOTP()}`);


// 11. PASSWORD STRENGTH CHECKER (String)
function checkPasswordStrength(password) {
  const hasMinLength = password.length >= 8;
  const hasNumber = /[0-9]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (hasMinLength && hasNumber && hasUpper && hasSpecial) {
    return "Strong Password";
  } else {
    return "Weak Password";
  }
}

console.log("\n--- 11. Password Strength Checker ---");
console.log(`Password 'Abc@1234' Status: ${checkPasswordStrength("Abc@1234")}`);

// 12. PRODUCT SEARCH (Includes)
console.log("\n--- 12. Product Search ---");
const availableProducts = ["Laptop", "Mobile", "Watch", "Camera"];
const searchItem = "Mobile";

if (availableProducts.includes(searchItem)) {
  console.log(`${searchItem}: Available`);
} else {
  console.log(`${searchItem}: Not Available`);
}


// 13. CURRENT DIGITAL CLOCK (Date + setInterval)
/*
console.log("\n--- 13. Current Digital Clock ---");
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);
*/


// 14. COUNTDOWN TIMER (setInterval)
/*
console.log("\n--- 14. Countdown Timer ---");
let count = 10;
const timer = setInterval(() => {
  console.log(count);
  count--;
  if (count < 0) {
    clearInterval(timer);
    console.log("Timer Finished!");
  }
}, 1000);
*/

// 15. FAKE API PRODUCT VIEWER (Fetch API)
async function getFakeProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=3");
    const data = await response.json();
    console.log("\n--- 15. Fake API Products ---");
    data.forEach(prod => {
      console.log(`Name: ${prod.title} | Price: $${prod.price} | Image: ${prod.image}`);
    });
  } catch (err) {
    console.log("Fetch Error:", err.message);
  }
}
// getFakeProducts(); 


// 16. EMPLOYEE DASHBOARD (Reduce)
console.log("\n 16. Employee Dashboard ");
const staff = [
  { name: "Arun", salary: 25000 },
  { name: "Kavin", salary: 40000 },
  { name: "Ravi", salary: 55000 }
];

const totalSal = staff.reduce((acc, curr) => acc + curr.salary, 0);
const avgSal = totalSal / staff.length;
const highestSal = staff.reduce((max, curr) => curr.salary > max ? curr.salary : max, 0);

console.log(`Total Salary: ₹${totalSal}`);
console.log(`Average Salary: ₹${avgSal}`);
console.log(`Highest Salary: ₹${highestSal}`);


// 17. ONLINE FOOD ORDER
console.log("\n--- 17. Online Food Order ---");
const foodMenu = {
  Pizza: 250,
  Burger: 120,
  Shawarma: 100,
  Fries: 80
};

let foodOrder = [];
function addFoodItem(item) { foodOrder.push(item); }
function removeFoodItem(item) { foodOrder = foodOrder.filter(i => i !== item); }
function printBill() {
  let total = foodOrder.reduce((sum, item) => sum + (foodMenu[item] || 0), 0);
  console.log("Ordered Items:", foodOrder.join(", "));
  console.log(`Total Items: ${foodOrder.length}`);
  console.log(`Total Bill Amount: ₹${total}`);
}

addFoodItem("Pizza");
addFoodItem("Burger");
addFoodItem("Fries");
removeFoodItem("Fries");
printBill();


// 18. BANK ACCOUNT
console.log("\n--- 18. Bank Account ---");
const bankAccount = {
  accountHolder: "Apshar Khan",
  balance: 5000,

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ₹${amount}. New Balance: ₹${this.balance}`);
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: ₹${amount}. Remaining Balance: ₹${this.balance}`);
    } else {
      console.log("Insufficient Balance!");
    }
  },

  checkBalance() {
    console.log(`Current Balance: ₹${this.balance}`);
  }
};

bankAccount.checkBalance();
bankAccount.deposit(2000);
bankAccount.withdraw(1500);


// 19. TO-DO LIST
console.log("\n--- 19. To-Do List ---");
let todoList = [];

function addTask(task) { todoList.push(task); }
function deleteTask(index) { todoList.splice(index, 1); }
function updateTask(index, newTask) { todoList[index] = newTask; }
function showTasks() { console.log("Tasks:", todoList); }

addTask("Learn JS");
addTask("Practice Code");
updateTask(0, "Learn Advanced JS");
deleteTask(1);
showTasks();


// 20. MINI E-COMMERCE PRODUCT MANAGEMENT
console.log("\n--- 20. Mini E-Commerce System ---");
let inventory = [];

function addInventoryProduct(name, price, category, stock) {
  inventory.push({ name, price, category, stock });
}

function searchProduct(name) {
  return inventory.find(p => p.name.toLowerCase() === name.toLowerCase());
}

function filterByCategory(category) {
  return inventory.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

function getTotalStock() {
  return inventory.reduce((total, p) => total + p.stock, 0);
}

function getTotalInventoryValue() {
  return inventory.reduce((total, p) => total + (p.price * p.stock), 0);
}

addInventoryProduct("Laptop", 50000, "Electronics", 5);
addInventoryProduct("Mobile", 20000, "Electronics", 10);
addInventoryProduct("Shirt", 1000, "Clothing", 20);

console.log("Search 'Laptop':", searchProduct("Laptop"));
console.log("Electronics Products:", filterByCategory("Electronics"));
console.log(`Total Stock: ${getTotalStock()}`);
console.log(`Total Inventory Value: ₹${getTotalInventoryValue()}`);