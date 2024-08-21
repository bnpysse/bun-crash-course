import assert from "assert";

function betweenMarkers(text: string, begin: string, end: string): string {
    return text.slice(text.indexOf(begin) + 1, text.lastIndexOf(end));
}
console.log("Example:");
console.log(betweenMarkers("What is >apple<", ">", "<"));

// These "asserts" are used for self-checking
assert.strictEqual(betweenMarkers("What is >apple<", ">", "<"), "apple");
assert.strictEqual(betweenMarkers("What is [apple]", "[", "]"), "apple");
assert.strictEqual(betweenMarkers("What is ><", ">", "<"), "");
assert.strictEqual(betweenMarkers("[an apple]", "[", "]"), "an apple");

console.log("在文本中查找两个字符之间的串");
function reverseDigits(num: number): number {
    // your code here
    return Number(Math.abs(num).toString().split('').reverse().join('')) * Math.sign(num);
}

console.log("Example:");
console.log(reverseDigits(32));

// These "asserts" are used for self-checking
assert.strictEqual(reverseDigits(1234), 4321);
assert.strictEqual(reverseDigits(0), 0);
assert.strictEqual(reverseDigits(-123), -321);
assert.strictEqual(reverseDigits(5), 5);
assert.strictEqual(reverseDigits(-9), -9);
assert.strictEqual(reverseDigits(100), 1);
assert.strictEqual(reverseDigits(-100), -1);
assert.strictEqual(reverseDigits(54321), 12345);
assert.strictEqual(reverseDigits(1111), 1111);
assert.strictEqual(reverseDigits(987654321), 123456789);

console.log("翻转数字的各个位上面的数字。");


function changingDirection(arr: number[]): number {
    // your code here
    return arr.slice(1).reduce((acc: { count: number; prevDirection: number | null }, current, index) => {
        const prev = arr[index];
        if (current === prev) {
            return acc; // Skip equal elements
        }
        const direction = Math.sign(current - prev);
        if (acc.prevDirection !== null && direction !== acc.prevDirection) {
            acc.count++;
        }
        acc.prevDirection = direction; // Update the last direction
        return acc;
    }, { count: 0, prevDirection: null }).count;
}

console.log("Example:");
console.log(changingDirection([1, 2, 3, 4, 5]));

// These "asserts" are used for self-checking
assert.strictEqual(changingDirection([1, 2, 3, 4, 5]), 0);
assert.strictEqual(changingDirection([1, 2, 3, 2, 1]), 1);
assert.strictEqual(changingDirection([1, 2, 2, 1, 2, 2]), 2);

console.log("查找数组中大小变化的次数。");

console.log('--- array.reduce() ---');
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(`The sum of ${JSON.stringify(numbers)} is: ${sum}`);

console.log('--- 计算数组中的每个元素出现的次数 ---');
const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'orange', 'banana'];
const count = fruits.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
}, {});
console.log(`The count of ${JSON.stringify(fruits)} is: ${JSON.stringify(count)}`);

console.log('--- 数组扁平化 ---');
const nestedArray = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
const flattened = nestedArray.reduce((acc, current) => acc.concat(current), []);
console.log(`The flattened array is: ${JSON.stringify(flattened)}`);

console.log('--- 按条件分组 ---');
const people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 25},
    {name: 'David', age: 30},
    {name: 'Eve', age: 30},
];

const groupByAge = people.reduce((acc, current) => {
    const age = current.age;
    if(!acc[age]) {
        acc[age] = [];
    }
    (acc[age] as typeof people[]).push(current);
    return acc;
}, {} as Record<number, typeof people[]>);
console.log(Object.keys(groupByAge));
console.log(Object.values(groupByAge).length);
// 如何得到 groupByAge 数组的长度？
console.log(`The length of groupByAge is: ${Object.keys(groupByAge).length}`);
console.log(`The groupByAge is: ${JSON.stringify(groupByAge)}`);
