function validacaoCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
    return false;
  }

  var soma = 0;
  for (var i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  var resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.charAt(9))) {
    return false;
  }

  soma = 0;
  for (i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
}

function instrucao(campoId, instrucoes) {
  var campo = document.getElementById(campoId);
  var hintElement = document.createElement('span');
  hintElement.className = 'input-hint';
  hintElement.innerHTML = instrucoes;

  campo.parentNode.insertBefore(hintElement, campo.nextSibling);
}

function rinstrucao(campoId) {
  var campo = document.getElementById(campoId);
  var hintElement = campo.nextSibling;

  if (hintElement && hintElement.className === 'input-hint') {
    campo.parentNode.removeChild(hintElement);
  }
}

function validacaoCampos() {
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  var nome = document.getElementById('nome').value;  
  var nome = document.getElementById('sobrenome').value;
  var cpf = document.getElementById('cpf').value;
  var celular = document.getElementById('celular').value;

  if (email.trim() === '') {
    alert('Preencha o campo e-mail corretamente.');
    return false;
  }

  if (senha.trim() === '') {
    alert('Preencha o campo senha.');
    return false;
  }

  if (nome.trim() === '') {
    alert('Preencha o campo nome corretamente.');
    return false;
  }

  if (nome.trim() === '') {
    alert('Preencha o campo sobrenome corretamente.');
    return false;
  }

  if (celular.trim() === '') {
    alert('Preencha o campo celular corretamente.');
    return false;
  }

  if (cpf.trim() === '') {
    alert('Preencha o campo CPF corretamente.');
    return false;
  }

  if (!validacaoCPF(cpf)) {
    document.getElementById('cpf').classList.add('invalid-field');
    alert('CPF não identificado!');
    return false;
  }

  alert('Formulário enviado!!!');
  return true;
}