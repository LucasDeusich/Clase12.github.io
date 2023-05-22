function saludo() {
  let nombre = prompt("Ingrese su nombre");
  
  if (nombre !== null && nombre !== "") {
    alert("¡Bienvenido/a, " + nombre + "!");
  } else {
    alert("Por favor, ingrese su nombre.");
  }
}

// Llamada a la función saludo
saludo();