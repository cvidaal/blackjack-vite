// Turno de la IA
import { pedirCarta } from "./pedir-carta.js";
import { acumularPuntos } from "../index.js";
import { puntosJugadores} from "../index.js";
import { crearCarta } from "./crear-carta.js";
import { determinarGanador } from "./determinar-ganador.js";
/**
 *
 * @param {Number} puntosMinimos Puntos mínimos que la IA necesita para ganar
 * @param {Array<String>} deck El mazo de cartas
 */

export const turnoIA = (puntosMinimos, deck) => {
  let puntosIA = 0;
  do {
    const carta = pedirCarta(deck);
    puntosIA = acumularPuntos(carta, puntosJugadores.length - 1);
    crearCarta(carta, puntosJugadores.length - 1);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosIA < puntosMinimos && puntosMinimos <= 21);

  // Determinar ganador
  determinarGanador();
};
