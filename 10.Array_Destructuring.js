/*
Array Destructuring - деструктивное присваивание массивов
помогает присваивать несколько значений из массива или объекта в переменные
 */

/*
Object Destructuring - деструктивное присваивание объектов

 */

//****************************************

//const people = ['Jack', 'Max', 'Leo'];

// let jack = people[0];
// let max = people[1];
// let leo = people[2];

//let[jack, max, leo] = people;

//let[jack, max, leo] =['Jack', 'Max', 'Leo'];

//console.log(jack, max, leo);


//******************************************
//вложенный массив
//const rate = [1, 50, 100, [1000, 2000]];

//let[low, middle, high, higher = 1000] = rate;
//let[low, middle, high, [higher, sup]] = rate;

//console.log(low, middle, high, higher, sup);


//*************************************
// function calculate([a,b]){
// //console.log(a,b);
//
//     return [a,b];
// }
// //calculate([1,10]);
//
// let [a,b] = calculate([1,10]);
//
// console.log(a,b);


//**************************************
//присваивание объектов
let person = {
    name: 'Jack',
    age: 20,
    address:{
        city: 'Chisinau'
    }
}

//let {name, age} = person;
//let {name = 'Max', age = 23} = {};

//let {name: personName, age: personAge} = person;

//let {address: {city = 'Balti'}} = person;

//console.log(name, age);
//console.log(personName, personAge);
//console.log(city);



function getData({name, age}){
    //console.log(name, age);
    return{name, age}


}

//getData(person);
let {name,age} = getData(person);
console.log(name,age);