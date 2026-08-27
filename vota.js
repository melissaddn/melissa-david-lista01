const nome = "Melissa David";
const idade = 18;
 
function verifica(nome, idade) {
  if (idade < 16) {
    console.log(`${nome}, você tem ${idade} anos e ainda não pode votar.`);
  } else if (idade >= 16 && idade < 18) {
    console.log(`${nome}, você tem ${idade} anos. Seu voto é opcional este ano.`);
  } else if (idade >= 18 && idade <= 70) {
    console.log(`${nome}, você tem ${idade} anos. Seu voto é obrigatório este ano.`);
  } else {
    console.log(`${nome}, você tem ${idade} anos. Seu voto é opcional este ano.`);
  }
}
 
verifica(nome, idade);