let getArray = (value: any, repeat: number): any[] => {
    return new Array(repeat).fill(value);
};

let arr = getArray('123', 5);

let res = arr.map(item => item.length);
console.log(res);
console.log(arr); // [1, 1, 1, 1, 1]<|endoftext|>