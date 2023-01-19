// the Array.prototype.map() method to create a new array with each element multiplied by 2:

const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.map(x => x * 2);

console.log(doubledNumbers); 


// The following example uses the Array.prototype.filter() method to create a new array with only the odd numbers:

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(x => x % 2 !== 0);

console.log(oddNumbers); 


// The following example uses the Array.prototype.reduce() method to sum all elements in an array:

const numbers2 = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); // Output: 15 

// The following example uses the Array.prototype.sort() method to sort an array of objects by the value of a property:

const people = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 25 },
];

const sortedPeople = people.sort((a, b) => a.age - b.age);

console.log(sortedPeople);
// Output: [{ name: 'John', age: 20 }, { name: 'Bob', age: 25 }, { name: 'Jane', age: 30 }]


// The following example uses the Array.prototype.find() method to find the first object in an array that satisfies a given condition:

const people = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 25 },
];

const person = people.find(person => person.age === 25);

console.log(person);
