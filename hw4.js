function returnReversedArray(newStr) {
    if (newStr.includes("(")) {
        newStr = newStr.replace('(', '');
    }
    if (newStr.includes(")")) {
        newStr = newStr.replace(')', '');
    }
    let newArr = newStr.split('-');
    newArr = newArr.map(x => parseInt(x, 10));
    return newArr.reverse();
}

let a = "(11-15-1994)";
console.log(returnReversedArray(a));
let b = "11-15-1994";
console.log(returnReversedArray(b));
