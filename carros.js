
var xCarro = 400;
var yCarro = 40;
var velocidadeCarro = 2;

var xCarro2 = 400;
var yCarro2 = 95;
var velocidadeCarro2 = 3;

var xCarro3 = 400;
var yCarro3 = 150;
var velocidadeCarro3 = 2.5;

function mostraCarro1() {
    image(imagemCarro1, xCarro, yCarro, 40, 40);
    image(imagemCarro2, xCarro2, yCarro2, 40, 40);
    image(imagemCarro3, xCarro3, yCarro3, 40, 40);
  }
function movimentaCarro() {
    xCarro -= velocidadeCarro;
    xCarro2 -= velocidadeCarro2;
    xCarro3 -= velocidadeCarro3;
  }
  
  