import analyzer from "./analyzer.js";

// Selectores del DOM
const textarea = document.querySelector("textarea[name='user-input']");
const wordcount = document.querySelector("li[data-testid='word-count']");
const charactercount = document.querySelector(
  "li[data-testid='character-count']"
);
const charactercountex = document.querySelector(
  "li[data-testid='character-no-spaces-count']"
);
const numbercount = document.querySelector("li[data-testid='number-count']");
const sumnumeros = document.querySelector("li[data-testid='numer-sum']");
const longitudmedia = document.querySelector(
  "li[data-testid='word-lenght-average']"
);

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

textarea.addEventListener("keyup", () => {
  //CONTADOR DE PALABRAS
  const resultado = analyzer.getWordCount(textarea.value);
  wordcount.innerHTML = "Palabras: " + resultado;
  //CONTADOR DE CARACTERES
  const resultadocaracteres = analyzer.getCharacterCount(textarea.value);
  charactercount.innerHTML = "Caracteres: " + resultadocaracteres;
  //CONTADOR DE CARACTERES SIN ESPACIOS
  const resulcaracteressin = analyzer.getCharacterCountExcludingSpaces(
    textarea.value
  );
  //console.log(resulcaracteressin);
  charactercountex.innerHTML = "Caracteres sin espacios: " + resulcaracteressin;

  //CONTADOR DE NÚMEROS
  const cantidadnumeros = analyzer.getNumberCount(textarea.value);
  //console.log(cantidadnumeros);
  numbercount.innerHTML = "Números: " + cantidadnumeros;

  //SUMA NÚMEROS
  const sumanumeros = analyzer.getNumberSum(textarea.value);
  //console.log(sumanumeros);
  sumnumeros.innerHTML = "Suma números: " + sumanumeros;

  //LONGITUD MEDIA
  const longitudmed = analyzer.getAverageWordLength(textarea.value);
  console.log(longitudmed);
  longitudmedia.innerHTML = "Longitud media: " + longitudmed;
});

//BOTÓN PARA LIMPIAR LOS DATOS
const botonlimpiar = document.getElementById("reset-button");
function limpiar() {
  location.reload();
}
botonlimpiar.addEventListener("click", limpiar);
