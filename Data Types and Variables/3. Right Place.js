function check(text, charToChange, targetText) {
    
    
    let newString = "";
    for (let i = 0; i < text.length; i++) {
        if(text[i] === `_`){
            newString = newString + charToChange;
        } else {
            newString = newString + text[i];
        }
        
    }

    console.log(newString === targetText ? "Matched" : "Not Matched" )
}
check('Str_ng', 'I',

'Strong')