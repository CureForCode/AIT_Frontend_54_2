// Тернарный оператор

let secretNumber = 7;

let answer = 7;

// if (answer === secretNumber) {
//   console.log("Вы угадали");
// } else if (answer > secretNumber) {
//   console.log("Введите меньшее число");
// } else if (answer < secretNumber) {
//   console.log("Введите большее число");
// } else {
//   console.log("Вы ввели некорректный символ");
// }

// if (answer === secretNumber) {
//   console.log("Вы угадали");
// } else {
//   console.log("Вы не угадали");
// }

//////
// answer === secretNumber
//   ? console.log("Вы угадали")
//   : console.log("Вы не угадали");

// answer === secretNumber
//   ? console.log("Вы угадали")
//   : answer > secretNumber
//   ? console.log("Введите меньшее число")
//   : answer < secretNumber
//   ? console.log("Введите большее число")
//   : console.log("Вы ввели некорректный символ");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// switch-case
let user = "Ihar";

// if (user === "Kate") {
//   console.log(`${user} is Admin`);
// } else if (user === "Brat") {
//   console.log(`${user} is simple employee`);
// } else if (user === "Tom") {
//   console.log(`${user} is simple employee`);
// } else if (user === "Vadim") {
//   console.log(`${user} is simple employee`);
// } else if (user === "Ihar") {
//   console.log(`${user} is Amdin`);
// } else if (user === "Elena") {
//   console.log(`${user} is Admin`);
// } else {
//   console.log(`${user} is not found`);
// }

switch (user) {
  case "Kate": {
    console.log(`${user} is Admin`);
    break;
  }

  case "Brat": {
    console.log(`${user} is simple employee`);
    break;
  }

  case "Tom": {
    console.log(`${user} is simple employee`);
    break;
  }

  case "Vadim": {
    console.log(`${user} is simple employee`);
    break;
  }

  case "Ihar": {
    console.log(`${user} is Admin`);
    break;
  }

  case "Elena": {
    console.log(`${user} is Admin`);
    break;
  }

  default: {
    console.log(`${user} is not found`);
    break;
  }
}
