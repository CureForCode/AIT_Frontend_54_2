///Задание 1
//Напишите функцию, которая принимает два числа и возвращает большее значение.
// Вызов функции присвоить переменной и отобразить результат(переменную) в консоле

let errorMessage = "Оба числа равны!";

const checkNumbers = function (number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number2 > number1) {
    return number2;
  } else {
    return errorMessage;
  }
};

let biggestNumberOfTwo = checkNumbers(3, 5);

console.log(biggestNumberOfTwo);

///Задание 2
//Создайте стрелочную функцию, которая бы принимала массив и цифру, возвращала бы элемент массива под этим индексом.

const getElementByIndex = (array, index) => array[index];

let randomNumbers = [10, 20, 30, 40, 50, 60];

console.log(getElementByIndex(randomNumbers, 5));
console.log(getElementByIndex(randomNumbers, 6));
console.log(getElementByIndex(randomNumbers, 0));

///Задание 3
//Создайте функцию, которая бы принимала следующие параметры: код погоды и функцию decode, которая дает расшифровку погоды по коду. Функция должна возвращать строку, описывающую погоду.
//Таблица соответствия код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым (видимость менее 10 км)
//DS - пыльная буря (видимость менее 10 км) SS - песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в одном из методов switch-case

const decode = (code) => {
  switch (code) {
    case "SQ":
      return "Шквал";
    case "PO":
      return "Пыльный вихрь";
    case "FC":
      return "Торнадо";
    case "BR":
      return "Дымка (видимость от 1 до 9 км)";
    case "HZ":
      return "Мгла (видимость менее 10 км)";
    case "FU":
      return "Дым (видимость менее 10 км)";
    case "DS":
      return "Пыльная буря (видимость менее 10 км)";
    case "SS":
      return "Песчаная буря (видимость менее 10 км)";
    default:
      return "Введите правильный код погоды.";
  }
};

const checkWeather = (weatherCode, decode) => {
  return decode(weatherCode);
};

console.log(checkWeather("SS", decode));
console.log(checkWeather("PO", decode));