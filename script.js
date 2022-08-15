let selecionados=0;
let comida
let bebida
let sobremesa

function selecionarComida (selecionarPedido) {
    const caixaVerde = document.querySelector('.comidas .verde');

    if (caixaVerde !=null){
        const icone = document.querySelector('.comidas .caixa .icone-on');
        icone.classList.remove('icone-on');
        icone.classList.add('icone-off');
        caixaVerde.classList.remove('verde');
    }

   const caixaVerde2 = selecionarPedido.querySelector('.icone-off');
   caixaVerde2.classList.remove('icone-off');
   caixaVerde2.classList.add('icone-on');

    comida=1;
    selecionarPedido.classList.add('verde');
    habilitarBotaoFechamentoPedido(comida)
}

function selecionarBebida (selecionarPedido) {
    const caixaVerde = document.querySelector('.bebidas .verde');

    if (caixaVerde !=null){
        const icone = document.querySelector('.bebidas .caixa .icone-on');
        icone.classList.remove('icone-on');
        icone.classList.add('icone-off');
        caixaVerde.classList.remove('verde');
    }

    const caixaVerde3 = selecionarPedido.querySelector('.icone-off');
    caixaVerde3.classList.remove('icone-off');
    caixaVerde3.classList.add('icone-on');

    bebida=1;   
    selecionarPedido.classList.add('verde'); 
    habilitarBotaoFechamentoPedido(bebida)
}

function selecionarSobremesa (selecionarPedido) {
    const caixaVerde = document.querySelector('.sobremesas .verde');

    if (caixaVerde !=null){
        const icone = document.querySelector('.sobremesas .caixa .icone-on');
        icone.classList.remove('icone-on');
        icone.classList.add('icone-off');
        caixaVerde.classList.remove('verde');
    }

    const caixaVerde4 = selecionarPedido.querySelector('.icone-off');
    caixaVerde4.classList.remove('icone-off');
    caixaVerde4.classList.add('icone-on');

    sobremesa=1;
    selecionarPedido.classList.add('verde'); 
    habilitarBotaoFechamentoPedido(sobremesa)
}


function habilitarBotaoFechamentoPedido() {
    const paragrafo = document.querySelector('.fonte-botão');

    selecionados=comida+bebida+sobremesa
    
    if (selecionados === 3){
        paragrafo.innerHTML = 'Fechar pedido';
        paragrafo.classList.add('pedido-verde');
    }
}

function encaminharWhatsApp() {
    let selectedElements = document.querySelectorAll(".verde");

    let itemsString= "Olá, gostaria de fazer o pedido: \n";
    let valorTotal = 0;

    for (let i = 0; i < selectedElements.length; i ++) {
        let selecionado = selectedElements[i];
        let descricao = selecionado.querySelector(".fonte-titulo").textContent;
        let valorString = selecionado.querySelector(".fonte-valor").textContent.split(" ")[1].replace(",", ".");
        itemsString += "- " + descricao + "\n";
        valorTotal += parseFloat(valorString);
    }

    itemsString += "Total: R$ " + valorTotal;

    let url = "https://wa.me/5548998215536?text=" + encodeURIComponent(itemsString);
    window.open(url, '_blank').focus();
} 