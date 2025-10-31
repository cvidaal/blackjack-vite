/**
 * @param {Array<String>} deck
 * @returns  {String} deck.pop()
 */

// Función para tomar una carta del deck

export const pedirCarta = (deck) => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  } // Validar que el deck no esté vacío

  return deck.pop();
};
