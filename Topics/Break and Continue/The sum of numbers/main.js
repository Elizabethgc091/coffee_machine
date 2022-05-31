function sum(numbers) {
    let suma = 0;
    for (const number of numbers) {
       if (number === 0) {
            break;
        } else {
           suma = suma + number;
        }
    }
    return suma;
}
