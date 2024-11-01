let buttons = document.querySelectorAll('button');
let display = document.getElementById('Calculator'); 

function mostrarConteudo() {
    const buttonText = this.textContent; 
    display.value += buttonText; 
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', mostrarConteudo);
}

