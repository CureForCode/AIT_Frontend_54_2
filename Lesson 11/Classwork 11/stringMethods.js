let fullName = " John Johnson ";

// 1. length - длина строки
// console.log(fullName.length);

// 2. toUpperCase() - метод строк, который преобразует строку в верхний регистр
// console.log(fullName.toUpperCase());
// console.log(fullName);

// 3. toLowerCase() - метод строк, который преобразует строку в нижний регистр
// console.log(fullName.toLowerCase());
// console.log(fullName);

//4. trim() - удаляет пробелы в начале и в конце строки
// console.log(fullName);
// console.log(fullName.trim());

// 5. substring() - метод, котрый возвращает нужную нам часть строки
let firstName = fullName.substring(1, 5);
let lastName = fullName.substring(6, 13);
// console.log(firstName);
// console.log(lastName);

// 6. split()
console.log(fullName.split("").join(""));