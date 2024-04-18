#! /usr/bin/env node;
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    BGP: 0.76,
    INR: 74.57,
    PKR: 280
};
const currencyConvertion = async () => {
    const userInput = await inquirer.prompt([{
            message: "What Currency Do you Have To Change", type: "list", name: "have_curency", choices: ["USD", "EUR", "BGP", "INR", "PKR"]
        },
        {
            message: "How Much Amount DO You Want To Change ", type: "number", name: "amount"
        },
        {
            message: "What Currency Do You Want", type: "list", name: "want_curency", choices: ["USD", "EUR", "BGP", "INR", "PKR"]
        },
    ]);
    let user_have = currency[userInput.have_curency];
    let user_want = currency[userInput.want_curency];
    let user_amount = userInput.amount;
    const base_curr = user_amount / user_have;
    const convert_Curr = base_curr * user_want;
    console.log(Math.floor(convert_Curr));
};
const currencyConvertion2 = async () => {
    await currencyConvertion();
    let condition = true;
    while (condition) {
        const reStartOption = await inquirer.prompt({ message: "Could You Convert More currency", type: "confirm", name: "askToContinu", default: "false" });
        if (reStartOption.askToContinu) {
            console.log("You can convert Your Currency Again");
            await currencyConvertion();
        }
        else {
            console.log("Thanks For Using our Services");
        }
        condition = reStartOption.askToContinu;
    }
    ;
};
currencyConvertion2();
