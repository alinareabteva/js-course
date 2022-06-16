/*
Коллекции
Set - коллекция для хранения множества значений и кажд. значение уникально
Map - коллекция для хранения записей, вида ключ-значение, ключом может быть произвольное значение
 */

//****************************************
//Map
//let map = new Map();

// map.set('str', 'string');
// map.set(1, 'number');
// map.set(true, 'boolean');

//сокращенный синтаксис
/*
map
    .set('str', 'string')
    .set(1, 'number')
    .set(true, 'boolean');

console.log(map.get(1));
console.log(map.get(true));
console.log(map.size);
*/


/*
let map = new Map([
    ['str', 'string'],
    [1, 'number'],
    [true, 'boolean']
])

// console.log(map.get(1));
// console.log(map.get(true));
// console.log(map.size);
//
// //метод has - принемает значение ключа и в зависимости от рез. возвр. булевое значение
// console.log(map.has(1));


//delete - удаляет запись с переданным аргументом или ключом (возвр. true, если такая запись была найдена)
console.log(map.delete(1));
console.log(map.size);
//clear - удаляет все записи
console.log(map.clear());
console.log(map.size);
*/


//iteration
//keys() - возвр. итерируемый объект для ключей
// values() - - возвр. итерируемый объект для значений
// entries()- возвр. итерируемый объект для записей ключ-значение



//***************************************************
//Set

let jack = {name: 'Jack'};
let max = {name: 'Max'};
let leo = {name: 'Leo'};

let users = new Set();

//в коллекции будет 3 юзера, только уникальные
users
    .add(jack)
    .add(max)
    .add(leo)
    .add(jack)
    .add(max)

console.log(users.size);
users.forEach(user => console.log(user));

//Methods
//add() - добавляет в коллекцию элемент
//delete(item) - удаляет элемент из коллекции и возв. true если он там был
//has(item) - возв. true, если элемент в коллекции есть
//clear() - очищает коллекцию

//WeackMap и WeackSet - не препятствуют сборщику мусора удалять свои элементы