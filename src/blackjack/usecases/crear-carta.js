import { divCartasJugadores } from "../index.js";

/**
 *
 * @param {String} carta // Ejemplo: '5C', 'AD'
 * @param {Number} turno // 0 = primer jugador, último = IA
 */
// Crear carta
export const crearCarta = (carta, turno) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugadores[turno].append(imgCarta);
};
