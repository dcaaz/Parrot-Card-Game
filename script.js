let arrayImagens = ['./imagens/1.gif', './imagens/2.gif', './imagens/3.gif', './imagens/4.gif', './imagens/5.gif', './imagens/6.gif', './imagens/7.gif'];

let imagemFrente = './imagens/front.png';

criarCartas();

function criarCartas() {
    let cartasAnteriores = document.querySelectorAll('.carta');
    for (let i = 0; i < cartasAnteriores.length; i++) {
        cartasAnteriores[i].remove();
    }
    
    let qtdeCartas = prompt('Bem-vindo! Qual número de cartas você deseja?');

    while(qtdeCartas  > 14 || qtdeCartas  < 4   || qtdeCartas % 2 !== 0) {
     alert ("Digite um número par, maior ou igual a 4 e menor ou igual a 14");
     qtdeCartas = prompt('Bem-vindo! Qual número de cartas você deseja?');
    }

    let imagensSelecionadas = [];
    for (let i = 0; i < qtdeCartas / 2; i++) {
        // Acessa um elemento dentro do arrayImagens. Pra isso gera um número aleatorio que sera usado como indice para acessar o arrayImagens e devolver um elemento qualquer desse array
        let randIndex = Math.floor(Math.random() * arrayImagens.length);
        let randImg = arrayImagens[randIndex];

        while(imagensSelecionadas.includes(randImg)) {
            randIndex = Math.floor(Math.random() * arrayImagens.length);
            randImg = arrayImagens[randIndex];
        }

        imagensSelecionadas.push(arrayImagens[randIndex]);
    }
    
    let cartas = document.querySelector('.baralho');
    
    for(let i = 0; i < qtdeCartas; i++) {    
        cartas.innerHTML = cartas.innerHTML + 
        `<div class="carta" onclick="virarCarta(this, '${imagensSelecionadas[i % (qtdeCartas / 2)]}', '${qtdeCartas}')">
        </div>`;
    }
} 

async function virarCarta(elementoHtml, caminhoImagemVirada, qtdeCartas) {
    let virada = elementoHtml.classList.toggle('virada');

    elementoHtml.style.backgroundImage = `url(${virada ? caminhoImagemVirada : imagemFrente})`;

    let viradas = document.querySelectorAll('.virada:not(.par)');

    if (viradas.length == 2) {
        await new Promise(r => setTimeout(r, 1000));

        let virada0 = viradas[0];
        let virada1 = viradas[1];

        let virada0Img = virada0.style.backgroundImage;
        let virada1Img = virada1.style.backgroundImage;

        if (virada0Img == virada1Img) {
            virada0.onclick= null;
            virada1.onclick= null;

            virada0.classList.add('par');
            virada1.classList.add('par');

            let pares = document.querySelectorAll('.par');
            if (pares.length == qtdeCartas && confirm('Você ganhou em X jogadas! Deseja jogar novamente?')) {
                criarCartas();
            }
        } else {
            for (let i = 0; i < viradas.length; i++) {
                viradas[i].classList.toggle('virada');
                viradas[i].style.backgroundImage = `url(${imagemFrente})`;
            }
        }
    }
}