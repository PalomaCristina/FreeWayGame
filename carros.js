
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
function movimentaCarro() {
    for (let i = 0; i < xCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicial() {
    for (let i = 0; i < imagemCarros.length; i++) {
        if (xCarros[i] < -50) {
            xCarros[i] = 600;

        }
    }
}

function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
        //print('colisao: '+colisao);
        if (colisao) {
            voltaAtorPosicaoInicial();
            //somDaColisao.play();
            if (pontosMaiorQueZero()) {
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
        return meusPontos > 0;
   }