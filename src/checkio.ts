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
    }, {count: 0, prevDirection: null}).count;
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
    {name: 'David', age: 34},
    {name: 'Eve', age: 30},
];

const groupByAge = people.reduce((acc, current) => {
    const age = current.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    (acc[age] as typeof people).push(current);
    return acc;
}, {} as Record<number, typeof people[]>);
console.log(Object.keys(groupByAge));
console.log(Object.values(groupByAge).length);
// 如何得到 groupByAge 数组的长度？
console.log(`The length of groupByAge is: ${Object.keys(groupByAge).length}`);
console.log(`The groupByAge is: ${JSON.stringify(groupByAge)}`);

console.log('--- 实现Promise链 ---');

function chainPromises<T>(functions: (() => Promise<T>)[]): Promise<T> {
    return functions.reduce(
        (acc, curr) => acc.then(curr),
        Promise.resolve() as Promise<any>
    );
}

// 使用示例
const asyncFunctions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    (prev: number) => new Promise(resolve => setTimeout(() => resolve(prev + 2), 1000)),
    (prev: number) => new Promise(resolve => setTimeout(() => resolve(prev * 3), 1000))
];

chainPromises(asyncFunctions).then(result => console.log(result));

console.log('--- 另一个分组统计 ---');

interface Person {
    name: string;
    age: number;
    department: string;
}

const employees: Person[] = [
    {name: 'Alice', age: 25, department: 'Engineering'},
    {name: 'Bob', age: 30, department: 'Engineering'},
    {name: 'Charlie', age: 25, department: 'Sales'},
    {name: 'David', age: 34, department: 'Sales'},
    {name: 'Eve', age: 30, department: 'Marketing'},
];
const departmentStats = employees.reduce((acc, current) => {
    if (!acc[current.department]) {
        acc[current.department] = {count: 0, totalAge: 0, averageAge: 0};
    }
    acc[current.department].count++;
    acc[current.department].totalAge += current.age;
    acc[current.department].averageAge = acc[current.department].totalAge / acc[current.department].count;
    return acc;
}, {} as Record<string, { count: number, totalAge: number, averageAge: number }>);
console.log(`The departmentStats is: ${JSON.stringify(departmentStats)}`);

console.log('--- 构建树状结构 ---');

interface TreeNode {
    id: string;
    name: string;
    parentId: string | null;
    children?: TreeNode[];
}

const flatNodes: TreeNode[] = [
    {id: '1', name: 'Root', parentId: null},
    {id: '2', name: 'Child 1', parentId: '1'},
    {id: '3', name: 'Child 2', parentId: '1'},
    {id: '4', name: 'Grandchild 1', parentId: '2'},
    {id: '5', name: 'Grandchild 2', parentId: '2'},
    {id: '6', name: 'Grandchild 3', parentId: '3'},
    {id: '7', name: 'Grandchild 4', parentId: '3'},
];

const buildTree = (nodes: TreeNode[]): TreeNode[] => {
    const nodeMap = nodes.reduce((map, node) => {
        map[node.id] = {...node, children: []};
        return map;
    }, {} as Record<string, TreeNode>);
    return Object.values(nodeMap).reduce((tree, node) => {
        if (node.parentId === null) {
            tree.push(node);
        } else {
            nodeMap[node.parentId].children?.push(node);
        }
        return tree;
    }, [] as TreeNode[]);
};
console.log(`The tree is: ${JSON.stringify(buildTree(flatNodes), null, 2)}`);

console.log('--- 复杂对象的转换 ---');

interface InputData {
    id: number;
    name: string;
    attributes: { key: string; value: any }[];
}

interface OutputData {
    id: number;
    name: string;

    [key: string]: any;
}

const input: InputData[] = [
    {
        id: 1, name: 'Alice', attributes: [
            {key: 'color', value: "red"},
            {key: 'size', value: 'large'}]
    },
    {
        id: 2, name: 'Bob', attributes: [
            {key: 'color', value: 'blue'},
            {key: 'weight', value: 5}]
    },
    {
        id: 3, name: 'Charlie', attributes: [
            {key: 'color', value: 'green'},
            {key: 'size', value: 'small'}]
    },
];

const output: OutputData[] = input.reduce((acc, item) => {
    const converted: OutputData = {
        id: item.id,
        name: item.name,
    }
    item.attributes.forEach(attr => {
        converted[attr.key] = attr.value;
    });
    acc.push(converted);
    return acc;
}, [] as OutputData[]);
console.log(output);
console.log(`The output is: ${JSON.stringify(output, null, 2)}`);


console.log('--- 链式操作的实现 ---');
class Chain<T> {
    constructor(private value: T) {}
    map<U>(fn: (value: T) => U): Chain<U> {
        return new Chain(fn(this.value));
    }
    reduce<U>(fn: (acc: U, values: T) => U, initialValue: U): Chain<U> {
        return new Chain(fn(initialValue, this.value));
    }
    result(): T {
        return this.value;
    }
}

const result = new Chain([1, 2, 3, 4, 5])
    .map(arr => arr.map(x => x * 2))
    .reduce((acc,arr) => acc + arr.reduce((sum, x) => sum + x, 0), 0)
    .map(total => `The total is: ${total}`)
    .result();
console.log(result);

console.log('--- 利用Map实现计数器 ---');
function countOccurrences(arr: string[]): Map<string, number> {
    const countMap = new Map<string, number>();
    for (const item of arr) {
        countMap.set(item, (countMap.get(item) || 0) + 1);
    }
    return countMap
}
// const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'orange', 'banana']
console.log(`The fruits are: ${JSON.stringify(fruits)}`);

console.log(`The count of fruits is: ${JSON.stringify(Array.from(countOccurrences(fruits)))}`);
const stringOfFruits = JSON.stringify(Object.fromEntries(countOccurrences(fruits)));
console.log(stringOfFruits.length, stringOfFruits);
const a = JSON.parse(stringOfFruits, (key, value) => value);
console.log(a, typeof a === 'object')