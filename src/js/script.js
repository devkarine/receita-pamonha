const reduce = document.getElementById("reduce");
const increase = document.getElementById("increase");
const quant = document.querySelectorAll(".quant");

const portion = document.getElementById("portion");

let contador = 1;

increase.addEventListener("click", () => {
  contador++;
  portion.innerText = contador;

  Array.from(quant).forEach((e) => {
    e.innerText = contador;
  });
});

reduce.addEventListener("click", () => {
  if (contador > 1) {
    contador--;
  }
  portion.innerText = contador;

  Array.from(quant).forEach((e) => {
    e.innerText = contador;
  });
});
