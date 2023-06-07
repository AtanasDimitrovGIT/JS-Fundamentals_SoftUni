function check(input) {

    let dayOfWeek = input[0];
    let age = Number(input[1]);
    let priceOfTicket = 0;

    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }

    if (age => 0 && age <= 18) {
        if (dayOfWeek === "Weekday") {
            priceOfTicket = 12;
            console.log(priceOfTicket + "$");
        }
        else if (dayOfWeek === "Weekend") {
            priceOfTicket = 15;
            console.log(priceOfTicket + "$");
        }
        else if (dayOfWeek === "Holiday") {
            priceOfTicket = 5;
            console.log(priceOfTicket + "$")
        }
    }

    if (age > 18 && age <= 64) {
        if (dayOfWeek === "Weekday") {
            priceOfTicket = 18;
            console.log(priceOfTicket + "$");
        }
        else if (dayOfWeek === "Weekend") {
            priceOfTicket = 20;
            console.log(priceOfTicket + "$");
        }
        else if (dayOfWeek === "Holiday") {
            priceOfTicket = 12;
            console.log(priceOfTicket + "$")
        }
    }

    if (age > 64 && age <= 122) {
        if (dayOfWeek === "Weekday") {
            priceOfTicket = 12;
            console.log(priceOfTicket + "$");
        }
        else if (dayOfWeek === "Weekend") {
            priceOfTicket = 15;
            console.log(priceOfTicket + "$");
        }
        else if (dayOfWeek === "Holiday") {
            priceOfTicket = 10;
            console.log(priceOfTicket + "$")
        }
    }

}
check(['Weekday',

"42"])