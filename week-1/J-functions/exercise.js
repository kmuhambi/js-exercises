function halve(number) {
  if (number == 0) {
    console.log("division by zero is impossible!");
    return 0;
  }

  return number / 2;
}

var result = halve(12);

console.log(result);
