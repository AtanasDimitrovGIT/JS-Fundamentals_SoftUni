function check(number, operator, anotherNumber) {

    let result = 0;

    if (operator === "+") {
        result = number + anotherNumber;
        console.log(result.toFixed(2));
    }

    else if (operator === "-") {
        result = number - anotherNumber;
        console.log(result.toFixed(2));
    }

    else if (operator === "*") {
        result = number * anotherNumber;
        console.log(result.toFixed(2));
    }

    else {
        result = number / anotherNumber;
        console.log(result.toFixed(2));
    }

}
check(25.5,

    '-',
    
    3)