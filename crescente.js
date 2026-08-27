let vetor = [];
vetor[0] = 9;
vetor[1] = 67;
vetor[2] = 32;

function ordenarCrescente(v) {
    let a = v[0];
  let b = v[1];
  let c = v[2];

 if (a <= b && b <= c) {
    return `Ordem crescente: ${a}, ${b}, ${c}`;
  } else if (a <= c && c <= b) {
    return `Ordem crescente: ${a}, ${c}, ${b}`;
  } else if (b <= a && a <= c) {
    return `Ordem crescente: ${b}, ${a}, ${c}`;
  } else if (b <= c && c <= a) {
    return `Ordem crescente: ${b}, ${c}, ${a}`;
  } else if (c <= a && a <= b) {
    return `Ordem crescente: ${c}, ${a}, ${b}`;
  } else {
    return `Ordem crescente: ${c}, ${b}, ${a}`;
  }
}

console.log(ordenarCrescente(vetor));