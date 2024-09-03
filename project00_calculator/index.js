// Simple Command Line Calculator
// A simple command line calculator using TypeScipt, Node.js and Inquirer.
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Ensure the numbers are properly accessed from the answer object
const firstNumber = answer.firstNumber;
const secondNumber = answer.secondNumber;
if (answer.operator === "Addition") {
    console.log(firstNumber + secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(firstNumber - secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(firstNumber * secondNumber);
}
else if (answer.operator === "Division") {
    console.log(firstNumber / secondNumber);
}
else {
    console.log("Please select valid operators");
}
