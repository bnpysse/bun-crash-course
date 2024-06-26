const higherOrder = (fn: (a: number, b: number) => number): (x: number, y: number) => number => (x, y) => {
  console.log(`Comparing ${x} and ${y}`);
  return fn(x, y);
};

const compareNumbers = (a: number, b: number): number => a - b;
const loggedCompare = higherOrder(compareNumbers);

const result = loggedCompare(10, 5);
console.log(result)
