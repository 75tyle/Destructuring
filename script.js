// Accesing object the old way

let person = {
    firstname: 'Sanghpal',
    lastname: 'Kamble'
}
let personFirstName = person.firstname;
let personLastName = person.lastname;
console.log(personFirstName)
console.log(personLastName)

// Acessing object the new way

// let {firstname,lastname} = person;
// console.log(firstname)
// console.log(lastname)

// We can also rename the variables with new way

let {firstname:fname, lastname:lname} = person;
console.log(fname)
console.log(lname)

// what happens if you destruct a propert that does not exist

// let {firstname,lastname,middlename} = person;
// console.log(middlename)  // undefined

// Setting default values in destructuring

let {firstname,lastname,middlename = 'Rajendra'} = person;
console.log(middlename)

// Destructuring in Array 

const arr = [1,2,3];

// Prior to ES6 when you want to assign the elements of the arrays to variables, 
// to typically do it like this :

// let x = arr[0];
// let y = arr[1];
// let z = arr[2];

// console.log(x);
// console.log(y);
// console.log(z);

// But now ES6 introduces the array destructuring that provides the alternative way 
// to assign the elements of an array to the variables

let [x,y,z] = arr;
console.log(x);
console.log(y);
console.log(z);

// let see the another example

let [a,b,c,d] = [1,2,3,4];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// skiping items when array destructuring 

const arrValue = ['one','two','three'];

// destructuring assignments in arrays

const [p,,q] = arrValue;
console.log(p);
console.log(q);

// Assigning remaing elments to a single variable 

// u can assign the remaining variables to a single variable using spread syntax `...`

const names = ['jhon','ben','rock','peter'];

// destructuring assignments in arrays
// assigning remaining elements in y
const [s,...r] = names;
console.log(s);
console.log(r);

// this tricks work in object too

const personDetails = {
    name: 'sanghpal',
    age: 20,
    gender: 'male'
}

let {name, ...g} = personDetails;
console.log(name);
console.log(g);

// In this example , two variables are swaped using destructuring syntax

let name1 = 'jay';
let name2 = 'ray';

// swapping variables

[name1,name2] = [name2,name1]

console.log(name1);
console.log(name2);