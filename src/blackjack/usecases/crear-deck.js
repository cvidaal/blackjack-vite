import _ from "underscore";

/**
 *
 * @param {Array<String>} tiposDeCarta // Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales // Ejemplo: ['A','J','Q','K']
 * @returns {Array} retorna un nuevo deck de cartas
 */

// Exportamos la función para usarla en index.js
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length == 0)
    throw new Error("Tipos de carta es obligatorio como un arreglo de string");
  if (!tiposEspeciales || tiposEspeciales.length == 0)
    throw new Error(
      "Tipos especiales es obligatorio como un arreglo de string"
    );

  let deck = []; // Reiniciar deck

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      // Recorrer arreglo
      deck.push(i + tipo); // Agregar elemento a un arreglo
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  return _.shuffle(deck); // Mezclar deck usando Lodash
};

//! Otra forma de exportar de formar default
// export default crearDeck;
