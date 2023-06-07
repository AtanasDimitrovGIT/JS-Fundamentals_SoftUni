function school(input) {

    let dict = new Map();

    for (let el of input){
        let tokens = el.split(" ");
        let name = tokens[0];
        for (let i = 1; i < input.length; i++){
            let grade = Number[i].split(" ");

            if (dict.has(name)){
                let currentGrade = dict.get(grade);
                dict.set(name, currentGrade + grade);
            }
            else{
                dict.set(name, grade);
            }
        }

        
    }
    
    
}
school(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])