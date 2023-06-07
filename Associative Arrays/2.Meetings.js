function meetings(input) {

    let object = {};

    for (let el of input){
        let token = el.split(" ");
        let day = token[0];
        let name = token[1];
        

        if (object.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }
        else{
            object[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (key in object){
        console.log(`${key} -> ${object[key]}`);
    }
    
}
meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])