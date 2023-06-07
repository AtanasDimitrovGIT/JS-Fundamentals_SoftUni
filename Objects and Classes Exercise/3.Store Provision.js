function storeProvision(stock, products) {

    let myStore = {};

    for (let i = 0; i < stock.length; i += 2){
        let name = stock[i];
        let quantity = stock[i + 1];
        myStore[name] = Number(quantity);


    }
    
    for (let i = 0; i < products.length; i += 2){
        let name = products[i];
        let quantity = Number(products[i + 1]);
        if (myStore.hasOwnProperty(name)){
            myStore[name] += quantity;
        }
        else {
            myStore[name] = quantity;5
        }
    }

   

    for (let product of Object.keys(myStore)){
        console.log(`${product} -> ${myStore[product]}`);
    }


    
}
storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])