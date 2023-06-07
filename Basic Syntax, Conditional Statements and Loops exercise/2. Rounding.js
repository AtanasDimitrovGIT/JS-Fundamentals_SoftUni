function check(rounding, precision) {

    if (precision > 15) {
        precision = 15
    }
    console.log(parseFloat(rounding.toFixed(precision)));
}
check(10.5, 3)