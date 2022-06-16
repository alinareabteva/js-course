/*
let, const, var
 */

//****************************************
//Define
//let-обычная переопределяемая переменная, пришел на смену var
//const-константа
//var-deprecated

// Локальная область видимости - внутри функции
// Глобальная область видимости - за рамками функции
//переменные, созданные с var, называются переменными с областью видимости в пределах функции


//******************************************
//Scope

//Выводит верно
/*if(true){
    var a='ES5';
}
console.log(a);*/

//Выдает ошибку
/*if(true){
    let a='ES5';
}
console.log(a);*/


//*******************************************
//Hoisting

//undefined
/*console.log(b);
var b = 5;*/

//*******************************************
//Example

//с замыканием
/*
var buttons = document.querySelectorAll('button');
for (var i=0; i<buttons.length; i++){
    var button = buttons[i];
    button.innerText = i;
    button.onclick = function (k){
        return function (){
            console.log(k);
        }
    }(i);
}
*/


//без замыкания
/*
var buttons = document.querySelectorAll('button');
for (let i=0; i<buttons.length; i++){
    var button = buttons[i];
    button.innerText = i;
    button.onclick = function (){
             console.log(i);
        }
}
*/

//*******************************************
//const

//Error
// const A = 5;
// A = 6;


const ARR = [1,2,3,4,5];
ARR.push(6);
console.log(ARR);

const OBJ = {
    es: 'ES6'
}
OBJ.es = 'ES7';
console.log(OBJ);

//если переменная переопределяется, то вызываем let
//если она постоянна, то вызываем const