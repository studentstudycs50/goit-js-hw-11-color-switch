// Напиши функцию delay(ms), которая возвращает промис, 
// переходящий в состояние "resolved" через ms миллисекунд.
// Значением исполнившегося промиса должно быть
// то кол-во миллисекунд которое передали во время
// вызова функции delay.

const delay = ms => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)

  })
  return promise
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms





//=========================EXAMPLES=====================
// let randomNum = Math.floor(Math.random() * (10 - 1) + 1);

// const myPromise = new Promise((resolve, reject) => { 
//   if (randomNum < 5) {
//     resolve('success')
//   }
//   else {
//      reject('error')
//   }

// })

// myPromise.then((result) => console.log(result))
//   .catch((err) => { console.log(err);})


// myPromise.then((result) => {
//   console.log(result);
// })
// myPromise.catch((err) => {
//   console.log(err);
// })

