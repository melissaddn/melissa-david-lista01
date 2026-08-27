let vetor = [5, 1, 9, 3, 12];

let maior = vetor[0];
let menor = vetor[0];

for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
    }
    if (vetor[i] < menor) {
        menor = vetor[i];
    }
}

console.log(`O maior valor é: ${maior}`);
console.log(`O menor valor é: ${menor}`);