//Вывод сообщения в консоль
console.log("Hello, world!");

//Переменные

//let - изменяемая переменная
//Объявление переменной let
let message;
//Присваивание значения
message = "New message"
console.log(message);
message = "Hello"
console.log(message);

//const - неизменяемая переменная
const firstName = "John";
console.log(firstName);


//Типы данных

//1. Строка - string
let someName = "Tom";
console.log(someName);

//2. Числовое значение - number
let age = 23;
age = -20;
age = 20.5;
age = Infinity;
//Ошибка в вычислениях
age = NaN;
console.log(age);

//3. Большое число - bigint
let bigNum = 12999993829389283928392839n;

//4. Логический тип - boolean
let isAdmin = true;
console.log(isAdmin);
let isActive = false;
console.log(isActive);

//5. Неопределенный тип - undefined
let animal = undefined;
console.log(animal);

//6. Пустое значение - null
let value = null;
console.log(value);

//7. Символ - symbol
let id = Symbol();
console.log(id);



///8. Объект - object (пары ключ/значение). Дополнительно входят массивы и функции.
let person = {
    name: "Bob",
    age: 34,
}

//Изменение значения переменной
value = 100;
console.log(value);