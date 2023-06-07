function phoneBook(input) {
    let obj = {};
    
    for (let el of input) {
        let tokens = el.split(" ");
        let name = tokens[0];
        let number = tokens[1];
        obj[name] = number;
    }

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`)
    }
    

}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])