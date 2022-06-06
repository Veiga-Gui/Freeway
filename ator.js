let xAtor = 100;
let yAtor = 390;
let yAtorInicial = 390;
let xAtorInicial = 100;
let colisao = false;
let pontos = 0;

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 4;
  }
  if(keyIsDown(DOWN_ARROW)){
    if (yAtor < yAtorInicial){
         yAtor += 4;
     }
  }
   if(keyIsDown(LEFT_ARROW)){
    xAtor -= 4; 
  }
    if(keyIsDown(RIGHT_ARROW)){
    xAtor += 4; 
}
}   
function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
      colisao = collideRectCircle(xcarros[i],yCarros[i],cpcarro,lgcarro,xAtor,yAtor,15)
    if (colisao){
      somColisao.play();
      yAtor = yAtorInicial;
      xAtor = xAtorInicial;
      if(pontos>0)
        pontos -= 1
    }
  }  
}

function incluipontos(){
  fill(color(255, 240, 60));
  textAlign(CENTER);
  textSize(25)
  text(pontos, width/5 +20, 27)
    if(yAtor < 20){
      somPonto.play();
      yAtor = yAtorInicial;
      xAtor = xAtorInicial;
      pontos++
    }
}
