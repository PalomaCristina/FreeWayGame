
//refatorando codigo
var xCarros = [400, 400, 400, 400, 400, 400];
var yCarros = [40, 95, 150, 210, 265, 320];
var velocidadeCarros = [4.5, 3.8, 5, 4, 3.5, 4.5];
var colisao = false;
var alturaCarro = 40;
var comprimentoCarro = 45;
function mostraCarros() {
    for(let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);   
    }
  }
function movimentaCarro() {
    for(let i = 0; i < xCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
  }
  
function voltaPosicaoInicial(){
    for(let i = 0; i < imagemCarros.length; i++){
        if(xCarros[i] < -50){
            xCarros[i] = 600;
            
        }   
    }
}

function verificaColisao() {
    for(let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
        //print('colisao: '+colisao);
        if(colisao) {
            colidiu();
        }
    }
}
function colidiu(){
    //se ator colide com carros, volta para a posição inicial
    yAtor = 366;
}