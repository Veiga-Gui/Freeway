
function setup() {
  createCanvas(500, 420);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  image(imagemDoAtor,xAtor,yAtor,40,40);
  mostraCarros();
  movimentaCarros();
  movimentaAtor();
  verificaColisao();
  incluipontos();
}
