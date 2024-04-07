import inquirer from "inquirer"

const answers = await inquirer.prompt([{
    message: "Please enter first number",
    name: "number1",
    type: "number"
},
{
    message: "Please enter second number",
    name: "number2",
    type: "number"
},
{
    message: "Please enter required operator",
    name: "operator",
    type: "list",
    choices: ["+", "-", "*", "/"]
}])

if(answers.operator === "+"){
    console.log(answers.number1 + answers.number2)
}
else if(answers.operator === "-"){
    console.log(answers.number1 - answers.number2)
}
else if(answers.operator === "*"){
    console.log(answers.number1 * answers.number2)
}
else if(answers.operator === "/"){
    console.log(answers.number1 / answers.number2)
}
else 
{
    console.log("Invalid operator")
}