function check(words, text) {

    let wordsarr = words.split(", ");

    let textarr = text.split(" ");

    for (let word of wordsarr) {
        for (let i = 0; i < textarr.length; i++) {
            if (textarr[i].includes("*") && textarr[i].length === word.length) {
                textarr[i] = word;
            }

        }
        
    }
    console.log(textarr.join(" "));

}
check('great','softuni is ***** place for learning new programming languages')
