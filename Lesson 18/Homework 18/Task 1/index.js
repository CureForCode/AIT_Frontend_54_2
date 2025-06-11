const container = document.getElementById("guitars-container");

async function loadGuitars() {
  
  try {
    const res = await fetch(
      "https://CureForCode.github.io/AIT_Frontend_54_2/guitars.json"
    );
    
    if (!res.ok) throw new Error("HTTP ${res.status}");

    const guitars = await res.json();

    guitars.forEach((g) => {
      const { brand, model, wood, image, description } = g;

      const card = document.createElement("div");
      card.className = "card";

      const title = document.createElement("h2");
      title.className = "card-title";
      title.textContent = `${brand} ${model}`;

      const img = document.createElement("img");
      img.src = image;
      img.alt = `${brand} ${model}`;

      const info = document.createElement("p");
      info.className = "card-wood";
      info.textContent = `${wood}`;

      const desc = document.createElement("p");
      desc.className = "card-desc";
      desc.textContent = description;

      card.append(title, img, info, desc);
      container.append(card);
    });
    
  } catch (err) {
    container.textContent = "Unable to load information: " + err.message;
  }
}

loadGuitars();
