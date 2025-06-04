const square = document.querySelector(".square");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");



//Задание 1

function randomColorFromArray() {
  const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
    "rgb(42, 34, 82)",
    "rgb(61, 30, 214)",
    "blueviolet",
    "rgb(214, 30, 30)",
  ];

  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

let intervalId = null;

startBtn.addEventListener("click", () => {
  if (intervalId) return;
  intervalId = setInterval(() => {
    square.style.backgroundColor = randomColorFromArray();
  }, 3000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});



//Задание 2

function showNumbers(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds > 10) {
      reject("Ошибка: максимальное количество секунд = 10");
      return;
    }

    setTimeout(() => {
      resolve(`Прошло ${seconds} секунд(ы)`);
    }, seconds * 1000);
  });
}

// Здесь получаем resolve ✅
showNumbers(2)
  .then((result) => {
    console.log("✅ 2 секунды:", result);
  })
  .catch((error) => {
    console.log("❌ 2 секунды:", error);
  });

showNumbers(8)
  .then((result) => {
    console.log("✅ 8 секунд:", result);
  })
  .catch((error) => {
    console.log("❌ 8 секунд:", error);
  });

// А тут сразу reject ❌
showNumbers(12)
  .then((result) => {
    console.log("✅ 12 секунд:", result);
  })
  .catch((error) => {
    console.log("❌ 12 секунд:", error);
  });

showNumbers(25)
  .then((result) => {
    console.log("✅ 25 секунд:", result);
  })
  .catch((error) => {
    console.log("❌ 25 секунд:", error);
  });
