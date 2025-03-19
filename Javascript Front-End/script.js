function somar() {
  let n1 = window.document.getElementById("n1");
  let n2 = window.document.getElementById("n2");
  let resposta1 = window.document.getElementById("resp1");
  let resposta2 = window.document.getElementById("resp2");
  let numero1 = Number(n1.value);
  let numero2 = Number(n2.value);
  let somatoria = numero1 + numero2;

  resposta1.innerText = `A Soma entre ${numero1} e ${numero2} é ${somatoria} :D`;
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
    respostaRecebeu.innerText = `Você recebeu R$ ${dinheiroRecebido.toFixed(
      2
    )}`;
    respostaTroco.innerText = `O troco é R$ ${troco.toFixed(2)}`;
    respostaTroco.style.backgroundColor = `#90ee90 `;
  } else {
    respostaTotal1.innerText = `O Total é R$ ${valorTotal.toFixed(2)}`;
    respostaRecebeu.innerText = `Você recebeu R$ ${dinheiroRecebido.toFixed(
      2
    )}`;
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

function minutosValor(){
    let minutos = Number(window.document.getElementById('minutos').value);
    let franquia = 100;
    let overFranquia = minutos - franquia;
    let resultadoFranquia = window.document.getElementById('valorAPagar');
    totalFranquia = '';
    valorFranquia = 50;
    totalGeral = '';


    if (minutos > franquia){
        totalFranquia = overFranquia * 2;
        totalGeral = valorFranquia + totalFranquia;
        resultadoFranquia.innerText = `O valor a pagar é ${totalGeral} reais` 
    }else{
        resultadoFranquia.innerText = `O valor a pagar é ${valorFranquia} reais`
    }
}