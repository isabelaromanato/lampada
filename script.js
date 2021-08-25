"use strict" //me cobra as regras

const lampada = document.getElementById("lampada")

function botoesLigaDesliga (estadoLiga, estadoDesliga) {
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar")  
    botaoLigar.disabled = estadoLiga
    botaoDesligar.disabled= estadoDesliga
}

function lampadaQuebrada (){
    return lampada.src.includes("quebrada") 
    //indexOf | includes -> busca uma palavra e não o endereço todo
}

function ligarLampada() {

    if (!lampadaQuebrada()) {
    lampada.src = "img/ligada.jpg"
    botoesLigaDesliga(true, false)
    }
}

function desligarLampada() {

    if (!lampadaQuebrada()) {
    lampada.src = "img/desligada.jpg"
    botoesLigaDesliga(false, true)

    }
}

function quebrarLampada () {
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true)
}

function piscarLampada () {
    
}

//eventos
document.getElementById('ligar')
.addEventListener("click", ligarLampada)

document.getElementById('desligar')
.addEventListener("click", desligarLampada)

document.getElementById('lampada')
.addEventListener("mouseover", ligarLampada)

document.getElementById('lampada')
.addEventListener("mouseleave", desligarLampada)

document.getElementById('lampada')
.addEventListener("dblclick", quebrarLampada)

//setTimeOut
//setInterval