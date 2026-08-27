const produto = {
    nome: "Celular",
    preco: 1999.99,
    estoque: 10
};

for (let propriedade in produto) {
    console.log(`${propriedade}: ${produto[propriedade]}`);
}