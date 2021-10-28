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

let result = 10+2;
console.log(result);

let result1 = 10/2;
console.log(result1);

let result2 = 5%2; //หารเอาเศษ show fraction in console 
console.log (result2);

let result3 = 3**2;
console.log(result3);//ยกกำลัง

let result4 = 10+(5*2)/3; //before * / + - same will think left>right
console.log(result4);

//incase want think+-before you can ()
let result5 = (2+5)/2;
alert(result5);


