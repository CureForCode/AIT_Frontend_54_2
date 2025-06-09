const form = document.querySelector(".fact-card");
const grid = document.querySelector(".facts-grid");
const btn = document.querySelector(".get-fact");

let counter = 0;
const MAX_CARDS = 10;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Блокируем кнопку, чтобы нельзя было кликнуть повторно
  btn.disabled = true;

  setTimeout(async () => {
    // При достижении MAX_CARDS — очистить и начать сначала
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

    // Снова разблокируем кнопку
    btn.disabled = false;
  }, 500);
});

async function fetchCatFact() {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  return data.fact;
}

function addCard(text, number) {
  const card = document.createElement("div");
  card.classList.add("fact");

  const numEl = document.createElement("div");
  numEl.classList.add("fact-number");
  numEl.textContent = number;
  card.append(numEl);

  const textEl = document.createElement("div");
  textEl.classList.add("fact-text");
  textEl.textContent = text;
  card.append(textEl);

  grid.append(card);
}