function storage(input) {

    let dict = new Map();
    
    for (let el of input){
        let tokens = el.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        
        if (dict.has(product)){
            let currentQuantity = dict.get(product);
            dict.set(product, quantity + currentQuantity);
        }
        else{
            dict.set(product, quantity);
        }
    }

    for (let [product, quantity] of dict){
        console.log(`${product} -> ${quantity}`);
    }
    
}
storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])