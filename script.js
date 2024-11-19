const dietPDFs = {
  1000: "pdfs/DIETA 1000KCAL.pdf",
  1100: "https://www.mundoboaforma.com.br/cardapio-para-dieta-de-1100-calorias-por-dia/",
  1200: "https://www.mundoboaforma.com.br/cardapio-para-dieta-de-1200-calorias-por-dia/",
  1300: "https://www.mundoboaforma.com.br/cardapio-para-dieta-de-1300-calorias-por-dia/",
  1400: "https://www.mundoboaforma.com.br/cardapio-para-dieta-de-1400-calorias-por-dia/",
  1500: "https://www.mundoboaforma.com.br/cardapio-para-dieta-de-1500-calorias-por-dia/",
  1600: "https://www.mundoboaforma.com.br/cardapio-para-dieta-de-1600-calorias-por-dia/",
  1700: "https://www.mundoboaforma.com.br/cardapio-para-dieta-de-1700-calorias-por-dia/",
  1800: "https://www.mundoboaforma.com.br/cardapio-para-dieta-de-1800-calorias-por-dia/",
  1900: "https://www.mundoboaforma.com.br/cardapio-para-dieta-de-1900-calorias-por-dia/",
  2000: "pdfs/DIETA 2000KCAL.pdf",
  2100: "pdfs/DIETA 2100KCAL.pdf",
  2200: "https://dermaline.com.br/endocrinologia/dietas/dieta-com-2200-calorias/",
  2300: "https://www.prospre.io/pt/meal-plans/plano-de-refei%C3%A7%C3%B5es-de-2300-calorias",
  2400: "https://www.https://www.prospre.io/pt/meal-plans/plano-de-refei%C3%A7%C3%A3o-de-2400-calorias",
  2500: "pdfs/DIETA 2500KCAL.pdf",
  2600: "https://www.prospre.io/pt/meal-plans/plano-de-refei%C3%A7%C3%B5es-de-2600-calorias",
  2700: "https://www.prospre.io/pt/meal-plans/plano-de-refei%C3%A7%C3%A3o-de-2700-calorias",
  2800: "pdfs/DIETA 2800KCAL.pdf",
  2900: "https://www.prospre.io/pt/meal-plans/plano-de-refei%C3%A7%C3%B5es-de-2900-calorias",
  3000: "pdfs/DIETA 3000KCAL.pdf",
  3100: "https://www.prospre.io/pt/meal-plans/plano-de-refei%C3%A7%C3%A3o-de-3100-calorias",
  3200: "pdfs/DIETA 3200KCAL.pdf",
  3300: "pdfs/DIETA 3300KCAL.pdf",
  3400: "pdfs/DIETA 3400KCAL.pdf",
  3500: "https://www.prospre.io/pt/meal-plans/plano-de-refei%C3%A7%C3%B5es-de-3500-calorias",
  3600: "pdfs/DIETA 3600KCAL.pdf",
  3700: "https://www.prospre.io/pt/meal-plans/plano-de-refei%C3%A7%C3%A3o-de-3700-calorias",
  3800: "pdfs/DIETA 3800KCAL.pdf",
  3900: "pdfs/DIETA 3900KCAL.pdf",
  4000: "https://www.mundoboaforma.com.br/cardapio-para-dieta-de-4000-calorias-por-dia/"
};

function calculateCaloricExpenditure() {
  const age = parseInt(document.getElementById("age").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const sex = document.getElementById("sex").value;
  const activityLevel = parseFloat(document.getElementById("activityLevel").value);

  let bmr;

  if (sex === "masculino") {
    bmr = 5 + (10 * weight) + (6.25 * height) - (5 * age);
  } else if (sex === "feminino") {
    bmr = 161 - (10 * weight) + (6.25 * height) - (5 * age);
  }

  const tdee = bmr * activityLevel;

  calculateGoal(tdee);
}

function calculateGoal(tdee) {
  const goal = document.getElementById("goal").value;

  let caloricIntake;

  if (goal === "emagrecer") {
    caloricIntake = tdee * 0.8;
  } else if (goal === "manter") {
    caloricIntake = tdee;
  } else if (goal === "ganhar") {
    caloricIntake = tdee * 1.2;
  }

  const closestCalories = Object.keys(dietPDFs)
    .map(Number)
    .reduce((prev, curr) =>
      Math.abs(curr - caloricIntake) < Math.abs(prev - caloricIntake) ? curr : prev
    );

  const dietLink = dietPDFs[closestCalories];

  const existingButton = document.getElementById("dietButton");
  if (existingButton) {
    existingButton.remove();
  }

  const button = document.createElement("button");
  button.id = "dietButton";
  button.textContent = `VER DIETA - ${closestCalories} kcal`;
  button.style.marginTop = "20px";
  button.style.padding = "15px 30px"; // Ajuste o tamanho do botão
  button.style.fontSize = "18px"; // Aumenta o tamanho do texto
  button.style.backgroundColor = "#4CAF50";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";

  button.onclick = () => {
    window.open(dietLink, "_blank");
  };

  document.querySelector(".container").appendChild(button);
}

