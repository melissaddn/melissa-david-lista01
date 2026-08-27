const carros = [
    {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2002
    },
    {
        marca: "Volkswagen",
        modelo: "Gol",
        ano: 1980
    },
    {
        marca: "BYD",
        modelo: "Dolphin",
        ano: 2021
    }
];

for (let i = 0; i < carros.length; i++) {
    if (carros[i].ano > 2015) {
        console.log(`${carros[i].marca} ${carros[i].modelo} (${carros[i].ano})`);
    }
}