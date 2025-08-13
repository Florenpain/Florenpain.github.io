const formations = document.querySelectorAll("#formation .formation");
const previousFormationBouton = document.getElementById("previousFormation");
const nextFormationBouton = document.getElementById("nextFormation");
let currentFormationIndex = 0;

function showFormation(index) {
  formations.forEach((formation, i) => {
    formation.classList.toggle("active", i === index);
  });
}

previousFormationBouton.addEventListener("click", () => {
  currentFormationIndex = (currentFormationIndex - 1 + formations.length) % formations.length;
  showFormation(currentFormationIndex);
});

nextFormationBouton.addEventListener("click", () => {
  currentFormationIndex = (currentFormationIndex + 1) % formations.length;
  showFormation(currentFormationIndex);
});

// Initialisation
showFormation(currentFormationIndex);