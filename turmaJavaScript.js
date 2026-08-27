const turmas = [
  {
    nomeProfessor: "Prof. Marcos",
    alunos: [
      { nome: "Ana", nota: 8.5 },
      { nome: "Pedro", nota: 5.0 },
      { nome: "Carla", nota: 7.0 }
    ]
  },
  {
    nomeProfessor: "Prof. Juliana",
    alunos: [
      { nome: "Diego", nota: 6.2 },
      { nome: "Elena", nota: 9.5 },
      { nome: "Felipe", nota: 4.8 }
    ]
  }
];
function ordenarAlunosPorNota(listaTurmas) {
  listaTurmas.forEach(turma => {
    turma.alunos.sort((a, b) => a.nota - b.nota);
  });
}
function imprimirStatusAlunos(listaTurmas) {
  listaTurmas.forEach(turma => {
    console.log(`\n--- Turma do(a) ${turma.nomeProfessor} ---`);
    
    turma.alunos.forEach(aluno => {
      if (aluno.nota >= 7) {
        console.log(`Parabéns ${aluno.nome}, você foi aprovado com a nota ${aluno.nota}`);
      } else {
        console.log(`Não foi dessa vez ${aluno.nome}, você reprovou com a nota ${aluno.nota}`);
      }
    });
  });
}
ordenarAlunosPorNota(turmas);
imprimirStatusAlunos(turmas);
