import "./style.css";

let turno: number = 1;

const botonSiguienteTurno = document.getElementById('siguienteTurno');

const siguienteTurno = () => {
  turno++;
  displayTurno()
}

const numeroTurno = document.querySelector('.numero-turno');

if (numeroTurno !== null && numeroTurno !== undefined && numeroTurno instanceof HTMLHeadingElement){
  numeroTurno.textContent = `${turno}`.padStart(2, "0");
} else {
  console.log('error!!');
}

if (botonSiguienteTurno !== null && botonSiguienteTurno !== undefined && botonSiguienteTurno instanceof HTMLButtonElement){
 
  botonSiguienteTurno.addEventListener('click',() => {
    siguienteTurno();
  })
}

const botonReset = document.getElementById('reset');
const reset = () => {
  turno = 1;
  displayTurno()
}

if (botonReset !== null && botonReset !== undefined && botonReset instanceof HTMLButtonElement){
  botonReset.addEventListener('click', () => {
    reset();
  })
}

const botonTurnoAnterior = document.getElementById('turnoAnterior');
const turnoAnterior = () => {
  turno = Math.max(turno -1, -1);
  displayTurno()
}

if (botonTurnoAnterior !== null && botonTurnoAnterior !== undefined && botonTurnoAnterior instanceof HTMLButtonElement){
  botonTurnoAnterior.addEventListener('click', () => {
    turnoAnterior();
  })
}

const inputNumeroTurno = document.getElementById('numeroTurno') as HTMLInputElement | null;
const botonCambiarTurno = document.getElementById('cambiarTurno') as HTMLButtonElement | null;

if (inputNumeroTurno && botonCambiarTurno) {
  botonCambiarTurno.addEventListener('click', () => {
    const nuevoTurno = Number(inputNumeroTurno.value);
    
    if (!isNaN(nuevoTurno)) {
      turno = nuevoTurno;
      displayTurno();
    } else {
      console.log('Número inválido');
    }
  });
}

const displayTurno = () => {
  
  if (numeroTurno !== null && numeroTurno !== undefined && numeroTurno instanceof HTMLHeadingElement){
    numeroTurno.textContent = turno.toString().padStart(2, "0");
  }
  
};



//displayTurno();

//.addEventListener("DOMContentLoaded", () => {
//const turnoDisplay = document.querySelector(".turno-display") as HTMLElement;
//
//  const crearBoton = (texto: string, onClick: () => void) => {
//    const boton = document.createElement("button");
//    boton.textContent = texto;
//    boton.addEventListener("click", onClick);
//    boton.style.margin = "10px";
//    boton.style.fontSize = "1rem";
//    turnoDisplay.appendChild(boton);
//  };

//  crearBoton("Anterior", () => {
//    turno = Math.max(1, turno - 1);
//    displayTurno();
//  });

//  crearBoton("Siguiente", () => {
//    turno++;
//    displayTurno();
//  });

//  crearBoton("Reset", () => {
//    turno = 1;
//    displayTurno();
//  });

//  const input = document.createElement("input");
//  input.type = "number";
//  input.min = "1";
//  input.placeholder = "Número de turno";
//  input.style.fontSize = "1rem";
//  input.style.marginTop = "10px";
//  turnoDisplay.appendChild(input);

//  crearBoton("Cambiar turno", () => {
//    const nuevoTurno = parseInt(input.value);
//    if (!isNaN(nuevoTurno) && nuevoTurno > 0) {
//      turno = nuevoTurno;
//      displayTurno();
//    }
//  });
//});
