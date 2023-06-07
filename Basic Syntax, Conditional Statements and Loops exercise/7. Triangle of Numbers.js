function check(number) {

    for (i = 1; i <= number; i++){
        let buffer = "";
        for (let y = 0; y < i; y++){
            buffer = buffer + i + " ";
        }
        console.log(buffer);
    }


}
check(3)