class Forca {
  constructor(palavra) {
    this.palavra = palavra; //Chamando o parâmetro de forca e setando na variável.
    this.letrasChutadas = []; //Definindo a variável letrasChutadas.
    this.vidas = 6; //Definindo a variável vidas.
    this.acertos = []; //Definindo a variável acertos.
  }

  getPalavra() {
    //Método para separar cada letra da palavra em array.
    return this.palavra
      .split("")
      .map((letra) => {
        if (this.acertos.includes(letra)) return letra;
        else return "_";
      })
      .join("");
  }

  chutar(letras) {
    const letra = letras[0];
    if (this.letrasChutadas.includes(letra) || this.acertos.includes(letra)) {
      // Se a letra que for inserida, já estiver nas letrasChutadas ou na letras corretas =>
      return console.log("Essa letra já foi"); //Retorna um log dizendo que a letra já foi utilizada.
    }
    if (letras.length == 1) {
      // Se o numero de letras chutadas forem iguais a 1, então =>
      this.letrasChutadas.push(letra); //Adiciona a letra chutada ao array de letrasChutadas.
      if (this.palavra.includes(letra)) {
        // Se na palavra conter a letra, entra no IF
        this.acertos.push(letra); // Adiciona a letra chutada ao final do array.
        console.log("Temos " + letra); // Informa se a letra se encontra na palavra.
      } else {
        console.log("Não temos " + letra); // Se não tiver uma letra, informa que a letra não está na palavra.
        this.vidas--; // Conta uma vida a menos, por ter errado a letra.
        return this.vidas; // Retorna -1 no numero de vidas atuais.
      }
    } else {
      //Se o chute tiver mais de uma letra então =>
      console.log(
        "Jogada inválida, ela contém mais de uma letra, tente outra vez."
      );
    }
  }

  buscarEstado() {
    // Possíveis valores: "perdeu", "aguardando chute" ou "ganhou"
    if (this.vidas <= 0) {
      // Se as vidas forem menor ou igual a zero =>
      return "perdeu"; //retorna a info perdeu.
    }
    if (this.palavra.split("").every((letra) => this.acertos.includes(letra))) {
      // Se todas as letras da palavra tiverem sido preenchidas =>
      return "ganhou"; //retorna info ganhou.
    }
    return "aguardando chute"; // Se a informação não for atingida pelo IF, continua aguardando.
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      acertos: this.acertos, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      //palavra: this.palavra.split("") // --- Validação necessitava de uma variável splitada.
    };
  }
}
module.exports = Forca;
