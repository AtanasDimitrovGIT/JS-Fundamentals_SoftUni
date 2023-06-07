function check(text, word) {

    while (text.includes(word)){
        text = text.replace(word, "*".repeat(word.length))
    }
    console.log(text)
}
check('A small sentence with some words',

'small')