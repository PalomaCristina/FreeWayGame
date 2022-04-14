//ator
var xAtor = 100;
var yAtor = 366;

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function podeSeMover(){
    return yAtor < 366;
  }