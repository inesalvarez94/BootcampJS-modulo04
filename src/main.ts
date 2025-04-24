import "./style.css";

let turno: number = 1;

const numeroTurno = document.querySelector(".numero-turno") as HTMLElement;
const displayTurno = () => {
  numeroTurno.textContent = turno.toString().padStart(2, "0");
};

displayTurno();

document.addEventListener("DOMContentLoaded", () => {
  const turnoDisplay = document.querySelector(".turno-display") as HTMLElement;

  const crearBoton = (texto: string, onClick: () => void) => {
    const boton = document.createElement("button");
    boton.textContent = texto;
    boton.addEventListener("click", onClick);
    boton.style.margin = "10px";
    boton.style.fontSize = "1rem";
    turnoDisplay.appendChild(boton);
  };

  crearBoton("Anterior", () => {
    turno = Math.max(1, turno - 1);
    displayTurno();
  });

  crearBoton("Siguiente", () => {
    turno++;
    displayTurno();
  });

  crearBoton("Reset", () => {
    turno = 1;
    displayTurno();
  });

  const input = document.createElement("input");
  input.type = "number";
  input.min = "1";
  input.placeholder = "Número de turno";
  input.style.fontSize = "1rem";
  input.style.marginTop = "10px";
  turnoDisplay.appendChild(input);

  crearBoton("Cambiar turno", () => {
    const nuevoTurno = parseInt(input.value);
    if (!isNaN(nuevoTurno) && nuevoTurno > 0) {
      turno = nuevoTurno;
      displayTurno();
    }
  });
});
