function sumOfDigits(num) {
    let sum = 0;
    let digits = num.toString().split('');

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }
    console.log(sum);
}
sumOfDigits(97561)