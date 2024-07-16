function identity<T>(arg: T): T {
    return arg;
}

const result = identity<string>("Hello, World!");
console.log(result);
console.log(identity<number>(42));

function toArray<T>(arg: T): T[] {
    return [arg];
}
console.log(
    toArray("Hi!").map((x) => x.toUpperCase())
)
console.log(toArray(2).map((x) => (x * x * Math.PI).toFixed(2)));

