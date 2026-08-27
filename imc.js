const peso = 60;
const altura = 1.65;

function calcularIMC(peso, altura) {
    const imc = peso / altura ** 2;

    if (imc < 18.5 || imc > 24.9) {
        return "Seu IMC não está ideal, se cuide!";
    } else {
        return "Você está com seu IMC ideal";
    }
}

console.log(calcularIMC(peso, altura));