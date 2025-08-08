// Lista de taredas
const tarefas = [
    { titulo: "Estudar Node", status: "pendente" },
    { titulo: "Atualizar Linkedin", status: "concluida" },
    { titulo: "Criar repositorios no GitHub", status: "pendente" }
];

// Total de tarefas
console.log("Total de tarefas:", tarefas.length);

// Filtra pendentes e concluidas
const pendentes = tarefas.filter(tarefas => tarefas.status === "pendente");
const concluidas = tarefas.filter(tarefas => tarefas.status === "concluida");

console.log("Pendentes:", pendentes.length);
console.log("Concluidas:", concluidas.length);

// Lista as pendentes
console.log("\nTarefas pendentes:");
pendentes.forEach(tarefa => console.log("- " + tarefa.titulo));