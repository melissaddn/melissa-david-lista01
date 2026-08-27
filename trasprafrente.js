let vetor = [];
vetor[0] = 3;
vetor[1] = 5;
vetor[2] = 7;
vetor[3] = 10;
vetor[4] = 14;

function TrasPraFrente(v) {
    let i;

    for (i = v.length - 1; i >= 0; i--) {
        console.log(v[i]);
    }
}

TrasPraFrente(vetor);