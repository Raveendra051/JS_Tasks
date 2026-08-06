// TASK 1: CAR RENTAL SYSTEM CLASS
class CarRental {
  constructor(customerName, carModel, rentPerDay, totalDays, year, month, date, hours, minutes, seconds) {
    this.customerName = customerName;
    this.carModel = carModel;
    this.rentPerDay = rentPerDay;
    this.totalDays = totalDays;
    this.pickupDate = new Date(year, month, date, hours, minutes, seconds);
  }

  calculateTotalRent() {
    return this.rentPerDay * this.totalDays;
  }

  displayRentalDetails() {
    console.log(`Customer Name : ${this.customerName}`);
    console.log(`Car Model : ${this.carModel}`);
    console.log(`Rent Per Day : ${this.rentPerDay}`);
    console.log(`Total Days : ${this.totalDays}`);
    console.log(`Total Rent Amount : ${this.calculateTotalRent()}`);

    console.log(`Pickup Year : ${this.pickupDate.getFullYear()}`);
    console.log(`Pickup Month : ${this.pickupDate.getMonth() + 1}`); 
    console.log(`Pickup Date : ${this.pickupDate.getDate()}`);
    console.log(`Pickup Day : ${this.pickupDate.getDay()}`);

    console.log(`Pickup Hours : ${this.pickupDate.getHours()}`);
    console.log(`Pickup Minutes : ${this.pickupDate.getMinutes()}`);
    console.log(`Pickup Seconds : ${this.pickupDate.getSeconds()}`);

    console.log("Car Rental Confirmed\n");
  }
}

// TASK 2: GYM SUBSCRIPTION SYSTEM CLASS
class GymSubscription {
  constructor(memberName, planName, monthlyFee, totalMonths, year, month, date, hours, minutes, seconds) {
    this.memberName = memberName;
    this.planName = planName;
    this.monthlyFee = monthlyFee;
    this.totalMonths = totalMonths;

    this.joiningDate = new Date(year, month, date, hours, minutes, seconds);
  }

  calculateTotalFee() {
    return this.monthlyFee * this.totalMonths;
  }

  displaySubscriptionDetails() {
    console.log(`Member Name : ${this.memberName}`);
    console.log(`Plan Name : ${this.planName}`);
    console.log(`Monthly Fee : ${this.monthlyFee}`);
    console.log(`Total Months : ${this.totalMonths}`);
    console.log(`Total Subscription Fee : ${this.calculateTotalFee()}`);

    console.log(`Joining Year : ${this.joiningDate.getFullYear()}`);
    console.log(`Joining Month : ${this.joiningDate.getMonth() + 1}`);
    console.log(`Joining Date : ${this.joiningDate.getDate()}`);
    console.log(`Joining Day : ${this.joiningDate.getDay()}`);

    console.log(`Joining Hours : ${this.joiningDate.getHours()}`);
    console.log(`Joining Minutes : ${this.joiningDate.getMinutes()}`);
    console.log(`Joining Seconds : ${this.joiningDate.getSeconds()}`);

    console.log("Gym Membership Activated\n");
  }
}

// EXECUTION

const rentalOrder = new CarRental("Apshar khan", "Baleno", 1500, 3, 2026, 10, 12, 9, 15, 0);
rentalOrder.displayRentalDetails();

const gymMember = new GymSubscription("Apshar khan", "Annual Premium", 1200, 12, 2026, 0, 5, 17, 0, 0);
gymMember.displaySubscriptionDetails();
