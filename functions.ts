const higherOrder = (fn: (a: number, b: number) => number): (x: number, y: number) => number => (x, y) => {
  console.log(`Comparing ${x} and ${y}`);
  return fn(x, y);
};

const compareNumbers = (a: number, b: number): number => a - b;
const loggedCompare = higherOrder(compareNumbers);

const result = loggedCompare(10, 5);
console.log(result)

interface Person {
  name: string;
  age: number;
  hobbies: string[]
}

const people: Person[] =[
  {name: 'Alice', age:25, hobbies:['reading', 'painting']},
  {name: 'Bob', age:30, hobbies:['gaming', 'cooking']},
  {name: 'Charlie', age: 35, hobbies:['sport', 'traveling']}
];

for( let i=0; i<people.length; i++){
  console.log(`Name: ${people[i].name}`);
  console.log(`Age: ${people[i].age}`);
  console.log(`Hobbies: ${people[i].hobbies.join(', ')}`);
  console.log('---')
}

for (const person of people) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Hobbies: ${person.hobbies.join(', ')}`);
  console.log('----');
}
interface Dictionary{
  [key:string]:string | number;
}

function countProperties(arr: Dictionary[]): number {
    return arr.reduce((count, item) => count + Object.keys(item).length, 0);
}

// 使用示例
const dictArray: Dictionary[] = [
    { a: 1, b: 1, c:32 },
    { c: 3, d: 4, e: 5 }
];

const totalProperties = countProperties(dictArray);
console.log(`总属性数: ${totalProperties}`);


function traverseDictionaryArray(arr: Dictionary[]): void {
    for (const index in arr) {
        const item = arr[index];
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                console.log(`索引: ${index}, 键: ${key}, 值: ${item[key]}`);
            }
        }
    }
}

// 使用示例
const dictArray1: Dictionary[] = [
    { name: "老张", age: 50 },
    { name: "老李", position: "经理" }
];

traverseDictionaryArray(dictArray1);

console.log('-----------------')

for (let index in dictArray1) {
  let item = dictArray1[index];
  console.log(`索引: ${index}: `)
  for (let key in item){
    if (item.hasOwnProperty(key)) {
      console.log(`键: ${key}, 值: ${item[key]}`)
    }
  }
}
console.log('----Map----');
const result1 = 
dictArray1.map(item=>
  Object.entries(item)
  .map(([key,value]) => `${key}: ${value}`)
  .join(';')
);
console.log(result1);

