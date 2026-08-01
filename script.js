const dishDetails = {
  lomo: {
    title: "Lomo Saltado",
    category: "⭐ Cocina Peruana",
    time: "⏱ 20 minutos",
    level: "🔥 Nivel: Intermedio",
    story:
      "Un plato que une el sabor del wok con la tradición peruana, destacando la carne, la cebolla roja y el arroz acompañado de papas fritas.",
    ingredients: "Carne de res, cebolla roja, tomate, ají amarillo, salsa de soja, cilantro, arroz y papas fritas.",
    techniques: "Salteado, reducción, control del punto de cocción y emulsión de sabores.",
    learnings: "Aprendí a trabajar con intensidad de sabor y equilibrio entre lo tradicional y lo contemporáneo."
  },
  risotto: {
    title: "Risotto",
    category: "⭐ Cocina Italiana",
    time: "⏱ 35 minutos",
    level: "🔥 Nivel: Intermedio",
    story:
      "Una preparación de arroz cremosa que requiere paciencia, temperatura y atención constante para desarrollar textura y profundidad.",
    ingredients: "Arroz arborio, caldo, cebolla, mantequilla, queso parmesano y hierbas.",
    techniques: "Cocción progresiva, incorporación de caldo y emulsión con mantequilla y queso.",
    learnings: "Fortalecí la comprensión del tiempo de cocción y la importancia de la técnica en la textura final."
  },
  tiramisu: {
    title: "Tiramisú",
    category: "⭐ Repostería",
    time: "⏱ 30 minutos",
    level: "🔥 Nivel: Fácil",
    story:
      "Un postre elegante que combina capas de bizcocho, café y crema con mascarpone para crear una propuesta equilibrada.",
    ingredients: "Bizcochos, café, mascarpone, huevos, azúcar y cacao en polvo.",
    techniques: "Montado, capas y reposo para lograr estructura y sabor.",
    learnings: "Aprendí a trabajar con precisión en la textura y a valorar la importancia del reposo."
  },
  ceviche: {
    title: "Ceviche",
    category: "⭐ Cocina Marina",
    time: "⏱ 25 minutos",
    level: "🔥 Nivel: Intermedio",
    story:
      "Una preparación fresca y vibrante que destaca la relación entre mariscos, cítricos y aromas herbales.",
    ingredients: "Pescado o camarón, limón, cebolla roja, cilantro, ají limo y maíz tostado.",
    techniques: "Marinado en cítrico, corte limpio y equilibrio de sabores.",
    learnings: "Entendí la importancia de la frescura de los ingredientes y la armonía en la presentación."
  },
  pasta: {
    title: "Pasta Fresca",
    category: "⭐ Cocina Italiana",
    time: "⏱ 40 minutos",
    level: "🔥 Nivel: Intermedio",
    story:
      "El trabajo manual de la pasta permite explorar una técnica tradicional con una mirada contemporánea.",
    ingredients: "Harina, huevos, aceite de oliva, tomate, albahaca y queso.",
    techniques: "Amasado, laminado, corte y cocción al dente.",
    learnings: "Desarrollé mayor sensibilidad en la textura, la consistencia y el tiempo de cocción."
  },
  mariscos: {
    title: "Arroz con Mariscos",
    category: "⭐ Cocina Marina",
    time: "⏱ 35 minutos",
    level: "🔥 Nivel: Intermedio",
    story:
      "Un plato que reúne mariscos, arroz y una base sabrosa para crear una experiencia completa en cada bocado.",
    ingredients: "Arroz, camarón, calamar, mejillones, ajo, cebolla, pimentón y caldo.",
    techniques: "Sofrito, cocción del arroz y control del punto de sal.",
    learnings: "Aprendí a coordinar tiempos y sabores para que el arroz conserve su textura sin perder la marineidad."
  }
};

const modal = document.getElementById("dishModal");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalTime = document.getElementById("modalTime");
const modalLevel = document.getElementById("modalLevel");
const modalStory = document.getElementById("modalStory");
const modalIngredients = document.getElementById("modalIngredients");
const modalTechniques = document.getElementById("modalTechniques");
const modalLearnings = document.getElementById("modalLearnings");
const closeButton = document.querySelector(".modal-close");

function openDishModal(key) {
  const dish = dishDetails[key];
  if (!dish) return;

  modalTitle.textContent = dish.title;
  modalCategory.textContent = dish.category;
  modalTime.textContent = dish.time;
  modalLevel.textContent = dish.level;
  modalStory.textContent = dish.story;
  modalIngredients.textContent = dish.ingredients;
  modalTechniques.textContent = dish.techniques;
  modalLearnings.textContent = dish.learnings;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeDishModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-dish]").forEach((button) => {
  button.addEventListener("click", () => openDishModal(button.getAttribute("data-dish")));
});

closeButton.addEventListener("click", closeDishModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeDishModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDishModal();
});
