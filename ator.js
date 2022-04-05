//ator
var yAtor = 366;

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 4;
    }else if(keyIsDown(DOWN_ARROW)){
      yAtor += 4;
    }
  }