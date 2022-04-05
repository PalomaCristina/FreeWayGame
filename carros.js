
//refatorando codigo
var xCarros = [400, 400, 400];
var yCarros = [40, 95, 150];
var velocidadeCarros = [2, 2.9, 2.5];
var colisao = false;
var alturaCarro = 40;
var comprimentoCarro = 45;
function mostraCarros() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);   
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
function verificaColisao() {
    for(let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, yAtor, 15);
        if(colisao) {
            colidiu();
        }
    }
}
function colidiu() {
    //se ator colide com carros, volta para a posição inicial
    yAtor = 366;
}