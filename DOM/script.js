const imagem = document.querySelector('img');
const titulo = document.querySelector('h1');
const paragrafo = document.querySelector('p');
const buttons = document.querySelectorAll('.buttons button');
const alterarImagemBtn = document.getElementById('alterarImagem');
const tituloBtn = document.getElementById('titulo');
const paragrafoBtn = document.getElementById('paragrafo');
const audioBtn = document.getElementById('audio');

alterarImagemBtn.addEventListener('click', () => {
    imagem.src = 'dog.jpeg';
});

tituloBtn.addEventListener('click', () => {
    titulo.textContent = 'Novo Título';
});

paragrafoBtn.addEventListener('click', () => {
    paragrafo.style.color = 'red';
});

audioBtn.addEventListener('click', () => {
    const audio = new Audio('Coin mario.wav');
    audio.play();
});

buttons[0].addEventListener('click', () => {
    buttons.forEach(button => {
        button.classList.toggle('ativo');
    });
});