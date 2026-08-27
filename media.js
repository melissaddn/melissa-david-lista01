let vetor = [];
vetor[0] = 3;
vetor[1] = 5;
vetor[2] = 7;
vetor[3] = 10;
vetor[4] = 14;

function CalcularMedia(v) {
  let soma = 0;

  for (let i = 0; i < v.length; i++) {
    soma += v[i];
  }

  return soma / v.length;
}

let resultado = CalcularMedia(vetor);
console.log(`A média entre os elementos é: ${resultado}`);