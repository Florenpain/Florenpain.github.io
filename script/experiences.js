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
  showExperience(currentIcurrentExperienceIndexndex);
});

// Affiche l'expérience la + récente au chargement
showExperience(currentExperienceIndex);