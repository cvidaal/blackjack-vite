import _ from "underscore";
import { crearDeck, pedirCarta, valorCarta, turnoIA, crearCarta} from "./usecases/index";

// Variables
let deck = [];
const tiposDeCarta = ["C", "D", "H", "S"],
  tiposEspeciales = ["A", "J", "Q", "K"];

export const puntosJugadores = []; // Arreglo de puntos

// Referencias de HTML
const btnPedir = document.querySelector("#btnPedirCarta"),
  btnDetener = document.querySelector("#btnDetener"),
  btnNuevo = document.querySelector("#btnNuevo");

export const divCartasJugadores = document.querySelectorAll(".divCartas"),
  puntosHTML = document.querySelectorAll("small");

// Inicializar juego
const inicializarJuego = (numJugadores = 2) => {
  deck = crearDeck(tiposDeCarta, tiposEspeciales);
  puntosJugadores.length = 0; // Reiniciar arreglo de puntos

  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }
  // Limpiar puntos de jugador y de la IA
  puntosHTML.forEach((elem) => (elem.innerText = 0));

  // Limpiar las cartas del jugador y de la IA
  divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));

  // Habilitar botones
  btnPedir.disabled = false;
  btnDetener.disabled = false;
};

// Turno: 0 = primer jugador y el último será la IA
export const acumularPuntos = (carta, turno) => {
  puntosJugadores[turno] += valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};


// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(carta, 0);

  crearCarta(carta, 0);

  if (puntosJugador > 21) {
    console.warn("Lo siento mucho, perdiste");
    btnPedir.disabled = true; // Deshabilitar botón
    turnoIA(puntosJugador, deck); // Llamar a la función de la IA si el jugador se pasa de 21
  } else if (puntosJugador === 21) {
    console.warn("21, genial!");
    btnPedir.disabled = true; // Deshabilitar botón
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoIA(puntosJugadores[0], deck);
});

btnNuevo.addEventListener("click", () => {
  inicializarJuego(2);
});
