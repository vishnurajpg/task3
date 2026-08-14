// Task 1 - Employee Eligibility

let name = prompt("Enter employee name");
let age = Number(prompt("Enter age"));
let exp = Number(prompt("Enter experience"));
let salary = Number(prompt("Enter salary"));

if (age < 21) {
    console.log("Employee is not eligible because age is less than 21");
} else if (exp < 1) {
    console.log("Employee is not eligible because experience is less than 1 year");
} else if (salary < 20000) {
    console.log("Employee is not eligible because salary is less than 20000");
} else {
    console.log("Employee is eligible");
}


// Task 2 - ATM Withdrawal

let balance = 10000;
let amount = Number(prompt("Enter withdrawal amount"));

if (amount <= 0) {
    console.log("Invalid withdrawal amount");
} else if (amount > balance) {
    console.log("Insufficient balance");
} else if (amount % 100 != 0) {
    console.log("Amount should be a multiple of 100");
} else {
    balance = balance - amount;

    console.log("Withdrawal successful");
    console.log("Remaining balance: ₹" + balance);
}


// Task 3 - Login System with 3 Attempts

let correctUsername = "admin";
let correctPassword = "12345";

let count = 1;
let login = false;

while (count <= 3) {

    let username = prompt("Enter username");
    let password = prompt("Enter password");

    if (username == correctUsername && password == correctPassword) {
        console.log("Login successful");
        login = true;
        break;
    } else {
        console.log("Wrong username or password");
        count++;
    }
}

if (login == false) {
    console.log("Account locked");
}


// Task 4 - Student Grade System

let math = Number(prompt("Enter Math mark"));
let english = Number(prompt("Enter English mark"));
let science = Number(prompt("Enter Science mark"));
let social = Number(prompt("Enter Social mark"));
let computer = Number(prompt("Enter Computer mark"));

let total = math + english + science + social + computer;
let average = total / 5;

console.log("Total = " + total);
console.log("Average = " + average);

if (average >= 90) {
    console.log("Grade = A");
} else if (average >= 80) {
    console.log("Grade = B");
} else if (average >= 70) {
    console.log("Grade = C");
} else if (average >= 60) {
    console.log("Grade = D");
} else {
    console.log("Grade = F");
}


// Task 5 - Number Pattern

// Pattern 1

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// Pattern 2

for (let j = 5; j >= 1; j--) {
    console.log(j);
}


// Pattern 3

let text = "";

for (let k = 1; k <= 5; k++) {
    text = text + k + " ";
}

console.log(text);


// Task 6 - Shopping Cart

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let prices = [50000, 1000, 2000, 15000];

let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
    console.log(products[i] + " - ₹" + prices[i]);

    totalPrice = totalPrice + prices[i];
}

console.log("Total = ₹" + totalPrice);


// Task 7 - Employee Object

let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000
};

for (let key in employee) {
    console.log(key + " : " + employee[key]);
}


function calculateBonus() {

    if (employee.salary >= 40000) {
        console.log("Bonus = 5000");
    } else {
        console.log("Bonus = 3000");
    }
}

calculateBonus();


// Task 8 - Bank Account Functions

let money = 10000;

function deposit(amount) {
    money = money + amount;
    console.log("Deposited: ₹" + amount);
}

function withdraw(amount) {
    money = money - amount;
    console.log("Withdrawn: ₹" + amount);
}

function checkBalance() {
    console.log("Current Balance: ₹" + money);
}

deposit(5000);
withdraw(2000);
checkBalance();


// Task 9 - Callback Calculator

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calculate(callback, a, b) {
    return callback(a, b);
}

console.log(calculate(add, 20, 10));
console.log(calculate(sub, 20, 10));
console.log(calculate(mul, 20, 10));
console.log(calculate(div, 20, 10));