function check(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
        
    }
    console.log(array.join(" "));
}
check(['a', 'b', 'c', 'd', 'e'])