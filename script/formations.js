document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".formations-container");
  const previousFormationBouton = document.getElementById("previousFormation");
  const nextFormationBouton = document.getElementById("nextFormation");
  let currentFormationIndex = 0;
  let formations = [];

  function showFormation(index) {
    formations.forEach((formation, i) => {
      formation.classList.toggle("active", i === index);
    });
  }

  fetch("https://raw.githubusercontent.com/Florenpain/Florenpain.github.io/main/json/formations.json")
    .then(response => response.json())
    .then(data => {
      container.innerHTML = ""; // Nettoyer l'ancien contenu

      data.forEach((form, index) => {
        const div = document.createElement("div");
        div.classList.add("formation");
        if (index === 0) div.classList.add("active");

        div.innerHTML = `
          <strong>${form.intitule}</strong>
          <p class="etablissements">${form.etablissement}</p>
          <p class="dates">${form.dates}</p>
          <p class="lieux">${form.lieu}</p>
        `;

        container.appendChild(div);
      });

      // Met à jour la liste après création
      formations = document.querySelectorAll("#formation .formation");

      // Écouteurs des boutons
      previousFormationBouton.addEventListener("click", () => {
        currentFormationIndex = (currentFormationIndex - 1 + formations.length) % formations.length;
        showFormation(currentFormationIndex);
      });

      nextFormationBouton.addEventListener("click", () => {
        currentFormationIndex = (currentFormationIndex + 1) % formations.length;
        showFormation(currentFormationIndex);
      });

      // Affiche la formation la plus récente au chargement
      showFormation(currentFormationIndex);
    })
    .catch(error => console.error("Erreur lors du chargement des formations :", error));
});
