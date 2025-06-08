const form = document.querySelector(".fact-card");
const grid = document.querySelector(".facts-grid");

let counter = 0;
const MAX_CARDS = 10;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // При достижении 10 карточек — очистить и начать сначала
  if (counter >= MAX_CARDS) {
    grid.innerHTML = "";
    counter = 0;
  }

  counter++;

  let factText;
  try {
    factText = await fetchCatFact();
  } catch (err) {
    console.error(err);
    factText = "Failed to get a fact. Try again.";
  }

  addCard(factText, counter);
});

async function fetchCatFact() {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  return data.fact;
}

function addCard(text, number) {
  // Создаём контейнер карточки
  const card = document.createElement("div");
  card.classList.add("fact");

  // Счётчик или номер карточки
  const numEl = document.createElement("div");
  numEl.classList.add("fact-number");
  numEl.textContent = number;
  card.append(numEl);

  // Текст факта
  const textEl = document.createElement("div");
  textEl.classList.add("fact-text");
  textEl.textContent = text;
  card.append(textEl);

  grid.append(card);
}
