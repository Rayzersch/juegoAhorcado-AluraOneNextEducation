var newGame = document.getElementById("Nuevo-juego");
var dictionary = JSON.stringify(localStorage.getItem("dict"))
  .replace(/[^A-Z,]/g, "")
  .split(",");
var word = dictionary[Math.floor(Math.random() * dictionary.length)];
var palabra = word.replace(/[A-Z]/g, "*").split("");
var vidas = 10;
var char = ''
var arrWord = []
var running = true

function renderWord() {
  context.fillStyle = "white";
  context.font = "30px serif";
  context.fillText(palabra.join(""), 500, 90);
  // context.fillText(word.replace(/[A-Z]/g, "-"), 500, 120);
}

function checkLetters(key) {
  let keyUpper = key.toUpperCase();
  if (word.includes(keyUpper)) {
    for (let i = 0; i < word.length; i++) {
      if (keyUpper == word[i]) {
        palabra[i] = " " + keyUpper;
      }
    }
  } else {
    vidas--;
    arrWord.push(char.toUpperCase())
  }
}


function gameOver() {
  let mensaje = "¡Fin Del juego!. la palabra era: " + word;
  context.font = "35px serif";
  context.fillText(mensaje, 150, 30);
}


function youWin() {
  let mensaje = "¡Ganaste, Felicidades!"
  context.font = "35px serif"
  context.fillText(mensaje, 150, 30)
}

function update() {
  if (vidas == 0) {
    running = false
    gameOver();
  }
  if (!palabra.includes('*')) {
    running = false
    youWin();
  }

  drawError();

}

document.addEventListener("keyup", (evt) => {
  if (!/[^a-z]/g.test(evt.key) && evt.key.toUpperCase()) {
    char = evt.key + " "
    checkLetters(evt.key);
  }
});

newGame.addEventListener('click', () => {

  location.reload();
})

function render() {
  if (running) { requestAnimationFrame(render); }
  context.fillStyle = "#030c26";
  context.fillRect(0, 0, canvas.width, canvas.height);
  renderWord();
  switch (vidas) {
    case 9:
      drawBase();
      break;
    case 8:
      drawBase();
      drawVertical();
      break;
    case 7:
      drawBase();
      drawVertical();
      drawHitch();
      break;
    case 6:
      drawBase();
      drawVertical();
      drawHitch();
      drawRope();
      break;
    case 5:
      drawBase();
      drawVertical();
      drawHitch();
      drawRope();
      drawHead();
      break;
    case 4:
      drawBase();
      drawVertical();
      drawHitch();
      drawRope();
      drawHead();
      drawBody();
      break;
    case 3:
      drawBase();
      drawVertical();
      drawHitch();
      drawRope();
      drawHead();
      drawBody();
      drawLeftArm();
      break;
    case 2:
      drawBase();
      drawVertical();
      drawHitch();
      drawRope();
      drawHead();
      drawBody();
      drawLeftArm();
      drawRightArm();
      break;
    case 1:
      drawBase();
      drawVertical();
      drawHitch();
      drawRope();
      drawHead();
      drawBody();
      drawLeftArm();
      drawRightArm();
      drawLeftLeg();
      break;
    case 0:
      drawBase();
      drawVertical();
      drawHitch();
      drawRope();
      drawHead();
      drawBody();
      drawLeftArm();
      drawRightArm();
      drawLeftLeg();
      drawRightLeg();
      gameOver();
      break;
  }
  update()
}





render();
