/*
Symbols - новый примитивный тип данных
уникальное и неизменное значение, которое помогает решить проблеиму конфликта имен свойств
 */

//****************************************
//создать 2 одинаковых символа невозможно
//let symbol = Symbol('mySymbol');
//let symbol2 = Symbol('mySymbol');

//for
// let symbol = Symbol. for('mySymbol');
// //let symbol2 = Symbol. for('mySymbol');
//
// //keyFor-можно получить имя символа
// let symbolName = Symbol. keyFor(symbol);
//
// //console.log(symbol === symbol2);
// //console.log(symbol);
// console.log(symbolName);


//****************************************
let person = {
    name: 'Jack',
    age: 23,
    //сво-во password
    [Symbol.for('password')]: 'Jack23',
    [Symbol.for('nickname')]: 'Freeman'
}

//console.log(person[Symbol.for('password')]);

//метод, который помогает просмотреть все символы у объекта
console.log(Object.getOwnPropertySymbols(person));