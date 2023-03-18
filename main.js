const botoesAmei = document.querySelectorAll('.interacoes img:nth-of-type(1)');
const botoesCurtida = document.querySelectorAll('.interacoes img:nth-of-type(2)');
const palavrasCurtida = document.querySelectorAll('.curtir-responder p:nth-of-type(1)');

const botoesP = document.querySelectorAll('.interacoes p');
const divBotaoComprar = document.querySelectorAll('.botao-compra');
const [div1, div2] = divBotaoComprar;
const divVideo = document.querySelector('#ifr_62b5fd9e47ce1b000945cb73');

localStorage.setItem('validador', JSON.stringify(true))

document.addEventListener('click', e => {

    const el = e.target;

    for (let i = 0; i < botoesAmei.length; i++) {
        if (el == botoesAmei[i] || el == botoesCurtida[i] || el == palavrasCurtida[i]) {
            if (JSON.parse(localStorage.getItem('validador'))) {
                let numeroCurtida = botoesP[i].innerText;
                botoesP[i].innerHTML = parseInt(numeroCurtida) + 1;

                if(el == palavrasCurtida[i]){
                    palavrasCurtida[i].innerHTML = 'Descurtir'
                    palavrasCurtida[i].classList.toggle('cinza');
                }

                botoesAmei[i].classList.toggle('opacidade');
                botoesCurtida[i].classList.toggle('opacidade');

                localStorage.setItem('validador', JSON.stringify(false))
            } else {
                let numeroCurtida = botoesP[i].innerText;
                botoesP[i].innerHTML = parseInt(numeroCurtida) - 1;

                if(el == palavrasCurtida[i]){
                    palavrasCurtida[i].innerHTML = 'Curtir'
                    palavrasCurtida[i].classList.toggle('cinza');
                }

                botoesAmei[i].classList.toggle('opacidade');
                botoesCurtida[i].classList.toggle('opacidade');

                localStorage.setItem('validador', JSON.stringify(true))
            }
        }
    }

});

divVideo.addEventListener('mouseover', e => {
    const el = e.target;
    console.log('O TIME COMEÇOU')
    setTimeout(function(){
        div1.classList.add('botao-compra-desocultar');
        div2.classList.add('botao-compra-desocultar');
    }, 12000)//430000)
});


