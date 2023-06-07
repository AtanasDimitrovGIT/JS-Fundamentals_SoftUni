function check(input) {

    let name = input[0];
    let age = Number(input[1]);
    let grade = Number(input[2]);

    console.log(`Name: ${name}, Age: ${age}, Grade: ${(grade).toFixed(2)}`);
    
}
check(['John', "15", "5.54678"])