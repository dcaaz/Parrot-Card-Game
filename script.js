let qtdeCartas = prompt('Bem-vindo! Qual número de cartas você deseja?');

while(qtdeCartas  > 14 || qtdeCartas  < 4   || qtdeCartas % 2 !==0){
 alert ("Digite um número par, maior ou igual a 4 e menor ou igual a 14");
 prompt('Bem-vindo! Qual número de cartas você deseja?');
}

let cartas = document.querySelector('.baralho');

i = 0;
 
while(qtdeCartas > i) {
cartas.innerHTML = cartas.innerHTML + '<div class="carta"></div>';
i++
}  