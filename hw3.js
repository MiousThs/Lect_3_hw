function enterYourAge() {
    return prompt("Type your age");
}

function isAccesPermitted(age) {
    if (age < 18) {
        throw new Error("You are not permitted to enter");
    } else if (age >= 18) {
        console.log("Welcome");
        return true;
    }
}

function isExtraEnabled(permission) {
    if (permission) {
        return prompt("You want to rent a car? --> Type yes");
    }
}

function choiceCar(extra) {
    if (extra == 'yes') {
        let choiceCar = ['A', 'B', 'C', 'D'];
        return prompt("Choose a car: " + choiceCar);
    }
}

let age = enterYourAge();
let permission = isAccesPermitted(age);
let extra = isExtraEnabled(permission);
let car = choiceCar(extra);
//     let car = choiceCar(isExtraEnabled(isAccesPermitted(enterYourAge())));
console.log("Your car is: " + car);
