jokenpo = {

  valorAtualP1: 0,
  valorAtualP2: 0,

  jogar: function () {
    this.valorAtualP1 = Math.floor(Math.random() * 3) + 1;
    this.valorAtualP2 = Math.floor(Math.random() * 3) + 1;
  },
  
  verificaJogada: function () {
    switch (this.valorAtualP1) {
      case 1:
        document.querySelector("#jogada-p1").src = "./img/1.jpg";;
        break;
      case 2:
        document.querySelector("#jogada-p1").src = "./img/2.jpg";
        break;
      case 3:
        document.querySelector("#jogada-p1").src = "./img/3.jpg";
        break;
    }
    switch (this.valorAtualP2) {
      case 1:
        document.querySelector("#jogada-p2").src = "./img/1.jpg";
        break;
      case 2:
        document.querySelector("#jogada-p2").src = "./img/2.jpg";
        break;
      case 3:
        document.querySelector("#jogada-p2").src = "./img/3.jpg";
        break;
    }
  },

  atualizaNaTela: function () {
    this.verificaJogada(this.valorAtualP1);
    this.verificaJogada(this.valorAtualP2);
  },
  
  vencedor: function(){
    switch (this.valorAtualP1){
      case 1:
        switch(this.valorAtualP2){
          case 1:
            document.querySelector("#resultado").textContent = "Empate";
            break;
          case 2:
            document.querySelector("#resultado").textContent = "Jogador 2 é o vencedor!";
            break;
          case 3:
            document.querySelector("#resultado").textContent = "Jogador 1 é o vencedor!";
            break;
        }
      break;
      case 2:
        switch(this.valorAtualP2){
          case 1:
            document.querySelector("#resultado").textContent = "Jogador 1 é o vencedor!";
            break;
          case 2:
            document.querySelector("#resultado").textContent = "Empate";
            break;
          case 3:
            document.querySelector("#resultado").textContent = "Jogador 2 é o vencedor!";
            break;
        }
      break;
      case 3:
        switch(this.valorAtualP2){
          case 1:
            document.querySelector("#resultado").textContent = "Jogador 2 é o vencedor!";
            break;
          case 2:
            document.querySelector("#resultado").textContent = "Jogador 1 é o vencedor!";
            break;
          case 3:
            document.querySelector("#resultado").textContent = "Empate";
            break;
        }
      break;
    }
  },

  jogadorJogou: function () {
    this.jogar();
    this.atualizaNaTela();
    this.vencedor();
  },
};