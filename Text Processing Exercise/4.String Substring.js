function check(word, text) {

    let lowerCaseWord = word.toLowerCase();
    let lowerCaseText = text.toLowerCase();
    let words = lowerCaseText.split(" ");

    for (let i = 0; i < words.length; i++){
        let currentWord = words[i];
        if (currentWord === lowerCaseWord){
            console.log(word);
            return;
        }
        
    }
    console.log(`${word} not found!`);
    

}

check("javascript", "JavaScript is the best programming language"
)