const fibonacci = (num) => {
    if (num <= 0) {
      return 'Input number greater than or equal to 1';
    }
    if (typeof num != "number") {
      return "Input a number";
    }
    if (num === 1) {
        return 0;
    }
    if (num === 2) {
        return 1;
    }
    // Since the sequence starts from 0 and 1
    let a = 0;
    let b = 1;
    let c;
    let i = 2;

    while (i < num) {
        let c = a + b;
        a = b;
        b = c;
        i++;
    }
    return b;
}

// Sample
console.log(fibonacci(5));