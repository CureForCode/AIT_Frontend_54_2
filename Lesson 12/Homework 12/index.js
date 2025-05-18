function calcMale(height) {
  //рост - (100 + (рост - 100) : 20)
  return height - (100 + (height - 100) / 20);
}

function calcFemale(height) {
  //рост - (100 + (рост - 100) : 10)
  return height - (100 + (height - 100) / 10);
}

//Находим форму и вешаем обработчик событий
const form = document.querySelector(".calc-form");

form.addEventListener("submit", function (event) {
  //Для отмены перезагрузки
  event.preventDefault();

  //Для того, чтобы получить все данные из обеих полей
  const heightValue = Number(form.elements["height"].value);
  const genderValue = form.elements["gender"].value;

  //Проверка роста на адекватные значения
  if (heightValue < 147 || heightValue > 220) {
    alert("Пожалуйста, введите корректный рост (147–220 см).");
    return;
  }

  //Выбор нужной формулы в зависимости от полученных данных
  let idealWeight;
  if (genderValue === "male") {
    idealWeight = calcMale(heightValue);
  } else if (genderValue === "female") {
    idealWeight = calcFemale(heightValue);
  } else {
    alert("Пожалуйста, выберите пол.");
    return;
  }

  //Проверка на то, что вес не имеет отрицательного или нулевого значения
  if (idealWeight <= 0) {
    alert("Рост слишком мал для корректного расчёта.");
    return;
  }

  ///Отображение результата в DOM
  //Способ убрать старый результат, если такой имеется
  const prev = document.getElementById("result");
  if (prev) prev.remove();

  //Создание нового абзаца
  const resultNode = document.createElement("p");
  resultNode.id = "result";
  resultNode.className = "result-message";
  resultNode.textContent = `Ваш идеальный вес: ${idealWeight.toFixed(1)} кг`;

  //Вывести результат под кнопкой "Рассчитать"
  form.append(resultNode);
});
