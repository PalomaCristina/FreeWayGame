var imagemDaEstrada;
var imagemDoAtor;
var imagemCarro1;
var imagemCarro2;
var imagemCarro3;
//variaveis carro

var xCarro = 400;


function preload(){
  imagemDaEstrada = loadImage("material/estrada.png");
  imagemDoAtor = loadImage("material/ator-1.png");
  imagemCarro1 = loadImage("material/carro-1.png");
  imagemCarro2 = loadImage("material/carro-2.png");
  imagemCarro3 = loadImage("material/carro-3.png");

}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  image(imagemDoAtor, 100, 365, 30, 30);
  mostraCarro1();
  movimentaCarro();
}
function mostraCarro1() {
  image(imagemCarro1, xCarro, 40, 40, 40);
}

function movimentaCarro() {
  xCarro -= 2;
}

