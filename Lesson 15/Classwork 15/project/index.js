// Объект products берётся из products.js
// Он уже подключён через <script src="products.js"></script> в index.html

// ----- Ссылки на DOM-элементы -----
const container = document.querySelector(".products-container");
const genderSelect = document.querySelector("#gender-filter");
const priceSelect = document.querySelector("#price-filter");
const typeSelect = document.querySelector("#type-filter");
const sortSelect = document.querySelector("#sort-filter");
const searchBtn = document.querySelector("#search-button");
const resetBtn = document.querySelector("#reset-button");
const goUpBtn = document.querySelector("#go-up-btn");
const filtersSection = document.querySelector("#filters");

// ----- Функция создания карточки товара -----
function createCard(product) {
  // 1) Создаём корневой элемент-контейнер
  const card = document.createElement("article");
  card.className = "product-card";

  // 2) Изображение
  const img = document.createElement("img");
  img.src = product.imgUrl;
  img.alt = product.type;
  img.addEventListener("error", () => {
    // если не загрузилось, ставим заглушку
    img.src = "https://via.placeholder.com/200x180?text=No+Image";
    img.alt = "Image not available";
  });
  card.append(img);

  // 3) Название (type)
  const title = document.createElement("h3");
  title.textContent = product.type;
  card.append(title);

  // 4) Описание
  const desc = document.createElement("p");
  desc.className = "description";
  desc.textContent = product.description;
  card.append(desc);

  // 5) Цена
  const priceP = document.createElement("p");
  priceP.className = "price";
  priceP.textContent = "Price: $" + product.price;
  card.append(priceP);

  // 6) Пол (gender)
  const genderP = document.createElement("p");
  genderP.className = "gender";
  genderP.textContent = "Gender: " + product.gender;
  card.append(genderP);

  // 7) Статус (In stock / Out of stock)
  const statusP = document.createElement("p");
  statusP.className =
    "status " + (product.status === "In stock" ? "in-stock" : "out-of-stock");
  statusP.textContent = product.status;
  card.append(statusP);

  return card;
}

// ----- Функция, читающая текущие значения фильтров и сортировки -----
function getFilters() {
  return {
    gender: genderSelect.value,
    price: priceSelect.value,
    type: typeSelect.value,
    sort: sortSelect.value,
  };
}

// ----- Функция фильтрации списка (с помощью forEach) -----
function applyFilters(list, { gender, type, price }) {
  const result = [];

  list.forEach((item) => {
    // проверяем пол
    if (gender && item.gender !== gender) return;

    // проверяем тип
    if (type && item.type !== type) return;

    // проверяем цену
    if (price) {
      const [min, max] = price.split("-").map(Number);
      if (item.price < min || item.price > max) return;
    }

    // если все условия пройдены — добавляем в результат
    result.push(item);
  });

  return result;
}

function sortProducts(list, sortOrder) {
  // Копируем массив через spread
  const copy = [...list];

  if (!sortOrder) {
    return copy;
  }

  copy.sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  return copy;
}

// ----- Функция рендера карточек на странице -----
function renderProducts(list) {
  // 1) Очищаем контейнер
  container.innerHTML = "";

  // 2) Если нечего показывать
  if (!list.length) {
    const msg = document.createElement("p");
    msg.className = "no-products";
    msg.textContent = "No products found";
    container.append(msg);
    return;
  }

  // 3) В обратном случае «проходим» по каждому товару и добавляем карточку
  list.forEach((item) => {
    container.append(createCard(item));
  });
}

// ----- Обработчик кнопки Search -----
function onSearch() {
  const filters = getFilters();
  // 1) Сначала фильтрация
  let result = applyFilters(products, filters);

  // 2) Затем сортировка, если выбрана
  if (filters.sort) {
    result = sortProducts(result, filters.sort);
  }

  // 3) Отображаем отсортированный/отфильтрованный список
  renderProducts(result);

  // 4) Плавно скроллим к блоку фильтров
  filtersSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ----- Обработчик кнопки Reset -----
function onReset() {
  // Заново отображаем исходный список
  renderProducts(products);
}

// ----- Обработчик прокрутки страницы: показываем/скрываем кнопку «Return to filters» -----
function onScroll() {
  // Получаем текущее смещение прокрутки через document
  const scrollPos =
    document.documentElement.scrollTop || document.body.scrollTop;
  // Если прокручено более 200px — показываем кнопку, иначе скрываем
  goUpBtn.style.display = scrollPos > 200 ? "block" : "none";
}

// ----- Инициализация слушателей событий -----
function initEventListeners() {
  searchBtn.addEventListener("click", onSearch);
  resetBtn.addEventListener("click", onReset);

  document.addEventListener("scroll", onScroll);

  // По клику на кнопку «Return to filters» перескакиваем к блоку с фильтрами
  goUpBtn.addEventListener("click", () => {
    // Плавно скроллим к блоку фильтров
    filtersSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// ----- Запускаем приложение -----
// 1) Сначала отображаем все товары
renderProducts(products);

// 2) Навешиваем слушатели
initEventListeners();