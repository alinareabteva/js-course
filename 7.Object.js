/*
Object
 */

//****************************************

let name = 'Alina';
let sex = 'female';
let age = 23;

//Старая версия
/*var person = {
    name: name,
    sex: sex,
    age: age
}*/

//если имя свойства совпадает с именем, присваеваемой ему переменной, то значение можно указать 1 раз
let person = {
    name,
    sex,
    age,
    greet() {
        console.log(`Hello ${this.name}`);
    },
    get:password(){
    return this.name + this.age;
    }
}

//к методу можно обратиться 2 способами: через точку или квадратные скобки
person.name;
person['name'];

//если имя свойства присвоенно в переменную, то внутри квадратных скобок можно указать не строку, а имя переменной
let firstName = 'name';
person[firstName];

//создание динамеческого ключа для свойства обьекта
/*person = {
    [firstName]: 'Kolea'
}*/

console.log(person);













