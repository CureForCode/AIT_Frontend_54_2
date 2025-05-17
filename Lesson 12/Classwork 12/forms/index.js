// 1 шаг: Получаем доступ к тегу form
const LOGIN_FORM = document.querySelector(".login-form");

// шаг 2: получаем доступ к значениям элементов формы черех событие submit(которое происходит при нажатии на кнопку submit) используя event.target
LOGIN_FORM.addEventListener("submit", (event) => {
  console.log(event);
  // event.preventDefault(); - предотвращает стандартное поведение браузера, например: если происходит событие submit, то страница перезагружаться не будет
  event.preventDefault();

  // Получаем данные из элементов формы
  // -  имя email в event target получился исходя их того какое значение мы дали  в атрибуте в html коде
  const emailValue = event.target.email.value;
  const passwordValue = event.target.password.value;
  console.log(emailValue);
  console.log(passwordValue);
});
