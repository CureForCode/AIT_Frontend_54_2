const APP_ID = "5bcee31d922035d5c6c4672756ec9d88";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

const FORM = document.querySelector(".form_container");
const SEARCH_BTN = document.getElementById("search_btn");
const CITY_INPUT = document.getElementById("search_products_input");
const WEATHER_RESULT = document.getElementById("weather_result");
const LOADING = document.getElementById("loading");

FORM.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = CITY_INPUT.value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  // Очистка предыдущего результата
  WEATHER_RESULT.innerHTML = "";

  // Формируем URL с единицами metric (API сразу отдаёт °C)
  const url = `${WEATHER_URL}?q=${encodeURIComponent(
    city
  )}&appid=${APP_ID}&units=metric`;

  LOADING.style.display = "block";
  SEARCH_BTN.disabled = true;
  
  const response = await fetch(url);
  const result = await response.json();

  if (response.ok) {
    // Достаём из ответа то, что нужно
    const { temp, feels_like } = result.main;
    const { icon, description } = result.weather[0];
    const cityName = result.name;
    const country = result.sys.country;

    // Формируем карточку
    WEATHER_RESULT.innerHTML = `
      <div class="weather-card">
        <div class="info">
          <div class="temp">${Math.round(temp)}°C</div>
          <div class="city">${cityName}, ${country}</div>
        </div>
        <div class="icons">
          <img 
            src="http://openweathermap.org/img/w/${icon}.png" 
            alt="${description}" 
            title="${description}"
          >
        </div>
      </div>
      <div class="feels-card">
        <div class="title">Feels like</div>
        <div class="temp">${Math.round(feels_like)}°C</div>
      </div>
    `;
  } else {
    // Выводим ошибку API
    WEATHER_RESULT.innerHTML = `
      <div class="error-card">
        <h2>API Error</h2>
        <p>${result.cod}: ${result.message}</p>
      </div>
    `;
  }

  // Выключаем индикатор и разблокируем кнопку
  LOADING.style.display = "none";
  SEARCH_BTN.disabled = false;
});
