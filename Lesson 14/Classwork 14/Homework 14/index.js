///Задание 1
//У вас есть массив объектов:
//const cars = [ { brand: "BMW", price: 20000, isDiesel: true }, { brand: "Mercedes", price: 22000, isDiesel: false }, { brand: "Porshe", price: 50000, isDiesel: true }, { brand: "Nissan", price: 25000, isDiesel: false }, ];
//Создайте на основе страрого массива новый массив объектов по образу: [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const newCars = cars.map((car) => ({
  brand: car.brand,
  isDiesel: car.isDiesel,
}));

console.log(newCars);



///Задание 2
//Создайте новый массив, где оставьте только машины с дизельным двигателем.

const cars2 = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const dieselCars = cars2.filter((car) => car.isDiesel);

console.log(dieselCars);



///Задание 3
//Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const cars3 = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const gasCars = cars3.filter((car) => !car.isDiesel);

console.log(gasCars);



///Задание 4
//Посчитайте общую стоимость всех машин не с дизельным двигателем.

const cars4 = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const totalPrice = cars4
  .filter((car) => !car.isDiesel)
  .reduce((sum, car) => sum + car.price, 0);

console.log(totalPrice);



///Задание 5
//Повысьте цену всех машин в массиве на 20%.

const cars5 = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const increasedPrices = cars5.map((car) => ({
  ...car,
  price: car.price * 1.2,
}));

console.log(increasedPrices);



///Задание 6
//Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

const cars6 = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const replacedCars = cars6.map((car) =>
  car.isDiesel ? { brand: "Tesla", price: 25000, isDiesel: false } : car
);

console.log(replacedCars);
