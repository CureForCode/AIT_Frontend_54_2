const container = document.getElementById("wines-container");

async function loadWines() {
  try {
    const res = await fetch("https://api.sampleapis.com/wines/whites");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const wines = await res.json();

    console.log(wines); // выводим весь массив в консоль

    // отбираем только вина с рейтингом ≥ 4.8
    const best = wines.filter(w => {
      // rating.average может быть строкой, поэтому приводим к числу
      const avg = parseFloat(w.rating.average);
      return avg >= 4.8;
    });

    best.forEach(w => {
      const { wine, winery, rating, image } = w;
      // тут тоже сразу парсим в число
      const avg = parseFloat(rating.average);

      const card = document.createElement("div");
      card.className = "wine-card";

      // задаём фон в зависимости от рейтинга
      if (avg >= 4.9)      card.classList.add("high");
      else /* 4.8–4.89 */  card.classList.add("medium");

      card.innerHTML = `
        <img src="${image}" alt="${wine}" />
        <div class="wine-name">${wine}</div>
        <div class="winery">${winery}</div>
        <div class="rating">Rating: ${avg.toFixed(2)}</div>
      `;
      container.append(card);
    });

  } catch (err) {
    container.textContent = "Error while updating wines: " + err.message;
  }
}

loadWines();
