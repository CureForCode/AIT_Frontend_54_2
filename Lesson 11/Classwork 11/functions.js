// Функции

// Функции бываю 3 видов:
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Functions

// Функции бываю 2 типов:
// 1. функция, которая что-то выполняет и ничего не возвращает
// 2. функция, которая что-то возвращает и может что-то выполнить, но не обязательно(опционально!)
// Функция могут возвращать любой тип данных

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Function Declaration
// - создание 1 функции
// -sayHelloWorld - функция, которая что-то выполняет и ничего не возвращает
sayHelloWorld();
function sayHelloWorld() {
  // тело функции, тут прописываем всю логику
  console.log("Hello World!!!");
}

// - Вызов функции
sayHelloWorld();

let resultofSayHelloWorld = sayHelloWorld(); // resultofSayHelloWorld === undefoned, т.к sayHelloWorld ничего не возвращает
console.log(resultofSayHelloWorld);

//////////////////////////////////////////////
// - add - функция, которая что-то возвращает
// number1 и number2 являются аргументами функции add
// - если мы ничего име не передадим, то они будут равны undefined
function add(number1 = 100, number2 = 200) {
  console.log(number1);
  console.log(number2);
  let addResult = number1 + number2;

  return addResult;
  //   console.log(addResult); // все, что у нас указывается после return, не выполняется
}

// let result = add(10, 15);
// console.log(result); // 25
// console.log(add(25, 25)); // 50
// console.log(add(5, 6)); // 11
// console.log(add(7, 8)); // 15
console.log(add()); // NaN, если у аргументов нету значений по умолчанию
console.log(add(3, 5));

////////////////////////////////////////////////////////////////////////////
// 2. Function Expression
console.log(sayHi("Alexandr"));
const sayHi = function (firstName) {
  return `Hello, ${firstName}`;
};

console.log(sayHi("Alex"));
console.log(sayHi("Kate"));

/////////////////////////////////////////////////////////////////////////
// 3. Arrow functions
const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

let fullName = getFullName("Johny", "Depp");
console.log(fullName);

// 3.1 Сокращаем слово return
const getFullNameWithoutReturnWord = (firstName, lastName) =>
  `${firstName} ${lastName}`;

// 3.2 Можно опустить круглые скобки
const showMessage = (message) => message;

let message = showMessage("Hello");
console.log(message);

// 3.3 Возврат обьекта

// пример обьекта
// const user = {
//   fullName: "John Jonson",
//   age: 30,
//   isMarried: true,
// };

// без сокращения
// const getUser = () => {
//   return {
//     fullName: "John Jonson",
//     age: 30,
//     isMarried: true,
//   };
// };

// сокращенный вариант
const getUser = () => ({
  fullName: "John Jonson",
  age: 30,
  isMarried: true,
});

console.log(getUser());

// тип данных у функций
console.log(typeof getUser); // правильный тип данных у функций - это object, но консоль выдаст fucntion

////////////////
// функция callback - функция переданная в качестве аргумента в другую функцию и которая будет вызвана когда-то потом
const showSomeMessage = (getMessage) => {
  console.log(getMessage());
};

// const getSomeMessage = () => {
//   return "Hello, cohort_54";
// };
// showSomeMessage(getSomeMessage);

showSomeMessage(() => {
  return "Hello, cohort_54";
});
