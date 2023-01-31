# Parrot Card Game

- Esse foi meu segundo projeto JavaScript, e sem dúvidas, o mais difícil do curso. Conforme evolui na escala de conhecimentos como desenvolvedora, aprendi códigos mais complexos, mas esse em especial foi um divisor de águas na minha carreira. Primeiro, por envolver lógica de jogo, o que naturalmente é mais 'pesado', e segundo, porque estava iniciando em JS. 

Enfim, vamos ao que interessa:

## Sobre

Abaixo estão as funcionalidades implementadas:

- Ao entrar no jogo, o usuário é questionado com quantas cartas quer jogar
- Só pode inserir números pares no prompt, de 4 a 14. Qualquer número que fuja a essa regra não é aceito. No caso de números inválidos, o prompt fica repetido, até que o usuário coloque um número válido.
- Após, o jogo inicia com as cartas viradas pra baixo com distribuição seja aleatória
- Ao clicar em uma carta, a mesma é virada
- Caso seja a primeira carta do par, ela permanece virada até o usuário escolher a segunda carta
- Caso seja a segunda carta virada, existem 2 situações: caso seja igual à primeira carta, o usuário acertou e ambas agora ficam viradas pra cima até o final do jogo ou caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo aguarda 1 segundo e então vira as duas cartas para baixo novamente
- Quando o usuário termina de virar todas as cartas corretamente, é exibido um alert com a mensagem "Você ganhou em X jogadas!" sendo X a quantidade de vezes que o usuário virou uma carta no jogo.
