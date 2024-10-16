let numeroAleatorio = Math.floor(Math.random() * 101);
let intentos = 0;

document.getElementById("boton").addEventListener("click", function() {
  let numeroIngresado = document.getElementById("numero").value;

  if (numeroIngresado >= 0 && numeroIngresado <= 100) {
    intentos++;

    if (numeroIngresado == numeroAleatorio) {
      document.getElementById("resultado").innerHTML = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
      document.getElementById("boton").disabled = true;
    } else if (numeroIngresado < numeroAleatorio) {
      document.getElementById("resultado").innerHTML = "El número es mayor.";
    } else {
      document.getElementById("resultado").innerHTML = "El número es menor.";
    }

    document.getElementById("intentos").innerHTML = `Intentos: ${intentos}`;
  } else {
    alert("Por favor, ingrese un número entre 0 y 100.");
  }
});
