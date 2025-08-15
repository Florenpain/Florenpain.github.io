document.addEventListener("DOMContentLoaded", () => {
  const experiences = document.querySelectorAll('#experience .experiences');
  const previousExperienceBouton = document.getElementById('previousExperience');
  const nextExperienceBouton = document.getElementById('nextExperience');
  let currentExperienceIndex = 0;

  function showExperience(index) {
    experiences.forEach((experience, i) => {
      experience.classList.toggle('active', i === index);
    });
  }

  previousExperienceBouton.addEventListener('click', () => {
    currentExperienceIndex = (currentExperienceIndex - 1 + experiences.length) % experiences.length;
    showExperience(currentExperienceIndex);
  });

  nextExperienceBouton.addEventListener('click', () => {
    currentExperienceIndex = (currentExperienceIndex + 1) % experiences.length;
    showExperience(currentExperienceIndex);
  });

  // Affiche l'expérience la + récente au chargement
  showExperience(currentExperienceIndex);
});

/*
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".experiences-container");

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
          <p class="Compétences">${exp.competences}</p>
          <p class="descriptions">${exp.description}</p>
        `;

        container.appendChild(div);
      });
    })
    .catch(error => console.error("Erreur lors du chargement des expériences :", error));
});
*/
