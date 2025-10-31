import { puntosJugadores } from "../index.js";

// Determinar ganador
export const determinarGanador = () => {
  const [puntosMinimos, puntosIA] = puntosJugadores; // Desestructuración de arreglos

  setTimeout(() => {
    if (puntosIA === puntosMinimos) {
      alert("Nadie gana (EMPATE)");
    } else if (puntosMinimos <= 21 && puntosIA > 21) {
      alert("Jugador GANA");
    } else {
      alert("IA GANA");
    }
  }, 100);
};