/*
Promise - промисы
упращают работу с ассинхронным кодом
содержит свое состояние:
вначале - pending (ожидание)
исполнено (fulfilled): операция завершена успешно
отклонено (rejected): операция завершена с ошибкой
 */

//****************************************
//resolve вызываем, когда promise завершился успешно
//reject вызываем, если есть какая то ошибка

const promise = new Promise((resolve, reject) => {
    //код, написанный после throw выполнен не будет
    throw new Error('some error.....');

    //сообщение появляется с задержкой, а код является ассинхронным
    setTimeout(() => {
        if(true) {
            resolve('promise completed!');
        }
        else{
            reject();
        }
    }, 1000);

});

promise
    //при успешном выполнении промиса вызывается .then
    .then(data => console.log(data))
    //в случае невыполнения или ошибки промиса вызывается .catch
    .catch(() =>console.log('error'));


//*******************************************
// fetch('https://jsonplaceholder.typicode.com/posts/')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(() => console.log('some error...'));