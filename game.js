//HOME PAGE
//games
document.getElementById("tictac").addEventListener("click", () => {
  location.href = "tictac.html";
});

document.getElementById("rockpaper").addEventListener("click", () => {
  location.href = "rockpaper.html";
});

document.getElementById("maze").addEventListener("click", () => {
  location.href = "maze.html";
});

try {
  document.getElementById("snake").addEventListener("click", () => {
    location.href = "snake.html";
  });
} catch {
  console.log("snake is not running");
}
