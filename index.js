#! /usr/bin/env node
import inquirer from "inquirer";
//asking questions from users through inquirer
const calculator = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
//conditional statements if-else
if (calculator.operator === "Addition") {
    console.log(calculator.firstNumber + calculator.secondNumber);
}
else if (calculator.operator === "Substraction") {
    console.log(calculator.firstNumber - calculator.secondNumber);
}
else if (calculator.operator === "Multiplication") {
    console.log(calculator.firstNumber * calculator.secondNumber);
}
else if (calculator.operator === "Division") {
    console.log(calculator.firstNumber / calculator.secondNumber);
}
else {
    console.log("Invalid Input");
}
