
//refatorando codigo
var xCarros = [400, 400, 400];
var yCarros = [40, 95, 150];
var velocidadeCarros = [2, 2.9, 2.5];

function mostraCarros() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);   
    }
  }
function movimentaCarro() {
    for (let i = 0; i < xCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
  }
  
function voltaPosicaoInicial(){
    for (let i = 0; i < xCarros.length; i++) {
        if(xCarros[i] == -50){
            xCarros[i] = 600;
        }   
    }
}
//