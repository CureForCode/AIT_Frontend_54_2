///Задание 1
//Напишите программу, которая выводит в консоль все четные числа от 1 до 20.
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

console.log("Четные числа: ");
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 === 0) {
    console.log(num);
  }
}

//Вариант без массивов
console.log("Четные числа: ");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



///Задание 2
//У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите программу для удвоения каждого значения в массиве и вывода результата в консоль.
const numbers2 = [2, 4, 6, 8, 10];

console.log("Удвоенные значения: ");
for (let i = 0; i < numbers2.length; i++) {
  const doubleNumber = numbers2[i] * 2;
  console.log(doubleNumber);
  //или
  //console.log(numbers2[i]*2);
}



///Задание 3
//Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна". Создайте еще один массив с возрастами: 18, 27, 74, 34;
//Создайте и заполните при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"
const name = ["Семен", "Иван", "Петр", "Татьяна"];
const age = [18, 27, 74, 34];

const mixedNameAge = [];
for (let i = 0; i < name.length && i < age.length; i++) {
  const add = `${name[i]} ${age[i]} лет/года`;
  mixedNameAge.push(add);
}

console.log(mixedNameAge);



///Задание 4
//Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности.
const name2 = ["Семен", "Иван", "Петр", "Татьяна"];
const age2 = [18, 27, 74, 34];

const mixedNameAge2 = [];
for (let i = 0; i < name2.length && i < age2.length; i++) {
  const add = `${name2[i]} ${age2[i]} лет/года`;
  mixedNameAge2.push(add);
}

console.log("Оригинал:", mixedNameAge2);


const reversedMixedNameAge = [];
for (let i = 0; i < mixedNameAge2.length; i++) {
  reversedMixedNameAge.unshift(mixedNameAge2[i]);
}

console.log("Элементы в обратной последовательности:", reversedMixedNameAge);
