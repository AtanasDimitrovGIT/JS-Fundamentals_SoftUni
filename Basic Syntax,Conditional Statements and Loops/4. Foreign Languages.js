function check(input) {
    
    let countyName = input[0];

    if (countyName === "England" || countyName === "USA" ){
        console.log("English");
    }
    else if (countyName === "Spain" || countyName === "Argentina" || countyName === "Mexico"){
        console.log("Spanish");
    }
    else{
        console.log("unknown");
    }
}

check(["Spain"])