class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque básico';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  let vitorias;
  let derrotas;
  let nome;
  let idade;
  let tipo;
  
  while (true) {
    vitorias = parseInt(gets());
    derrotas = parseInt(gets());
    if (vitorias === 0 && derrotas === 0) break; // Sai do loop se vitorias e derrotas forem 0
    nome = gets();
    idade = parseInt(gets());
    tipo = gets();
  
    const heroi = new Heroi(nome, idade, tipo);
    heroi.atacar();
  
    function classificarSaldoVitorias(vitorias, derrotas) {
      const saldoVitorias = vitorias - derrotas;
      
      if (saldoVitorias < 10) {
        return { nivel: "Ferro", saldo: saldoVitorias };
      } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        return { nivel: "Bronze", saldo: saldoVitorias };
      } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        return { nivel: "Prata", saldo: saldoVitorias };
      } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        return { nivel: "Ouro", saldo: saldoVitorias };
      } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        return { nivel: "Diamante", saldo: saldoVitorias };
      } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        return { nivel: "Lendário", saldo: saldoVitorias };
      } else if (saldoVitorias >= 101) {
        return { nivel: "Imortal", saldo: saldoVitorias };
      } else {
        return { nivel: "Continua executando", saldo: saldoVitorias };
      }
    }
  
    const resultado = classificarSaldoVitorias(vitorias, derrotas);
    console.log(`O herói ${nome} tem saldo de ${resultado.saldo} e está no nível: ${resultado.nivel}`);
  }
  