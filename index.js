const fibonacci = (num) => {

  if (typeof num != "number") {
    return "Input a number";
  }

  if (num <= 0) {
    return 'Input number greater than or equal to 1';
  }

  if (num == 1) {
    return '0';
  }

  // Since the sequence starts from 0 and 1
  let a = 0;
  let b = 1;
  let c;
  let i = 2;
  let result = "0 1";
  
  while (i < num) {
      let c = a + b;
      result += " " + c;
      a = b;
      b = c;
      i++; 
  }
  
  return result;
}

console.log(fibonacci(10));