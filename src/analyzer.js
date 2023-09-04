const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.split(" ");
    const numpalabras = palabras.filter((palabras) => palabras !== "");
    return numpalabras.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textWithoutPunctuation = text.replace(/[^\w\s]/g, " ");
    const textWithoutSpaces = textWithoutPunctuation.replace(/\s/g, "");
    return textWithoutSpaces.length;
  },

  //getAverageWordLength: (text) => {
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  //¿Cómo se calcula la longitud media de palabras en una cadena de texto?
  //Para calcular la longitud media de palabras en una cadena de texto, primero hay que dividir el texto en palabras individuales. Luego, se calcula la longitud de cada palabra y se suman todas las longitudes. Finalmente, se divide la suma total por el número total de palabras para obtener la longitud media.
  //},

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const count = text.match(/\b\d+(\.\d+)?\b/g);
    return count ? count.length : 0;
  },

  getNumberSum: (text) => {
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  
  },
};

export default analyzer;
