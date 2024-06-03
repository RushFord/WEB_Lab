function findMin() {
  if (arguments.length === 0) {
      return undefined;
  }
  let minValue = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] < minValue) {
          minValue = arguments[i];
      }
  }
  return minValue;
}
console.log(findMin(12, 14, 4, -4, 0.2));