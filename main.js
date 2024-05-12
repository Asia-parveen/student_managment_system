import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to enrolled ",
        choices: ["python", "typescript", "javascript", "Ms office", "HTML"],
    }
]);
const tutionFee = {
    "python": 10000,
    "typescript": 6000,
    "javascript": 5000,
    "Ms office": 4000,
    "HTML": 3000
};
console.log(`\n tution Fees: ${tutionFee[answer.courses]}/-\n `);
console.log(`Balance: ${myBalance} \n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "select payment method",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"],
    },
    {
        name: "amount",
        type: "input",
        message: "transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return " please enter a non-empty value.";
        },
    }
]);
console.log(`\nyou select payment method: ${paymentType.payment}\n`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`congratulations, you have successfuly enrolled in ${answer.courses}.\n `);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you do next?",
            choices: ["view status", "Exit"],
        }
    ]);
    if (ans.select === "view status") {
        console.log("\n********status********\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log(`Exiting student mangement system \n`);
    }
}
else {
    console.log(`Invalid amount due to course.\n`);
}
