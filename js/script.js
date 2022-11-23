const bugjump = document.querySelector('.bugjump'); // cria a variavel para o Steve
const pipe = document.querySelector('.pipe'); // cria a variavel para o pipe
const startGame = document.querySelector('.start-game'); // cria a variavel para o mario

// cria a função para o evento de clique
const jump = () => {
   bugjump.classList.add('jump'); // adiciona a classe de pulo ao mario

    setTimeout(() => {
        bugjump.classList.remove('jump'); // remove a classe de pulo ao mario após os 500ms
    }, 500);
}

// cria a função para o evento quando o Steve encostar na pipe
const loop = setInterval(() => { 
    const pipePosition = pipe.offsetLeft; // cria a variavel para a posição do pipe
    const bugjumpPosition = +window.getComputedStyle(bugjump).bottom.replace('px', ''); // cria a variavel para a posição do Steve e converte de string para number

    // condição que verifica se o jogo acabou
    // verifica se o Steve está encostado na bug
    if (pipePosition <= 120 && pipePosition > 0 && bugjumpPosition < 80) { // se a posição do pipe for menor ou igual ao 120px e a altura do Steve for menor a 80px
       
    pipe.style.animation = 'none'; // remove a animação do pipe
       pipe.style.left = '${pipePosition}px'; //  mantém a posição do pipe na mesma posição

       bugjump.style.animation = 'none'; // remove a animação do Steve
       bugjump.style.bottom = '${bugjumpPosition}px'; //  mantém a posição do Steve na mesma posição

       bugjump.src = 'img/dead.png'; // troca a imagem do Steve para a imagem de morte
       bugjump.style.width = '200px'; // diminui a largura do Steve para 75px
       bugjump.style.marginLeft = '80px'; // diminui a margem esquerda do Steve para 50px

       startGame.src = 'img/gameover.png'; // troca a imagem do start game para a imagem de game over

        clearInterval(loop); // para o loop
       
       document.addEventListener('keydown', () => {
        location.reload(); // recarrega a página
 });

document.addEventListener('click', () => {
        location.reload(); // recarrega a página para mobile
    });
    
    }
    
}, 10); // cria a variavel para o loop

// adiciona o evento de clique ao Steve
document.addEventListener('keydown', jump); 
document.addEventListener('click', jump); //Click para Mobile
