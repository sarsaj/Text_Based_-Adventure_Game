import inquirer from "inquirer";
let enimies = ["Kissimissi", "BlackHugyWagy", "ScaryMomo"];
let maxenmyHealth = 75;
let enmyAttackDemagetoHero = 25;
let HeroHealth = 100;
let attackDemagetoenmy = 50;
let numHealthPortion = 3;
let healthPortionDropChance = 45;
let HealthPortionhealAmount = 30;
let gamingrun = true;
console.log("WelCome to Hell ");
game: while (gamingrun) {
    let enemyHealth = Math.floor(Math.random() * maxenmyHealth + 1);
    let enemyindex = Math.floor(Math.random() * enimies.length);
    let enemy = enimies[enemyindex];
    console.log(`# ${enemy}  has appeared #\n `);
    while (enemyHealth > 0) {
        console.log(`your Health ${HeroHealth}`);
        console.log(`${enemy} Heatlh : ${enemyHealth}`);
        let option = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What would you like to do",
            choices: ["1.attack", "2.Take Health portion", "3.Run"]
        });
        if (option.ans === "1.attack") {
            let attackDemagetoenmy = 50;
            let demagetoenmy = Math.floor(Math.random() * attackDemagetoenmy + 1);
            let demagetohero = Math.floor(Math.random() * enmyAttackDemagetoHero + 1);
            enemyHealth -= demagetoenmy;
            HeroHealth -= demagetohero;
            console.log(`you strike the ${enemy} for ${demagetoenmy}`);
            console.log(`${enemy}Strike you for ${demagetohero} demage`);
            if (HeroHealth < 1) {
                console.log(`you have taken too much demage. you are too weak to continue`);
                break;
            }
        }
        else if (option.ans === "2. Take Health Portion") {
            if (numHealthPortion > 0) {
                HeroHealth += HealthPortionhealAmount;
                numHealthPortion--;
                console.log(`you now have ${HeroHealth} health`);
                console.log(`you have ${numHealthPortion} Health potion left`);
            }
        }
        else if (option.ans === "3.Run") {
            console.log(`You run away from ${enemy}`);
            continue game;
            if (HeroHealth < 1) {
                console.log(`you are out from battle.you are too week`);
            }
            break;
            console.log(`${enemy}was deafted`);
            console.log(`you have ${HeroHealth}Health`);
            let rendomnumber = Math.floor(Math.random() * 100 + 1);
            if (rendomnumber < healthPortionDropChance) {
                numHealthPortion++;
                console.log(`enemy give you health portion`);
                console.log(`your health is ${HeroHealth}`);
                console.log(`yor health portion is ${numHealthPortion}`);
            }
            let userOption = await inquirer.prompt({
                name: "ans",
                type: "list",
                message: "What would you like to do",
                choices: ["1.continue", "2.Exit"]
            });
            if (userOption.ans === "1.continue") {
                console.log("You are continue on your adventure");
            }
            else {
                console.log("you successfully Exit from  Hell");
                break;
            }
            console.log("Thank you playing.\n");
        }
    }
}
// npx tsc --watch
