function check(input) {
    
    let numberOfMonth = Number(input[0]);

    if (numberOfMonth < 1 || numberOfMonth > 12){
        console.log("Error!");
        return;
    }

    if (numberOfMonth === 1){
        console.log("January");
    }
    else if (numberOfMonth === 2){
        console.log("February");
    }
    else if (numberOfMonth === 3){
        console.log("March");
    }
    else if (numberOfMonth === 4){
        console.log("April");
    }
    else if (numberOfMonth === 5){
        console.log("May");
    }
    else if (numberOfMonth === 6){
        console.log("June");
    }
    else if (numberOfMonth === 7){
        console.log("July");
    }
    else if (numberOfMonth === 8){
        console.log("August");
    }
    else if (numberOfMonth === 9){
        console.log("September");
    }
    else if (numberOfMonth === 10){
        console.log("October");
    }
    else if (numberOfMonth === 11){
        console.log("November");
    }
    else if (numberOfMonth === 12){
        console.log("December");
    }
    

}
check(["9"])