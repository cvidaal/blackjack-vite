/**
 *
 * @param {String} carta
 * @returns {Number} valor de la carta // Ejemplo: '2C' => 2, 'AD' => 11, 'KH' => 10
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1); // Primera posición del string
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1; // Si no es un número, es una letra (A,J,Q,K)
};
