
function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  mostraCarros();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicial();
}
