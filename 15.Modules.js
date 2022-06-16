/*
Modules - модуль, файл с кодом
*/

//****************************************Export***************
//2 вида export
export let one = 1;

let two = 2;
let three = 3;
export {two, three};

//могут быть экспортированы классы и функции

export class Person{
    constructor(name){
        this.name = name
    }
}

export function sayHello(){
    console.log('Hello!');
}

export{Person, sayHello}


//Rename
export {one as once, two as twice};


//***************************Import**********************

import{one, two} from './file.js';

//Rename import
import {one as num1, two as num2} from './file.js';

//One import
import * as numbers from './file.js';

//Default export
export default class Person{
    constructor(name) {
        this.name = name;
    }
}
import Person from './file.js';