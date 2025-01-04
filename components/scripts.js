// ! PRE LOADER START

window.onload = function () {
  var preloader = document.getElementsByClassName("preloader")[0];
  setTimeout(function () {
    preloader.style.display = "none";
  }, 500);
};

// ! PRE LOADER END
// // ! DISABLED RIGHT CLICK START

// document.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
// });

// // ! DISABLED RIGHT CLICK END
// ! HIDDEN MESSAGE START

const enigma =
  "🚀 Welcome, cosmic explorer! 🌟 You've discovered a hidden message in the stars. 🌌 Keep exploring the universe, there's always something new to uncover! 🌍✨ The planets are waiting to share their secrets with you, from the fiery depths of Mercury 🔥 to the icy rings of Saturn 💍. Each world has a story, and you're about to uncover them all! 🌙🔭 Remember, the cosmos is vast, and your adventure has only just begun. 🌠 Stay curious, keep discovering, and let your imagination soar among the stars. 🌌🌟";
console.log(enigma);

// ! HIDDEN MESSAGE END
// ! MOUSE POINTER START

const cursor = document.querySelector(".fa-galactic-senate");
const toggleButton = document.querySelector(".fa-computer-mouse");
let customCursorEnabled = false;

document.addEventListener("mousemove", (e) => {
  if (customCursorEnabled) {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  }
});

toggleButton.addEventListener("click", () => {
  customCursorEnabled = !customCursorEnabled;

  if (customCursorEnabled) {
    cursor.style.display = "block";
    document.body.style.cursor = "none";
    
  } else {
    cursor.style.display = "none";
    document.body.style.cursor = "default";
  }
});

// ! MOUSE POINTER END