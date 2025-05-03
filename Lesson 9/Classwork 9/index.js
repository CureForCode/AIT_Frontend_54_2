console.log("Hello World!!!");

// 1. alert() - выводит на экран всплывающее окно с сообщением, в круглых скобках передаем сообщение
// alert("Hello World");

// 2. prompt() - возвращает в переменную то что ввел в поле пользователь
// - если пользователь ввел что-то в поле и нажал Ok, то в переменную answer возвращается то, что он ввел в качестве string
// - если пользователь ввел что-то в поле(или не ввел) и нажал Cancel, то в переменную answer возвращается null
// - если пользоваетель не ввел ничего и нажал Ok, то в переменную answer возвращается пустая строка ""
// let answer = prompt("How old are you?", 30);
// console.log(answer);

// 3. confirm() - способ задания вопроса пользователю с 2 вариантами действий
// - Ok - возвращает в переменную true
// - Cancel - возвращает в переменную false
// let isMarried = confirm("Are you married?");
// console.log(isMarried);

// !!! alert(), prompt() и confirm() - методы Web API(браузера) и не являются частью JS

/////////////////////////////////////////////////////////////////////////////////////////////////

//Operators

// +
// Cложение строк
let message1 = "Hello ";
let message2 = "World";
console.log(message1 + message2); // Hello World

// Число + число
console.log(23 + 22); // 45

// Число + строка
let someString = "22";
let number = 23;
console.log(number + someString); // "2322"
console.log(typeof (number + someString)); // string

// sting + boolean
console.log("some message" + true); // "some messagetrue"

// string + undefined
console.log("some string" + undefined); // "some stringundefined"

// string + null
console.log("some message" + null); // "some messagenull"

// number + undefined
console.log(23 + undefined); // NaN(Not a Number)

// number + null
console.log(23 + null); // 23

// number + boolean
console.log(23 + false); // 23, false воспринимается как 0
console.log(23 + true); // 24, true воспринимается как 1

// null + undefined
console.log(null + undefined); // NaN

// -
// string - number
let a = "22" - 5;
console.log(a); // 17
console.log(typeof a); // number

console.log("somestring" - 13); // NaN
console.log("50" - true); // 49

// *
console.log("22" * null); // 0
console.log("somestring" * null); // NaN

// деление /

// number / 0
console.log(23 / 0); // Infinity

// string / примитив
console.log("somestring" / true); // NaN
console.log("somestring" / "somestring1"); // NaN
console.log("somestring" / undefined); // NaN
console.log("somestring" / null); // NaN
console.log("somestring" / 3); // NaN

// boolean / boolean
console.log(true / false); // Infinty

// Несколько операций стразу
console.log((3 + 2) / 10); // 0.5

// **
console.log(3 ** 0); // 1
//
// let number1 = 3;
// number1 = number1 + 2;
// console.log(number1);
// let number1 = 3;
// number1 += 2;
// console.log(number1);

///////////////////////////////////////////////////////////////////////////
// ++/--
let i = 2;
// console.log(i++); // 2 - если ++ cтоят после переменной, операция происходит отложенно
// console.log(i); // 3
console.log(++i); // 3 если ++ cтоят перед переменной, операция происходит моментально
console.log(i); // 3

///////////////////////////////////////////////////////
// операторы сравнения
// == и ===
// == - стравнение значений, но не типов
console.log(1 == true); // true
// === - сравнение значений и типов !!! используем === в дальнейшем
console.log(1 === true); // false

// > , <, >=, <=
console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 2); // true

// != и !==
console.log(1 != "1"); // false
console.log(1 !== "1"); // true

////////////////////////////////////////////////////////
// Логические операторы
// && - И, || - ИЛИ, ! - НЕ

// && - если есть хотя бы один false, то будет false
console.log(true && false); // false
console.log(1 === "1" && true); // false

// ||  - должен быть хотя бы один true, тогда будет true
console.log(3 === 3 || 1 === 5); // true
console.log(3 === 3 || (1 === 5 && 5 === 5)); // true

// ! - обратное буленовское выражение от вашего выражения
console.log(!true); // false
console.log(!1); // false
console.log(!("hello" === "hello")); //false

/////////////////////////////////////////////////
// Условный оператор if else

// if (1 === 1) {
//   console.log("it works");
// } else {
//   console.log("it does not work");
// }

let person = "Brat";

if (person === "Johny") {
  console.log("Доступ админу разрешен");
} else if (person === "Jack") {
  console.log(`Доступ ${person} разрешен`);
} else if (person === "John") {
  console.log(`Доступ ${person} разрешен`);
} else if (person === "Brat") {
  console.log(`Доступ ${person} разрешен`);
} else {
  console.log("Доступ запрещен!!!");
}
