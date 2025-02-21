#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter number", type: "number", name: "firstNumber" },
    { message: "Enter number", type: "number", name: "secondNumber" },
    {
        message: "select operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division", "exponent"],
    },
]);
// conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "exponent") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else {
    console.log("ERROR");
}
