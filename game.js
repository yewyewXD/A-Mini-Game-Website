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

if (document.body.offsetWidth >= 1024) {
  document.getElementById("snakes").addEventListener("click", () => {
    location.href = "snake.html";
  });
} else {
  console.log("snake is not working");
}
