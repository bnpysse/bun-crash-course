let getArray = (value: any, repeat: number): any[] => {
    return new Array(repeat).fill(value);
};

let arr = getArray('123', 5);

let res = arr.map(item => item.length);
console.log(res);
console.log(arr); // [1, 1, 1, 1, 1]

let getArray2 = <T>(value: T, repeat: number = 5): T[] => {
    return new Array(repeat).fill(value);
}

let arr2 = getArray2(3);
console.log(arr2.reduce((acc,item) => acc += item, 0)); // [3, 3, 3, 3, 3]
console.log(arr2); // ['123', '123', '123']

let arr3 = getArray2<number>(1, 3);
arr3.push('4');
console.log(arr3);

let getProps = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}

let obj = {name: 'John', age: 30, city: 'New York'};
console.log(getProps(obj, 'name')); // John
console.log(getProps(obj, 'age')); // 30
console.log(getProps(obj, 'city')); // New York
console.log(getProps(obj, 'job')); // undefined