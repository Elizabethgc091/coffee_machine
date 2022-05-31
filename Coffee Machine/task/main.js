const input = require('sync-input')

const machine = {
    waterDisposable: 400,
    milkDisposable: 540,
    coffeeBeansDisposable: 120,
    teaBagsDisposable: 4,
    cupsDisposable: 9,
    moneyDisposable: 550,
}

let action;
do {
    action = input("Write action (buy, fill, take, remaining, exit):\n");
    switch (action) {
        case "buy" :
            buyCoffee();
            break;
        case "fill" :
            fillCoffeeMachine();
            break;
        case "take" :
            takeMoney();
            break;
        case "remaining":
            remaining();
            break;
        case "exit":
            break;
    }

} while (action !== "exit")


function buyCoffee() {
    let optionCoffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - tea back - to main menu:\n")
    switch (optionCoffee) {
        case '1' :
            if (isEnough(250, 0, 16)) {
                machine.waterDisposable -= 250;
                machine.coffeeBeansDisposable -= 16;
                machine.cupsDisposable -= 1;
                machine.moneyDisposable += 4;
            }
            break;

        case '2' :
            if (isEnough(350, 75, 20)) {
                machine.waterDisposable -= 350;
                machine.milkDisposable -= 75;
                machine.coffeeBeansDisposable -= 20
                machine.cupsDisposable -= 1;
                machine.moneyDisposable += 7;
            }
            break;
        case '3' :
            if (isEnough(200, 100, 12)) {
                machine.waterDisposable -= 200
                machine.milkDisposable -= 100;
                machine.coffeeBeansDisposable -= 12;
                machine.cupsDisposable -= 1;
                machine.moneyDisposable += 6;
            }
            break;
        case '4':
            if (isEnough(250, 0, 0, 1 )) {
                machine.waterDisposable -= 250;
                machine.teaBagsDisposable -= 1;
                machine.moneyDisposable += 8;
            }
            break;

        case "back" :
            break;
    }
}

function fillCoffeeMachine() {
    let waterAdd = Number(input("Write how many ml of water you want to add:\n"));
    let milkAdd = Number(input("Write how many ml of milk you want to add:\n"));
    let coffeeBeansAdd = Number(input("Write how many grams of coffee beans you want to add:\n"));
    let cupsDisposableAdd = Number(input("Write how many disposable coffee cups you want to add:\n"));

    machine.waterDisposable = machine.waterDisposable + waterAdd;
    machine.milkDisposable = machine.milkDisposable + milkAdd;
    machine.coffeeBeansDisposable = machine.coffeeBeansDisposable + coffeeBeansAdd;
    machine.cupsDisposable = machine.cupsDisposable + cupsDisposableAdd;
}

function takeMoney() {
    console.log(`I gave you $${machine.moneyDisposable}`)
    machine.moneyDisposable = 0;
}

function remaining() {
    console.log(`The coffee machine has:
${machine.waterDisposable} ml of water
${machine.milkDisposable} ml of milk
${machine.coffeeBeansDisposable} g of coffee beans
${machine.cupsDisposable} disposable cups
$${machine.moneyDisposable} of money\n`);
}

function isEnough(waterNeed, milkNeed, beansNeed, teaBags) {
    if (machine.waterDisposable < waterNeed) {
        console.log("Sorry, not enough water!")
        return false;

    } else if (machine.milkDisposable < milkNeed) {
        console.log("Sorry, not enough milk!")
        return false;

    } else if (machine.coffeeBeansDisposable < beansNeed) {
        console.log("Sorry, not enough coffee beans!")
        return false;

    } else if (machine.cupsDisposable < 1) {
        console.log("Sorry, not enough cups!")
        return false;

    } else if (machine.teaBagsDisposable < teaBags){
        console.log("Sorry, not enough tea bags!")

    }else {
        console.log("I have enough resources, making you a coffee!")
        return true;

    }

}
