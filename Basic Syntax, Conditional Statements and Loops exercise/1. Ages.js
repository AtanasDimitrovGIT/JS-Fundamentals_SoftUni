function check(age) {

    if (age < 0 || age > 66) {
        console.log("out of bounds")
        return;

    }

    else if (age >= 0 && age <= 2) {
        console.log("baby");
    }

    else if (age >= 3 && age <= 13) {
        console.log("child");
    }

    else if (age >= 14 && age <= 19) {
        console.log("teenager");
    }

    else if (age >= 20 && age <= 65) {
        console.log("adult");
    }

    else if (age >= 66) {
        console.log("elder");
    }





}
check(1)