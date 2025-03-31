function somar() {
  let n1 = window.document.getElementById("n1");
  let n2 = window.document.getElementById("n2");
  let resposta1 = window.document.getElementById("resp1");
  let resposta2 = window.document.getElementById("resp2");
  let numero1 = Number(n1.value);
  let numero2 = Number(n2.value);
  let somatoria = numero1 + numero2;
  resposta1.innerText = `A Soma entre ${numero1} e ${numero2} é ${somatoria}`;
}

let fundo0 = window.document.getElementById("01");
let fundo1 = window.document.getElementsByClassName("newsbox")[1];
let fundo2 = window.document.getElementsByClassName("newsbox")[2];
let fundo3 = window.document.getElementsByClassName("newsbox")[3];
let fundo4 = window.document.getElementsByClassName("newsbox")[4];
let fundo5 = window.document.getElementsByClassName("newsbox")[5];
let fundo6 = window.document.getElementsByClassName("newsbox")[6];
let fundo7 = window.document.getElementsByClassName("newsbox")[7];
let fundo8 = window.document.getElementsByClassName("newsbox")[8];

fundo0.addEventListener("mouseenter", mudarCorIn0);
fundo0.addEventListener("mouseout", mudarCorOut0);

function clickou() {
  fundo0.innerText = "Clicou Aqui !";
  fundo1.innerText = "Clicou Aqui !";
  fundo2.innerText = "Clicou Aqui !";
  fundo3.innerText = "Clicou Aqui !";
  fundo4.innerText = "Clicou Aqui !";
  fundo5.innerText = "Clicou Aqui !";
  fundo6.innerText = "Clicou Aqui !";
  fundo7.innerText = "Clicou Aqui !";
  fundo8.innerText = "Clicou Aqui !";
  fundo0.style.backgroundColor = "#90EE90";
  fundo1.style.backgroundColor = "#90EE90";
  fundo2.style.backgroundColor = "#90EE90";
  fundo3.style.backgroundColor = "#90EE90";
  fundo4.style.backgroundColor = "#90EE90";
  fundo5.style.backgroundColor = "#90EE90";
  fundo6.style.backgroundColor = "#90EE90";
  fundo7.style.backgroundColor = "#90EE90";
  fundo8.style.backgroundColor = "#90EE90";
}

function mudarCorIn0() {
  fundo0.style.backgroundColor = "#F08080";
}

function mudarCorOut0() {
  fundo0.style.backgroundColor = "white";
}

function mudarCorIn1() {
  fundo1.style.backgroundColor = "#F08080";
}

function mudarCorOut1() {
  fundo1.style.backgroundColor = "white";
}

function mudarCorIn2() {
  fundo2.style.backgroundColor = "#F08080";
}

function mudarCorOut2() {
  fundo2.style.backgroundColor = "white";
}

function mudarCorIn3() {
  fundo3.style.backgroundColor = "#F08080";
}

function mudarCorOut3() {
  fundo3.style.backgroundColor = "white";
}

function mudarCorIn4() {
  fundo4.style.backgroundColor = "#F08080";
}

function mudarCorOut4() {
  fundo4.style.backgroundColor = "white";
}

function mudarCorIn5() {
  fundo5.style.backgroundColor = "#F08080";
}

function mudarCorOut5() {
  fundo5.style.backgroundColor = "white";
}
function mudarCorIn6() {
  fundo6.style.backgroundColor = "#F08080";
}

function mudarCorOut6() {
  fundo6.style.backgroundColor = "white";
}

function mudarCorIn7() {
  fundo7.style.backgroundColor = "#F08080";
}

function mudarCorOut7() {
  fundo7.style.backgroundColor = "white";
}
function mudarCorIn8() {
  fundo8.style.backgroundColor = "#F08080";
}

function mudarCorOut8() {
  fundo8.style.backgroundColor = "white";
}
function mudarCorIn9() {
  fundo8.style.backgroundColor = "#F08080";
}

function mudarCorOut9() {
  fundo8.style.backgroundColor = "white";
}
function mudarCorIn10() {
  fundo8.style.backgroundColor = "#F08080";
}

function mudarCorOut10() {
  fundo8.style.backgroundColor = "white";
}
function mudarCorIn11() {
  fundo8.style.backgroundColor = "#F08080";
}

function mudarCorOut11() {
  fundo8.style.backgroundColor = "white";
}

function mudarCorIn12() {
  fundo8.style.backgroundColor = "#F08080";
}

function mudarCorOut12() {
  fundo8.style.backgroundColor = "white";
}

function mudarCorIn13() {
  fundo8.style.backgroundColor = "#F08080";
}

function mudarCorOut13() {
  fundo8.style.backgroundColor = "white";
}

function mudarCorIn14() {
  fundo8.style.backgroundColor = "#F08080";
}

function mudarCorOut14() {
  fundo8.style.backgroundColor = "white";
}

function mudarCorIn15() {
  fundo8.style.backgroundColor = "#F08080";
}

function mudarCorOut15() {
  fundo8.style.backgroundColor = "white";
}

function mudarCorIn16() {
  fundo8.style.backgroundColor = "#F08080";
}

function mudarCorOut16() {
  fundo8.style.backgroundColor = "white";
}

function mudarCorIn17() {
  fundo8.style.backgroundColor = "#F08080";
}

function mudarCorOut17() {
  fundo8.style.backgroundColor = "white";
}

function caixa() {
  let produto = window.document.getElementById("produto1");
  let quantidade = window.document.getElementById("unidades");
  let produtoValor = Number(produto.value);
  let quantidadeUni = Number(quantidade.value);
  let valorTotal = produtoValor * quantidadeUni;
  let dinheiroRecebido = Number.parseFloat(
    window.document.getElementById("dinheiro").value
  );
  let troco = dinheiroRecebido - valorTotal;
  let respostaTotal1 = window.document.getElementById("resultado1");
  let respostaRecebeu = window.document.getElementById("resultado2");
  let respostaTroco = window.document.getElementById("resultado3");
  let faltaDinheiro = valorTotal - dinheiroRecebido;

  if (troco >= 0) {
    respostaTotal1.innerText = `O Total é R$ ${valorTotal.toFixed(2)}`;
    respostaRecebeu.innerText = `Você recebeu R$ ${dinheiroRecebido.toFixed(2)}`;
    respostaTroco.innerText = `O troco é R$ ${troco.toFixed(2)}`;
    respostaTroco.style.backgroundColor = `#90ee90 `;
  } else {
    respostaTotal1.innerText = `O Total é R$ ${valorTotal.toFixed(2)}`;
    respostaRecebeu.innerText = `Você recebeu R$ ${dinheiroRecebido.toFixed(2)}`;
    respostaTroco.innerText = `Faltam R$ ${faltaDinheiro.toFixed(2)}`;
    respostaTroco.style.backgroundColor = `rgb(231, 77, 77)`;
  }
}

function somarNotas() {
  let notaPrimeira = Number.parseFloat(
    window.document.getElementById("nota1").value
  );
  let notaSegunda = Number.parseFloat(
    window.document.getElementById("nota2").value
  );
  let totalNotas = notaPrimeira + notaSegunda;
  let respostaTotalNotas = window.document.getElementById("notaTotal");
  let resultadoFinal = window.document.getElementById("resultadoAno");

  if (totalNotas >= 60) {
    respostaTotalNotas.innerText = ` O total das suas notas é ${totalNotas}`;
    resultadoFinal.innerText = ` Você está Aprovado!`;
    resultadoFinal.style.backgroundColor = `#90ee90 `;
  } else {
    respostaTotalNotas.innerText = ` O total das suas notas é ${totalNotas}`;
    resultadoFinal.innerText = ` Você está Reprovado!`;
    resultadoFinal.style.backgroundColor = `rgb(231, 77, 77) `;
  }
}

function menorDeTres() {
  let numero01 = Number(window.document.getElementById("nn1").value);
  let numero02 = Number(window.document.getElementById("nn2").value);
  let numero03 = Number(window.document.getElementById("nn3").value);
  /// ESSE SERIA O MAIS CURTO
  ///   let menordeTodos = Math.min(numero01, numero02, numero03);
  let menordeTodos = " ";
  let numeroResultado = window.document.getElementById("menorNumero");

  if (numero01 <= numero02 && numero03) {
    let menordeTodos = numero01;
    numeroResultado.innerText = `O menor número é ${menordeTodos}`;
  }
  if (numero02 <= numero01 && numero03) {
    let menordeTodos = numero02;
    numeroResultado.innerText = `O menor número é ${menordeTodos}`;
  }
  if (numero03 <= numero01 && numero02) {
    let menordeTodos = numero03;
    numeroResultado.innerText = `O menor número é ${menordeTodos}`;
  }
}

function minutosValor() {
  let minutos = Number(window.document.getElementById("minutos").value);
  let franquia = 100;
  let overFranquia = minutos - franquia;
  let resultadoFranquia = window.document.getElementById("valorAPagar");
  totalFranquia = "";
  valorFranquia = 50;
  totalGeral = "";

  if (minutos > franquia) {
    totalFranquia = overFranquia * 2;
    totalGeral = valorFranquia + totalFranquia;
    resultadoFranquia.innerText = `O valor a pagar é ${totalGeral} reais`;
  } else {
    resultadoFranquia.innerText = `O valor a pagar é ${valorFranquia} reais`;
  }
}

function glicose() {
  let glicoseValue = Number(
    window.document.getElementById("glicoseValue").value
  );
  let normal = 100;
  let elevado = 140;
  let resultadoGlicose = window.document.getElementById("glicoseTotal");

  if (glicoseValue <= normal) {
    resultadoGlicose.innerText = `Resultado: Normal`;
    resultadoGlicose.style.backgroundColor = "#90ee90";
  } else if (glicoseValue <= elevado) {
    resultadoGlicose.innerText = `Resultado: Elevado`;
    resultadoGlicose.style.backgroundColor = "#ffff00";
  } else if (glicoseValue > 140) {
    resultadoGlicose.innerText = `Resultado: Diabetes`;
    resultadoGlicose.style.backgroundColor = "#f1807e";
  }
}

function maiorDistancia() {
  let dis1 = Number(window.document.getElementById("distancia1").value);
  let dis2 = Number(window.document.getElementById("distancia2").value);
  let dis3 = Number(window.document.getElementById("distancia3").value);
  /// ESSE SERIA O MAIS CURTO
  ///   let menordeTodos = Math.min(numero01, numero02, numero03);
  let maiorDeTodos = " ";
  let resultadoDistancia = window.document.getElementById(
    "maiorDistanciaFinal"
  );

  if (dis1 >= dis2 && dis3) {
    let maiorDeTodos = dis1;
    resultadoDistancia.innerText = `A maior distância é : ${maiorDeTodos}`;
  }
  if (dis2 >= dis1 && dis3) {
    let maiorDeTodos = dis2;
    resultadoDistancia.innerText = `A maior distância é : ${maiorDeTodos}`;
  }
  if (dis3 >= dis1 && dis2) {
    let maiorDeTodos = dis3;
    resultadoDistancia.innerText = `A maior distância é : ${maiorDeTodos}`;
  }
}

function converterTemp() {
  let selecaoTemperatura = Number(
    window.document.getElementById("selecao").value
  );
  let userTemp = Number(window.document.getElementById("temperatura").value);

  let cTof = userTemp * 1.8 + 32;
  let fToC = (userTemp - 32) / 1.8;
  let tempResult = window.document.getElementById("tempFinal");
  cTof = cTof.toFixed(2);
  fToC = fToC.toFixed(2);

  switch (selecaoTemperatura) {
    case 0:
      tempResult.innerText = `A temperatudo em Fahrenheit é ${cTof}`;
      break;
    case 1:
      tempResult.innerText = `A temperatudo em Celcius é ${fToC}`;
      break;
  }
}

function caixaCodigo() {
  let productId = Number(window.document.getElementById("produtoCodigo").value);
  let unitPrice = "";
  let productUnits = Number(
    window.document.getElementById("produtoQuantidade").value
  );
  let valorUnidade = window.document.getElementById("valorUnitario");
  let valorFinal = window.document.getElementById("valorFinal");

  switch (productId) {
    case 0:
      unitPrice = 5;
      valorUnidade.innerText = `O valor unitário é ${unitPrice}`;
      valorFinal.innerText = `O valor final é ${unitPrice * productUnits}`;
      break;
    case 1:
      unitPrice = 10;
      valorUnidade.innerText = `O valor unitário é ${unitPrice}`;
      valorFinal.innerText = `O valor final é ${unitPrice * productUnits}`;
      break;
  }
}

function sobeOuDesce() {
  let num1 = 0;
  let num2 = 0;

  do {
    let num1 = Number(window.prompt("Digite seu 1º número aqui"));
    let num2 = Number(window.prompt("Digite seu 2º número aqui"));
    let result = window.document.getElementById("oNumeroE");
    total = num1 - num2;
    if (total < 0) {
      alert(`CRESCENTE`);
    } else if (total > 0) {
      alert(`DECRESCENTE`);
    } else {
      alert("Números iguais!");
    }
  } while (num1 != num2);
}

function iniciarSenha() {
  let userSenha = window.prompt("DEFINA SUA SENHA AQUI");
  let tentativa;

  do {
    tentativa = prompt("Tente acertar a Senha");

    if (tentativa != userSenha) {
      alert("Senha Incorreta");
    } else {
      alert(`Senha Correta!!!`);
    }
  } while (tentativa != userSenha);
}

function validarNotas() {
  let nota01 = window.prompt("Insira a primeira nota");
  let nota02 = window.prompt("Insira a 2ª nota");
  let notaValida1 = "";
  let notaValida2 = "";
  let resultadoNota = validarNota1 + validarNota1 / 2;

  while (nota01 >= 10) {
    notaValida1 = nota01;
  }

  while (nota02 >= 10) {
    notaValida2 = nota02;
  }
  alert(
    `A nota 1 é ${nota01} e a nota 2 é ${nota02}Sua média é ${resultadoNota}`
  );
}

function userDados() {
  let userIndex = window.prompt("Insira a quantidade de dados que voce deseja");
  let dados = [];
  let data = 0;

  for (let x = 0; x < userIndex; x++) {
    data = window.prompt(` Insira o ${x + 1}º número`);
    dados.push(data);
    dados.sort();
  }

  window.alert(` Os dados da array são ${dados}`);
  console.log(dados);
}

function somenteLetras() {
  let letras = window.document.getElementById("digiteLetras").value;
  let result = window.document.getElementById("applyCatch");
  try {
    if (/\d/.test(letras)) {
      throw new Error("Erro: Não digite números");
    } else {
      result.innerText = `Você digitou = ${letras}`;
    }
  } catch (c) {
    result.innerHTML = `<strong> VOCÊ NÃO PODE DIGITAR NÚMEROS </strong>`;
  } finally {
    console.log("finally");
  }
}

function checkScreenSize() {
  let screenHeight = screen.availHeight;
  let screenWidth = screen.availWidth;
  let sizeResult = window.document.getElementById("screenSizeResult");
  let itsFullHd = "";
  let screenResolution = "";

  if (screenWidth > 1850 && screenHeight > 1039) {
    screenResolution = "Full HD";
    itsFullHd = "é";
  } else {
    screenResolution = "é Full HD";
    itsFullHd = "Não";
  }
  sizeResult.innerText = `The scren size is ${screenWidth} x ${screenHeight} isso ${itsFullHd} ${screenResolution} `;
}

///// BURGUER MENU /////
/*
function changeSize() {
  if (window.inn >= 768) {
    naveId.style.display = "block";
  } else {
    naveId.style.display = "none";
  }
}

function smallerSize() {}
*/

