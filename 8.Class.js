/*
Class - это шаблон по которому создаются объекты
 */

//****************************************


class Task {
    constructor(title = Task.getDefaultTitle(), isCompleted = false) {
       //свойство
        this.title = title,
            //get isCompleted не должен совпадать
            this._isCompleted = isCompleted,
            Task.counter += 1
    }

    //статический метод
    static getDefaultTitle() {
        return 'Title text';
    }
    //метод
    completed() {
        this.isCompleted = true;
    }

    //название метода не должен совпадать с названием в конструкторе
    get isCompleted() {
        return this._isCompleted === true ? 'task is completed' : 'task is not completed'
    }
}

//статическое свойство (должны быть указаны сразу после создания класса, до создания экземпляров класса)
Task.counter = 0;

//объект класса
//let task = new Task('Learn ES6', false);
//let task2 = new Task('Learn ReactJS', true);

let task = new Task('Learn ES6', false);

console.log(task.isCompleted, task._isCompleted);








