const highscoresList = document.getElementById("highscores");

// Get highscores data from local storage
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// Sort highscores in descending order
highscores.sort((a, b) => b.score - a.score);

// Display highscores in HTML
highscores.forEach((score) => {
  const li = document.createElement("li");
  li.textContent = `${score.initials}: ${score.score}`;
  highscoresList.appendChild(li);
});

// Clear highscores when clear button is clicked
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  localStorage.removeItem("highscores");
  highscoresList.innerHTML = "";
});
