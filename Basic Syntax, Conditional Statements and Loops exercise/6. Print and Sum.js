function check(m, n) {

    let sum = 0;
    let buffer = "";
    for (i = m; i <= n; i++){
        buffer = buffer + i + " ";
        sum = sum + i;
    }
    console.log(buffer);
    console.log("Sum: " + sum);



}
check(5, 10)