//imagens

let imagemDaEstrada;
let imagemDoAtor;
let imagemColisao;
let imagemAux;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//sons

let somTrilha;
let somColisao;
let somPonto;

//carregando imagens
function preload(){
  imagemDaEstrada = loadImage('imagens/estrada.png');
  imagemDoAtor = loadImage('imagens/homer.png');
  imagemColisao = loadImage('imagens/colidindo.png');
  imagemCarro = loadImage('imagens/carro-1.png');
  imagemCarro2 = loadImage('imagens/carro-2.png');
  imagemCarro3 = loadImage('imagens/carro-3.png');
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  //carregando sons
  
  somTrilha = loadSound('sons/trilha.mp3');
  somColisao = loadSound('sons/colidiu.mp3');
  somPonto = loadSound('sons/pontos.wav');
  }
