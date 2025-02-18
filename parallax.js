let Taffy = document.getElementById("Taffy");
// let Arbusto = document.getElementById("Arbusto");
let Petalos = document.getElementById("Petalos");
let Arboles = document.getElementById("Arboles");
let Nombre = document.getElementById("Nombre");

// let Fondo = document.getElementById("Fondo");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  Taffy.style.marginTop = value * 1.5 + "px";
  // Arbusto.style.marginTop = value * 0.7 + "px";
  Petalos.style.marginTop = value * 1.8 + "px";
  Arboles.style.marginTop = value * 1.6 + "px";
  Nombre.style.marginTop = value * -1.5 + "px";
  // Fondo.style.marginBottom = value * 0.2 + "px";
});
