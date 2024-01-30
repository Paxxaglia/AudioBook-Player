const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const nomeCapitulo  = document.getElementById('capitulo');


const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    this.taTocando = 1;
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    this.taTocando = 0;
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar() {
    if (this.taTocando == 0) {
        tocarFaixa();
    } else {
        pausarFaixa();
    }
}

function proximaFaixa() {
    if (capituloAtual == numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
        
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    
    taTocando = 1;
    trocarNomeFaixa();
}

function faixaAnterior() {
    if (capituloAtual == 1) {
        capituloAtual = 10;
    } else {
        capituloAtual = capituloAtual - 1;
    }


    
    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual;
}