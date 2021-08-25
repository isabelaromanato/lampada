"use strict" //me cobra as regras

function ligarLampada() {

    const lampada = document.getElementById("lampada")
    lampada.src = "img/ligada.jpg"
    //função com responsabilidade unica

}

function desligarLampada() {

    const lampada = document.getElementById("lampada")
    lampada.src = "img/desligada.jpg"
    //função com responsabilidade unica

}

//eventos
document.getElementById('ligar')
.addEventListener("click", ligarLampada)

document.getElementById('desligar')
.addEventListener("click", desligarLampada)