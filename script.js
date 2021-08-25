"use strict" //me cobra as regras

function ligarLampada() {

    const lampada = document.getElementById("lampada")
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar")  
    lampada.src = "img/ligada.jpg"

    botaoLigar.disabled = true
    botaoDesligar.disabled = false
   

}

function desligarLampada() {

    const lampada = document.getElementById("lampada")
    lampada.src = "img/desligada.jpg"
    

    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar")

    botaoLigar.disabled = false
    botaoDesligar.disabled = true

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