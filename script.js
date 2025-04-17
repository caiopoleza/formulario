
function validarformulario() {
  const nome = document.getElementById('nome').value;

  const idade = document.getElementById('idade').value;

  const altura = document.getElementById('altura').value;

  const dataNascimento = document.getElementById('data').value;

  const email = document.getElementById('email').value;

  const senha = document.getElementById('senha').value;

  const animal = document.getElementById('animal').checked;

  const irmaos = document.getElementById('irmaos').checked;

  const carro = document.getElementById('carro').checked;

  const modeloCarro = document.getElementById('modelo').value;

  const nomePai = document.getElementById('nomepai').value;

  const idadePai = document.getElementById('idadepai').value;

  const nomeMae = document.getElementById('nomemãe').value;

  const idadeMae = document.getElementById('idademãe').value;

  const time = document.getElementById('time').checked;

  const nomeTime = document.getElementById('nometime').value;

  const filme = document.getElementById('filme').value;

  const ator = document.getElementById('ator').value;
  

  let isValid = true;
  let messages = [];

  if (!nome) {
    isValid = false;
    messages.push("Nome é obrigatório.");
  }

  if (!idade || idade <= 0) {
    isValid = false;
    messages.push("Idade deve ser um número positivo.");
  }

  if (!altura || altura <= 0) {
    isValid = false;
    messages.push("Altura deve ser um número positivo.");
  }

  if (!dataNascimento) {
    isValid = false;
    messages.push("Data de nascimento é obrigatória.");
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    isValid = false;
    messages.push("Email inválido.");
  }

  if (!senha || senha.length < 6) {
    isValid = false;
    messages.push("Senha deve ter pelo menos 6 caracteres.");
  }

  if (!nomePai) {
    isValid = false;
    messages.push("Nome do pai é obrigatório.");
  }

  if (!idadePai || idadePai <= 0) {
    isValid = false;
    messages.push("Idade do pai deve ser um número positivo.");
  }

  if (!nomeMae) {
    isValid = false;
    messages.push("Nome da mãe é obrigatório.");
  }

  if (!idadeMae || idadeMae <= 0) {
    isValid = false;
    messages.push("Idade da mãe deve ser um número positivo.");
  }

  if (time && !nomeTime) {
    isValid = false;
    messages.push("Nome do time é obrigatório se você torce para algum time.");
  }

  if (!filme) {
    isValid = false;
    messages.push("Filme favorito é obrigatório.");
  }

  if (!ator) {
    isValid = false;
    messages.push("Ator favorito é obrigatório.");
  }

  if (!isValid) {
    alert(messages.join("\n"));
  } else {
    alert("Formulário enviado com sucesso!");
  }
}









