function caixa(){
    let produto = window.document.getElementById('produto1');
    let quantidade = window.document.getElementById('unidades');
    let produtoValor = Number(produto.value);
    let quantidadeUni = Number(quantidade.value);
    let valorTotal = produtoValor * quantidadeUni;
    let dinheiroRecebido = Number.parseFloat(window.document.getElementById('dinheiro').value);
    let troco = dinheiroRecebido - valorTotal ;
    let respostaTotal1 = window.document.getElementById('resultado1');
    let respostaRecebeu = window.document.getElementById('resultado2');
    let respostaTroco = window.document.getElementById('resultado3');
    let faltaDinheiro = valorTotal - dinheiroRecebido;
 
    
    if (troco >= 0){
        respostaTotal1.innerText = `O Total é R$ ${valorTotal.toFixed(2)}`
        respostaRecebeu.innerText = `Você recebeu R$ ${dinheiroRecebido.toFixed(2)}`
        respostaTroco.innerText = `O troco é R$ ${troco.toFixed(2)}`
        respostaTroco.style.backgroundColor = `#90ee90 `;
        
    }else{

        respostaTotal1.innerText = `O Total é R$ ${valorTotal.toFixed(2)}`
        respostaRecebeu.innerText = `Você recebeu R$ ${dinheiroRecebido.toFixed(2)}`
        respostaTroco.innerText = `Faltam R$ ${faltaDinheiro.toFixed(2)}`
        respostaTroco.style.backgroundColor = `rgb(231, 77, 77)`;
        


    };



}