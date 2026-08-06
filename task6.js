// TASK 1: CAR RENTAL SYSTEM CLASS
class CarRental {
  constructor(customerName, carModel, rentPerDay, totalDays, pickupDetails) {
    this.customerName = customerName;
    this.carModel = carModel;
    this.rentPerDay = rentPerDay;
    this.totalDays = totalDays;

    // Create & Configure Pickup Date
    this.pickupDate = new Date();
    this.pickupDate.setFullYear(pickupDetails.year);
    this.pickupDate.setMonth(pickupDetails.month); // 0-based index (10 = November)
    this.pickupDate.setDate(pickupDetails.date);
    this.pickupDate.setHours(pickupDetails.hours);
    this.pickupDate.setMinutes(pickupDetails.minutes);
    this.pickupDate.setSeconds(pickupDetails.seconds);
  }

  calculateTotalRent() {
    return this.rentPerDay * this.totalDays;
  }

  displayRentalDetails() {
    console.log("Customer Name : " + this.customerName);
    console.log("Car Model : " + this.carModel);
    console.log("Rent Per Day : " + this.rentPerDay);
    console.log("Total Days : " + this.totalDays);
    console.log("Total Rent Amount : " + this.calculateTotalRent());

    // Display Date Extraction Methods
    console.log("Pickup Year : " + this.pickupDate.getFullYear());
    console.log("Pickup Month : " + (this.pickupDate.getMonth() + 1)); // 1-indexed month
    console.log("Pickup Date : " + this.pickupDate.getDate());
    console.log("Pickup Day : " + this.pickupDate.getDay());

    console.log("Pickup Hours : " + this.pickupDate.getHours());
    console.log("Pickup Minutes : " + this.pickupDate.getMinutes());
    console.log("Pickup Seconds : " + this.pickupDate.getSeconds());

    console.log("Car Rental Confirmed\n");
  }
}

// TASK 2: GYM SUBSCRIPTION SYSTEM CLASS
class GymSubscription {
  constructor(memberName, planName, monthlyFee, totalMonths, joiningDetails) {
    this.memberName = memberName;
    this.planName = planName;
    this.monthlyFee = monthlyFee;
    this.totalMonths = totalMonths;

    // Create & Configure Joining Date
    this.joiningDate = new Date();
    this.joiningDate.setFullYear(joiningDetails.year);
    this.joiningDate.setMonth(joiningDetails.month); // 0-based index (0 = January)
    this.joiningDate.setDate(joiningDetails.date);
    this.joiningDate.setHours(joiningDetails.hours);
    this.joiningDate.setMinutes(joiningDetails.minutes);
    this.joiningDate.setSeconds(joiningDetails.seconds);
  }

  calculateTotalSubscriptionFee() {
    return this.monthlyFee * this.totalMonths;
  }

  displaySubscriptionDetails() {
    console.log("Member Name : " + this.memberName);
    console.log("Plan Name : " + this.planName);
    console.log("Monthly Fee : " + this.monthlyFee);
    console.log("Total Months : " + this.totalMonths);
    console.log("Total Subscription Fee : " + this.calculateTotalSubscriptionFee());

    // Display Date Extraction Methods
    console.log("Joining Year : " + this.joiningDate.getFullYear());
    console.log("Joining Month : " + (this.joiningDate.getMonth() + 1)); // 1-indexed month
    console.log("Joining Date : " + this.joiningDate.getDate());
    console.log("Joining Day : " + this.joiningDate.getDay());

    console.log("Joining Hours : " + this.joiningDate.getHours());
    console.log("Joining Minutes : " + this.joiningDate.getMinutes());
    console.log("Joining Seconds : " + this.joiningDate.getSeconds());

    console.log("Gym Membership Activated\n");
  }
}

const rentalOrder = new CarRental("Apshar khan", "Baleno", 1500, 3, {
  year: 2026,
  month: 10,
  date: 12,
  hours: 9,
  minutes: 15,
  seconds: 0
});

rentalOrder.displayRentalDetails();

const gymMember = new GymSubscription("Apshar khan", "Annual Premium", 1200, 12, {
  year: 2026,
  month: 0,
  date: 5,
  hours: 17,
  minutes: 0,
  seconds: 0
});

gymMember.displaySubscriptionDetails();
