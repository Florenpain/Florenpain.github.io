document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    "HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "NodeJS", 
    "ReactJS", "NestJS", "Java", "J2EE", "Python", "FastAPI", 
    "MongoDB", "MySQL", "Oracle", "Git", "GitHub", "GitLab", "Docker", 
    "Linux", "Windows"
  ];

  const interests = ["Sport", "Cinéma", "Lecture", "Voyage", "Randonnées", "Ski"];

  const langues = ["Français", "Anglais (B2/C1)"];

  const renderChips = (containerId, items) => {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // vide au cas où
    items.forEach(item => {
      const span = document.createElement("span");
      span.className = "chip";
      span.textContent = item;
      container.appendChild(span);
    });
  };

  renderChips("skills-list", skills);
  renderChips("interests-list", interests);
  renderChips("langues-list", langues);
});