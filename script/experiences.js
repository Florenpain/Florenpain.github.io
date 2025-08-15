document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".experiences-container");
  const previousExperienceBouton = document.getElementById('previousExperience');
  const nextExperienceBouton = document.getElementById('nextExperience');
  let currentExperienceIndex = 0;
  let experiences = [];

  function showExperience(index) {
    experiences.forEach((experience, i) => {
      experience.classList.toggle('active', i === index);
    });
  }

  fetch("https://raw.githubusercontent.com/Florenpain/Florenpain.github.io/main/json/experiences.json")
    .then(response => response.json())
    .then(data => {
      container.innerHTML = ""; // Nettoyer l'ancien contenu

      data.forEach((exp, index) => {
        const div = document.createElement("div");
        div.classList.add("experiences");
        if (index === 0) div.classList.add("active");

        div.innerHTML = `
          <strong>${exp.titre}</strong>
          <p class="employeurs">${exp.employeur}</p>
          <p class="contrats">${exp.contrat}</p>
          <p class="dates">${exp.dates}</p>
          <p class="competences">${exp.competences.join(", ")}</p>
          <p class="descriptions">${exp.description}</p>
        `;

        container.appendChild(div);
      });

      // Met à jour la liste après création
      experiences = document.querySelectorAll('#experience .experiences');

      // Écouteurs des boutons
      previousExperienceBouton.addEventListener('click', () => {
        currentExperienceIndex = (currentExperienceIndex - 1 + experiences.length) % experiences.length;
        showExperience(currentExperienceIndex);
      });

      nextExperienceBouton.addEventListener('click', () => {
        currentExperienceIndex = (currentExperienceIndex + 1) % experiences.length;
        showExperience(currentExperienceIndex);
      });

      // Affiche l'expérience la plus récente au chargement
      showExperience(currentExperienceIndex);
    })
    .catch(error => console.error("Erreur lors du chargement des expériences :", error));
});

