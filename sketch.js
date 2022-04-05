
function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  image(imagemDoAtor, 100, yAtor, 30, 30);
  mostraCarro1();
  movimentaCarro();
  movimentaAtor();
}
