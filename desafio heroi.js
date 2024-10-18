let xp;
let nome;

while (true) {
  xp = parseInt(gets());
  if (xp === 0) break; // Sai do loop se xp for 0
  nome = gets();

  function classificarXP(xp) {
    if (xp >= 1000 && xp <= 1001) {
      return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
      return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      return "Prata";
    } else if (xp >= 6001 && xp <= 7000) {
      return "Outro";
    } else if (xp >= 7001 && xp <= 8000) {
      return "Platina Diamante";
    } else if (xp >= 8001 && xp <= 9000) {
      return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      return "Imortal";
    } else if (xp >= 10001) {
      return "Radiante";
    } else {
      return "Continua executando";
    }
  }

  const classificacao = classificarXP(xp);
  console.log(`O herói ${nome} está no nível: ${classificacao}`);
}
