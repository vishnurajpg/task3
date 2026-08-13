// Question 1 - Variables

let name1 = "Vishnu";
const course1 = "JavaScript";
var age1 = 25;
let mark1 = 85;

console.log(name1);
console.log(age1);
console.log(course1);
console.log(mark1);


// Question 2 - User Input

let name2 = prompt("Enter your name");
let age2 = prompt("Enter your age");

console.log(name2);
alert(age2);


// Question 3 - Data Types

let a = "Hello";
let b = 100;
let c = true;
let d;
let e = null;

console.log(a);
console.log(typeof a);

console.log(b);
console.log(typeof b);

console.log(c);
console.log(typeof c);

console.log(d);
console.log(typeof d);

console.log(e);
console.log(typeof e);


// Question 4 - Array

let items = ["Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"];

console.log(items[0]);
console.log(items[2]);
console.log(items[5]);
console.log(items);


// Question 5 - Object

let emp = {
    name: "Vishnu",
    age: 25,
    role: "Developer",
    salary: 30000
};

console.log(emp.name);
console.log(emp.age);
console.log(emp.role);
console.log(emp.salary);


// Question 6 - Arithmetic Operator

let price = 500;
let qty = 3;

let total = price * qty;
let discount = 100;
let final = total - discount;

console.log(total);
console.log(discount);
console.log(final);

console.log(price + qty);
console.log(price - qty);
console.log(price * qty);
console.log(price / qty);


// Question 7 - Comparison Operators

console.log(25 > 20);
console.log(15 < 10);
console.log(50 == "50");
console.log(50 === "50");
console.log(100 != "100");
console.log(100 !== "100");


// Question 8 - Logical Operators

console.log(10 > 5 && 20 > 15 || 5 > 10);

console.log(10 < 5 || 20 >= 20 && 5 == "5");

console.log(15 === "15" || 10 > 5 && 8 < 3);

console.log(20 >= 20 && 5 !== "5" || 10 < 5);

console.log(25 < 20 || 30 == "30" && 10 >= 10);


// Question 9 - Ternary Operator

let pass = true;

let result = pass ? "Login successful" : "Invalid password";

console.log(result);


// Question 10 - Type Casting

let x = "80";
let y = "70";

x = Number(x);
y = Number(y);

let sum = x + y;

console.log(sum);


// Question 11 - Voting Eligibility

let age3 = 20;

if (age3 >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


// Question 12 - Student Grade

let mark2 = 85;

if (mark2 > 100 || mark2 < 0) {
    console.log("Invalid Mark");
} else if (mark2 >= 90) {
    console.log("A Grade");
} else if (mark2 >= 75) {
    console.log("B Grade");
} else if (mark2 >= 50) {
    console.log("C Grade");
} else {
    console.log("Fail");
}


// Question 13 - Time Greeting

let time = 15;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Good Morning");
} else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");
} else if (time >= 16 && time <= 19) {
    console.log("Good Evening");
} else if (time >= 20 && time <= 24) {
    console.log("Good Night");
} else {
    console.log("Invalid Time");
}


// Question 14 - Nested If

let age4 = 22;
let height = 175;
let weight = 72;

if (age4 >= 21) {

    if (height >= 170) {

        if (weight >= 70) {
            console.log("You are eligible");
        } else {
            console.log("Weight is less than 70 kg");
        }

    } else {
        console.log("Height is less than 170 cm");
    }

} else {
    console.log("Age is less than 21");
}


// Question 15 - Switch

let light = "green";

switch (light) {

    case "red":
        console.log("Stop the vehicle");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light");
}