let altura =0
let largura = 0
let vidas = 1
let tempo = 10
var tempoMosquito = 1500
var nivel = window.location.search.replace('?', '')
if(nivel === 'normal'){
    tempoMosquito = 1500
}else if(nivel === 'dificil'){
    tempoMosquito = 1000
}else if(nivel === 'chucknorris'){
    tempoMosquito = 750
}


function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura,altura)
    positionRandom()
    
}

 let cronometro  = setInterval(function(){
    tempo-=1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'win.html'
    }else{
        document.getElementById('tempo').innerHTML = tempo
    }
}, 1000)
console.log(cronometro);

function positionRandom(){
    
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        if(vidas > 3){
            window.location.href = 'game_over.html'
        }else{
            document.getElementById('v' + vidas).src = '../imagens/coracao_vazio.png'
            vidas++
        }
    }

    var posX = Math.floor(Math.random()*largura)-90
    var posY = Math.floor(Math.random()*altura)-90

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    //criar o elemento html
    let mosquito = document.createElement('img')
    mosquito.src = '../imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoRandom()
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'    
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)
    
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return'mosquito2'
        case 2:
            return'mosquito3'
    }
}

function ladoRandom(){
    var classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return'ladoB'
    }
}

ajustaTamanho()

