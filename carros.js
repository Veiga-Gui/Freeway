
let cpcarro = 40;
let lgcarro = 50;
let xcarros = [500, 500, 500, 500, 500, 500];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let yCarros = [40, 100, 160, 220, 270, 330];

function mostraCarros(){
  for (let i = 0; i < imagemCarros.length; i++)
    image(imagemCarros[i],xcarros[i],yCarros[i],lgcarro,cpcarro);
}

function movimentaCarros(){
  for (let i = 0; i < imagemCarros.length; i++){
   //Confere se o carro passou pela borda e reinicializa o mesmo
    if(xcarros[i] < -70){
      xcarros[i] = 500;
      }
      xcarros[i] -= velocidadeCarros [i];
}  
  
}  