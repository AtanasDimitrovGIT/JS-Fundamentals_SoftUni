function adressBook(input) {

    let object = {};

    for (let el of input){
        let tokens = el.split(":");
        let name = tokens[0];
        let adress = tokens[1];
        object[name] = adress
    }

    let entries = Object.entries(object).sort((a,b) => a[0].localeCompare(b[0]));

    for (let [name, adress] of entries){
        console.log(`${name} -> ${[adress]}`);
    }
    
}
adressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])