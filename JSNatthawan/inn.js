const myName = 'Natthawan';
let height = 154;
let isFemale = true;
let city = null;
let bigNumber = 10n;
console.log(myName,height,isFemale,city,bigNumber);

const person ={
    name :'Natthawan',
    height : 154,
    city : 'Nonthaburi'
};
console.log(person.name);

person.height = 168;

console.log(person)
person.weight = 75;

const numbers = [5,10,15,20];
console.log(numbers[0]);

numbers.push(25);

console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(19);
console.log(numbers);

numbers.shift();
console.log(numbers);

