const henry = document.querySelector('.henry');
const carteira = document.querySelector('.carteira_de_trabalho');

const jump = () => {
    henry.classList.add('jump');

    setTimeout(() => {

        henry.classList.remove('jump');


    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const carteiraPosition = carteira.offsetLeft;
    console.log(carteiraPosition)
    const henryPosition = +window.getComputedStyle(henry).bottom.replace('px', '');

    console.log(henryPosition);

    if (carteiraPosition <= 120 && carteiraPosition > 0 && henryPosition < 90) {

        carteira.style.animation = 'none';
        carteira.style.left = `${carteiraPosition}px`;

        henry.src = './images/Henry triste.webp';
        henry.style.width = '90px'
        henry.style.marginLeft = '38px'

        clearInterval(loop)

    }

}, 10);


document.addEventListener('keydown', jump);