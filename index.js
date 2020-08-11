let fibonacci = (num) => {
    // Since the sequence starts from 0 and 1
    if (num === 1) {
        return [0, 1];
    }
    else {
        let series = fibonacci(num - 1);
        let i = series.length;
        series.push(series[i - 1] + series[i - 2]);
        return series;
    }
};
// Sample
console.log(fibonacci(5));