// Array para armazenar os animais cadastrados
let animais = [];

// Função para cadastrar um novo animal
function cadastrar() {
    let nome = document.getElementById('nomeInput').value;
    let especie = document.getElementById('especieInput').value;
    let idade = document.getElementById('idadeInput').value;
    let sexo = document.getElementById('sexoInput').value;

    // Criar um objeto representando o animal
    const animal = {
        nome: nome,
        especie: especie,
        idade: idade,
        sexo: sexo
    };

    // Adicionar o animal ao array de animais
    animais.push(animal);

    // Atualizar a lista de animais
    exibirLista();

    // Limpar o formulário
    document.getElementById('cadastroForm').reset();
}

// Função para exibir a lista de animais
function exibirLista() {
    const listaAnimais = document.getElementById('listaAnimais');
    listaAnimais.innerHTML = '';

    // Para cada animal no array, criar um item de lista e adicionar à lista
    animais.forEach((animal, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${animal.nome}</strong> - Espécie: ${animal.especie}, Idade: ${animal.idade}, Sexo: ${animal.sexo}`;
        listaAnimais.appendChild(li);
    });
}


// Event listener para o formulário de cadastro
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página ao enviar o formulário
    cadastrar(); // Chama a função de cadastro
});

// Chama a função exibirLista() inicialmente para exibir quaisquer animais já cadastrados
exibirLista();
