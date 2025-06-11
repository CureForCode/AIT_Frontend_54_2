const container = document.getElementById("user-container");

async function loadRandomUsers(count = 5) {
  container.innerHTML = "";

  try {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`);

    if (!res.ok) throw new Error(`Error ${res.status}`);
    const { results: users } = await res.json();

    users.forEach(user => {
      const {
        name: { title, first, last },
        gender,
        email,
        phone,
        cell,
        dob: { age },
        location: {
          street: { number, name: streetName },
          city,
          state,
          country,
          postcode,
        },
        picture: { large: avatar },
      } = user;

      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <img src="${avatar}" alt="Avatar ${first} ${last}" />
        <div class="user-name">${title} ${first} ${last}, ${age} years</div>
        <div class="user-info">${gender[0].toUpperCase() + gender.slice(1)}</div>
        <div class="user-info">
          <div class="info-row"><span>Email:</span><span>${email}</span></div>
          <div class="info-row"><span>Phone:</span><span>${phone}</span></div>
          <div class="info-row"><span>Cell:</span><span>${cell}</span></div>
        </div>
        <div class="user-info">
          <div class="info-row"><span>Address:</span><span>${number} ${streetName}</span></div>
          <div class="info-row"><span></span><span>${city}, ${state}, ${country}, ${postcode}</span></div>
        </div>
      `;
      container.append(card);
    });
    
  } catch (err) {
    container.textContent = "Unable to load random users: " + err.message;
  }
}

loadRandomUsers(5);