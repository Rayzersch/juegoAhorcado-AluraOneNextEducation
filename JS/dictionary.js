var pal = new XMLHttpRequest();
var dict = JSON.parse(localStorage.getItem("dict"));

export function addWord(word) {
  dict.push(word);
  localStorage.setItem("dict", JSON.stringify(dict));
}

window.onload = function () {
  if (
    localStorage.getItem("dict") == null &&
    localStorage.getItem("dict") != []
  ) {
    localStorage.setItem("dict", JSON.stringify(["ALURA"]));
  }
  pal.open(
    "GET",
    "https://random-word-api.herokuapp.com/word?lang=es&length=8"
  );

  pal.addEventListener("load", function () {
    if (pal.status == 200) {
      let palText = JSON.parse(pal.responseText)[0]
      if (!/[áéíóú]/g.test(palText)) {
        addWord(palText.toUpperCase());
      }

    } else {
      console.log("error");
    }
  });
  pal.send();
};
