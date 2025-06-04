// 1. setTimeout();
// setTimeout(callback, ms);
// 1 аргумент - функция callback, которая выполняется через переданное в качестве 2 аргмента колличество ms
// 2 аргумент - колличетсво ms
// setTimeout возвращает timerID

console.log(1);
const someFunction = () => {
  console.log("Прошло 5 секунды");
};

const timerId = setTimeout(someFunction, 5000);
console.log(2);
console.log(3);

// clearTimeout - отмена действия setTimeout, принимает в качесте аргумента timerId
setTimeout(() => {
  clearTimeout(timerId);
}, 5000);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. setInterval()
// setInterval(callback, ms);
// 1 аргумент - функция callback, которая выполняется через переданное в качестве 2 аргмента колличество ms
// 2 аргумент - колл-во ms(интервал, с которым будет вызываться функция callback)

const intervalId = setInterval(() => {
  console.log("Вызов каждые 2 секунды");
}, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);
