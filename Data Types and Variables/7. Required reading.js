function check(numberOfPages, pagesReadIn1Hour, numberOfDaysHeMustFinish) {

    let time = numberOfPages / pagesReadIn1Hour;
    let totalTime = time / numberOfDaysHeMustFinish;

    console.log(totalTime);
}
check(432,

    15 ,
    
    4)