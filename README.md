# cli-currency-converter
 This script is a currency converter tool implemented in Node.js using the 'inquirer' package for interactive command-line prompts.
Let's break down the functionality:

(1)Currency Conversion Function: currencyConvertion() is an asynchronous function that performs the currency conversion. It prompts the user for the currency they have, the amount, and the currency they want to convert to. Then, it calculates and displays the converted amount.
(2)Main Function: currencyConvertion2() is another asynchronous function that serves as the entry point. It calls currencyConvertion() to perform the initial conversion and then enters a loop where it continuously prompts the user if they want to convert more currency.
(3)Loop for Continuous Conversion: Inside the loop, it asks the user if they want to continue converting currency. If the user agrees, it calls currencyConvertion() again for another conversion. If not, it exits the loop and prints a thank you message.
(4)Currency Conversion Rates: The script defines conversion rates for various currencies in the currency object.
Overall, this script provides a simple and interactive way for users to convert currency with the ability to perform multiple conversions in a single session.


