function check(numberOfPeople, typeOfGroup, dayOfTheWeek) {

    let price = 0;

    if (typeOfGroup === "Students") {
        switch (dayOfTheWeek) {
            case "Friday":
                if (numberOfPeople >= 30) {
                    price = (numberOfPeople * 8.45) - (numberOfPeople * 8.45) * 0.15;
                }
                else {
                    price = numberOfPeople * 8.45;
                }
                break;
            case "Saturday":
                if (numberOfPeople >= 30) {
                    price = (numberOfPeople * 9.80) - (numberOfPeople * 9.80) * 0.15;
                }
                else {
                    price = numberOfPeople * 9.80;
                }
                break;
            case "Sunday":
                if (numberOfPeople >= 30) {
                    price = numberOfPeople * 10.46 - (numberOfPeople * 10.46) * 0.15;
                }
                else {
                    price = numberOfPeople * 10.46;
                }
                break;

            default:
                break;
        }
    }

    if (typeOfGroup === "Business") {
        switch (dayOfTheWeek) {
            case "Friday":
                if (numberOfPeople >= 100) {
                    price = (numberOfPeople * 10.90) - (10 * 10.90);
                }
                else {
                    price = numberOfPeople * 10.90;
                }
                break;
            case "Saturday":
                if (numberOfPeople >= 100) {
                    price = numberOfPeople * 15.60 - (10 * 15.60);
                }
                else {
                    price = numberOfPeople * 15.60;
                }
                break;
            case "Sunday":
                if (numberOfPeople >= 100) {
                    price = numberOfPeople * 16 - (10 * 16);
                }
                else {
                    price = numberOfPeople * 16;
                }
                break;

            default:
                break;
        }
    }

    if (typeOfGroup === "Regular") {
        switch (dayOfTheWeek) {
            case "Friday":
                if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                    price = (numberOfPeople * 15) - (numberOfPeople * 15) * 0.05;
                }
                else {
                    price = numberOfPeople * 15;
                }
                break;
            case "Saturday":
                if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                    price = (numberOfPeople * 20) - (numberOfPeople * 20) * 0.05;
                }
                else {
                    price = numberOfPeople * 20;
                }
                break;
            case "Sunday":
                if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                    price = numberOfPeople * 22.50 - (numberOfPeople * 22.50) * 0.05;
                }
                else {
                    price = numberOfPeople * 22.50;
                }
                break;

            default:
                break;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
check(30,

    "Students",

    "Sunday")