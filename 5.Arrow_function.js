/*
Arrow function - стрелочная функция
 */

//****************************************
//3 особенности:
// -синтакс arrow functions
// -REST оператор
// -механизм добавления дефолтных значений для аргументов функций

//Example 1 - default arguments
/*function greet(name = 'Katea', age = 19){
    return `Hello ${name}, your age is ${age}!`;
}
console.log(greet());*/

//Example 2 - arrow functions syntax
// () => {}
//const greet = (name, age) => `Hello ${name}, your age is ${age}!`;


//Example 3 - cases of syntax

// 1) Using name:
//стрелочная функция присваивается в переменную
/*const FUNC = () => {};

// 2) Default syntax:
 (a,b) => {
    let sum = a + b;
    return sum;
}

// 3) One argument:
//скобки (а) не нужны
a => {
     let sum = a + 1;
     return sum;
}

// 4) No arguments
//скобки вначале ставятся обязательно
() => {
    let sum = a + b;
    return sum;
}

// 5) If one line, don't need 'return':
//если один аргумент
a => a * 2;

//если два аргумента
(a,b) => a*b;

// 6) Object literal:
//чтобы вернуть литерал объекта, надо его обернуть в круглые скобки, если тело функции занимает 1 строку
//если имеет несколько строк, то оборачивать в круглые скобки литерал объекта не нужно
() => ({a:2});

// 7) IIFE
//анонимная самовызыв. функция
//внутри обьявлена стрелочная функция, ее помещаем внутрь круглых скобок и вызываем
(() => {null})();*/

//**********************************************************
//стрелочные функции нельзя использовать как конструктор объектов (с ними нельзя использовать оператор new)
//нету псевдомассива arguments
//с ними нельзя применять методы apply, bind, call


//Example 4 - context
//обьявили объект person
/*let person = {
    //определяем свойство userName и метод greet
    userName: 'Jack',
    greet: function() {
        window.setTimeout(() => {
            //выводим userName, а так же контекст вызова метода
            console.log(this.userName, this);
        }, 1000);
    }
};
//вызываем данный метод
person.greet();*/










