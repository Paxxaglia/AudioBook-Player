const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = 0;

function tocarFaixa() {
    audioCapitulo.play();
    this.taTocando = 1;
}

function pausarFaixa() {

        audioCapitulo.pause();
        this.taTocando = 0;

}

function tocarOuPausar(){
    if(this.taTocando == 0){
        tocarFaixa();
    }else{
        pausarFaixa();
    }
}

