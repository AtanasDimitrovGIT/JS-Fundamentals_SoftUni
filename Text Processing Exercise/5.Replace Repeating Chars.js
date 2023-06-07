function check(input) {

    let result = "";
    let lastChar = "";

    for (let i = 0; i < input.length; i++){
        let currentChar = input[i];
        if (currentChar !== lastChar){
            result = result + currentChar;
            lastChar = currentChar;
        }
    }
    console.log(result);
}

check('aaaaabbbbbcdddeeeedssaa')