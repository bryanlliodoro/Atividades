
let numero1 = "";
let numero2 = "";
let operadorEscolhido = "";

let display = document.getElementById("display");

function adicionarNumero(numero) {
  if (numero1 == "" && numero2 == "") {
    display.value = numero;
    numero1 = numero;
  } else {
    if (operadorEscolhido == "") {
      numero1 = numero1 + numero;
      display.value = numero1;
    } else {
      numero2 = numero2 + numero;
      display.value = numero2;
    }
  }
}

function escolherOperador(op) {
  operadorEscolhido = op;
}

function calcular() {
  let resultado = 0;
  let n1 = parseFloat(numero1);
  let n2 = parseFloat(numero2);

  if (operadorEscolhido == "+") {
    resultado = n1 + n2;
  } else if (operadorEscolhido == "-") {
    resultado = n1 - n2;
  } else if (operadorEscolhido == "*") {
    resultado = n1 * n2;
  } else if (operadorEscolhido == "/") {
    resultado = n1 / n2;
  }

  display.value = resultado;
  numero1 = "";
  numero2 = "";
  operadorEscolhido = "";
}

function limpar() {
  numero1 = "";
  numero2 = "";
  operadorEscolhido = "";
  display.value = "0";
}


let botoes = document.querySelectorAll(".btn[data-value]");

botoes.forEach(function(botao) {
  botao.addEventListener("click", function() {
    let valor = botao.getAttribute("data-value");
    adicionarNumero(valor);
  });
});

document.getElementById("add").addEventListener("click", function() {
  escolherOperador("+");
});

document.getElementById("sub").addEventListener("click", function() {
  escolherOperador("-");
});

document.getElementById("mult").addEventListener("click", function() {
  escolherOperador("*");
});

document.getElementById("div").addEventListener("click", function() {
  escolherOperador("/");
});


document.getElementById("calcular").addEventListener("click", function() {
  calcular();
});

document.getElementById("limpar").addEventListener("click", function() {
  limpar();
});