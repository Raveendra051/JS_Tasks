// 1. Current Date and Time
const now = new Date();
console.log("Current Time:", now);

// 2. From an ISO String or Date String
const dateFromString = new Date("2026-08-06T11:30:00Z");
console.log("From String:", dateFromString);

// 3. From Component Values
const specificDate = new Date(2026, 7, 6, 14, 30, 0); 
console.log("From Components:", specificDate);

// 4. From Unix Timestamp
const timestampDate = new Date(1700000000000);
console.log("From Timestamp:", timestampDate);

const d = new Date(2026, 7, 6, 14, 45, 30);

// Year, Month, Day Extraction
console.log("Year:", d.getFullYear());       
console.log("Month (0-11):", d.getMonth());  
console.log("Day of Month:", d.getDate());   
console.log("Day of Week (0-6):", d.getDay());

// Time Extraction
console.log("Hours (0-23):", d.getHours());  // 14
console.log("Minutes:", d.getMinutes());      // 45
console.log("Seconds:", d.getSeconds());      // 30
console.log("Timestamp (ms):", d.getTime());  

// Formatting Strings
console.log("ISO String:", d.toISOString());            
console.log("Locale String:", d.toLocaleString());      
console.log("Date Only:", d.toDateString());            
console.log("Time Only:", d.toTimeString());            

const deadline = new Date();

// Adding days to a date
deadline.setDate(deadline.getDate() + 7); 

// Changing time components
deadline.setHours(18);
deadline.setMinutes(0);

console.log("Updated Deadline:", deadline.toLocaleString());