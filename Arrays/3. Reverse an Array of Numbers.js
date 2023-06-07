function check(n, array) {
    
    let newArray =[];
    for (let i = n - 1; i >= 0; i--) {
        let element = array[i];
        newArray.push(element);
        
    }
    console.log(newArray.join(" "))
}
check(3, [10, 20, 30, 40, 50])