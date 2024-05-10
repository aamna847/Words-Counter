#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Display a Colorful Message.
console.log(chalk.bold.greenBright("\n \t\tCode With Aamna-Word Counter"));
console.log("=".repeat(60));
//Prompt the user to write a sentence.
let useranswers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence:"
    }
]);
//Trimming the sentence and splitting it into words based on "spaces".
//Trim is used for clearing whitespaces.
let words = useranswers.sentence.trim().split(" ");
//Analysis of user input sentence.
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Counter: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
