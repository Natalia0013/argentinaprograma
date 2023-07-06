//2
function obtenerJugadaComputadora() {
    const numeroAleatorio = Math.floor (Math.random() * 3);

    if (numeroAleatorio === 0) {
        return "piedra";
    } else if (numeroAleatorio === 1) {
        return "papel";
    } else { 
        return "tijeras";
    }
}

//3

const readlineSync = require('readline-sync');

function obtenerJugadaUsuario() {
    const jugada = readlineSync.question("Elige tu jugada (piedra, papel o tijeras): ");
    return jugada;
}

//4

function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
      return "Empate";
    } else if (
      (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
      (jugadaComputadora === "papel" && jugadaUsuario === "piedra") ||
      (jugadaComputadora === "tijeras" && jugadaUsuario === "papel")
    ) {
      return "Gana la computadora";
    } else {
      return "Gana el usuario";
    }
  }

//5

const jugadaComputadora = obtenerJugadaComputadora();
const jugadaUsuario = obtenerJugadaUsuario();
const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

// 6

console.log("La computadora eligió:", jugadaComputadora);
console.log("El usuario eligió:", jugadaUsuario);
console.log("El resultado fue:", resultado);
