/* This guess the number game is a short TypeScript/Node.js project that allows the user to guess the number
generated by the computer. There are also several ways to alter the game, like adding more rounds or displaying
the score. It’s quite simple and uses the random function to generate a number. */
import chalk from "chalk";
import inquirer from 'inquirer';
do {
    let number = Math.floor(Math.random() * 10);
    let answer = await inquirer.prompt([
        {
            type: "number",
            name: "user",
            message: "Write Your Number Betweem 1 to 10 "
        }
    ]);
    let { user } = answer;
    if (user === number) {
        console.log(chalk.bold.blueBright("Hurrah ...! You Win Choosing Correct Number"));
        process.exit();
    }
    else {
        console.log(chalk.bold.redBright("Sorry ...! You Lose Choosing Wrong Number"));
        console.log(chalk.bold("Correct Answer Is", number));
    }
} while (true);
// Program End
