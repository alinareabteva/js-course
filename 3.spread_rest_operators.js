/*
Spread and rest operators
 */

//****************************************
//Spread - оператор разворота
//Rest - оператор сворачивания

//*****************************************
//Spread

//Example 1 - сконкотенировать 2 массива в один
/*const num1 = [1,2,3,4];
const num2 = [5,6,7,8];

//Старый вариант
//Array.prototype.push.apply(num1, num2);

//Spread operator
console.log([...num1, ...num2]);*/


//Example 2 - есть 2 объекта, надо получить 3 объект С, который состоит из 2 уже созданных объектов
/*const A = {
    a: 'default',
    b: 'just_test'
}
const B = {
    a: 'value_fom_b'
}

//Старый вариант
//var c = Object.assign(A, B);

//Spread operator
let c = {
   ...A,
   ...B
}
console.log(c);*/


//Example 3 - есть массив с 3 элем. и есть функция, которая принемает значения и суммирует их
//нужно применить функцию sum к массиву arr

/*const arr = [1,2,3];
function sum(a,b,c){
    return a+b+c;
}

//Старый вариант
//sum(arr[0],arr[1],arr[2]);
//sum.apply(null, arr;)

//Spread operator
console.log(sum(...arr));*/

//*****************************************
//Rest

//Example 1
//к 1 значению можно обратится на прямую, а к остальным с помощью перебора массива
/*function  res(arg, ...REST){
    console.log(arg, REST);
}
res(1,2,3,4,5,6,7);*/

//к первым двум значениям можно обратится на прямую, а к остальным с помощью перебора массива
/*function  res(arg, arg2, ...REST){
    console.log(arg, arg2, REST);
}
res(1,2,3,4,5,6,7);*/

