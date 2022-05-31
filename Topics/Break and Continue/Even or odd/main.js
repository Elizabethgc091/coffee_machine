function checkEvenOrOdd(numbers) {
    for (const number of numbers) {
        if (number === 0){
            break;
        }
        if (number % 2 === 0) {
            console.log("even");
        }else {
            console.log("odd");
        }
    }
}