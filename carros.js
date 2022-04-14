
//refatorando codigo
var xCarros = [400, 400, 400, 400, 400, 400];
var yCarros = [40, 95, 150, 210, 265, 320];
var velocidadeCarros = [4.5, 3.8, 5, 4, 3.5, 4.5];
var colisao = false;
var alturaCarro = 40;
var comprimentoCarro = 45;
var meusPontos = 0;

function mostraCarros() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}
//movimentacao e velocidade dos carros
function movimentaCarro() {
    for (let i = 0; i < xCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
}
//esse é o loop para os carros continuarem sempre se movimentando
function voltaCarrosPosicaoInicial() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (xCarros[i] < -50) {
            xCarros[i] = 600;

        }
    }
}

function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
        if (colisao){
            voltaAtorPosicaoInicial();
            if (pontosMaiorQueZero()){
                    meusPontos -= 1;
            }
        }
    }
}


    function incluiPontos() {
        textAlign(CENTER);
        textSize(25);
        fill(color(255, 240, 60))
        text(meusPontos, width / 5, 27);
    }
    function voltaAtorPosicaoInicial() {
        yAtor = 366;
    }
    function marcaPonto() {
        if (yAtor < 15) {
            meusPontos += 1;
            voltaAtorPosicaoInicial();
        }
    }

   function pontosMaiorQueZero(){
        return meusPontos>0;
   }
