/*
Цикл for...of - получение значений элементов итерируемой сущности
Iterators - объекты, содержимое которых можно перебрать в цикле
Generator - генератор (некая функция, которая выполняясь может в нек. момент остановиться
и вернуть промежуточный результат.
 */

//****************************************For...of************************

// const names = ['Jack', 'Max', 'Leo'];
//
// //отображаются ключи массива
// for(let name in names){
//    // console.log(name);
// }
//
// //отображается список имен
// for(let index in names){
//     //console.log(names[index]);
// }
//
// //отображается список имен в цикле for...of
// for(let name of names){
//     console.log(name);
// }




//*****************************************Iterator***************
// let names = ['Jack', 'Max', 'Leo'];
//
// for(let name of names){
//     console.log(name);
// }


//объект
// let generateNumbers = {
//     start: 1,
//     end: 10
// }
//
// generateNumbers[Symbol.iterator] = function (){
//     let current = this.start;
//     let last = this.end;
//
//     return {
//         //метод next - при каждом вызове проверяет очередное значение и проверяет, окончен ли перебор
//         next(){
//             if(current <= last){
//                 return {
//                     done: false,
//                     value: current++
//                 }
//             } else{
//                 return{
//                     done: true
//                 }
//             }
//         }
//     }
//
// }
//
// for(let number of generateNumbers){
//     console.log(number);
// }



//**********************************Generators*****************************
//добавляется * перед именем функции

// function *generate(){
//     console.log('first step');
//     //возвращает промежуточные данные функции генератора и отдает контроль над функцией
//     yield 1;
//     yield 2;
//     console.log('second step');
// }

// function *generate(){
//     console.log('first step');
//     //возвращает промежуточные данные функции генератора и отдает контроль над функцией
//     let res = (yield) *2;
//     console.log('Result', res);
// }


// function *generate(){
//     try{
//         yield 1;
//         yield 2;
//         yield 3;
//     } catch (err){
//         console.log('Custom error: ', err);
//     }
// }
//
//
// let iterator = generate();
// console.log(iterator.next());
// //console.log(iterator.return());
// console.log(iterator.throw(new Error('some error..')));
// console.log(iterator.next());
// //console.log(iterator);


/*
function *generateRange(start, end){
    let current = start;
    while(current <= end){
        yield current++;
    }
}

for(let number of generateRange(1, 10)){
    console.log(number);
}
*/




//функция generate может быть объявлена в объекте => она становится методом
let object = {
    *generateRange(start, end){
        let current = start;
        while(current <= end){
            yield current++;
        }
    }
}

for(let number of object.generateRange(1, 10)){
    console.log(number);
}
