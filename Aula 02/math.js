function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value )
    var res = document.getElementById("res")
    res.textContent = numero1+numero2
    return res
    
}
function subtracao(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value )
    var res = document.getElementById("res1")
    res.textContent = numero1-numero2
    return res1
}
function multiplicacao(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value )
    var res = document.getElementById("res2")
    res.textContent = numero1*numero2
    return res2
}
function divisao(){
    document.getElementById("n8").style.border = "1px solid black"
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value )
    var res = document.getElementById("res3")
    if(numero2 !== 0){
        res.textContent = (numero1/numero2).toFixed(1)
    }else{
        res.textContent = "Não pode Dividir por 0"
        document.getElementById("n8").style.border = "2px solid red"
    }
    return res3
}
function media(){
    var media1 = parseFloat(document.getElementById("m1").value)
    var media2 = parseFloat(document.getElementById("m2").value)
    var media3 = parseFloat(document.getElementById("m3").value)
    var media4 = parseFloat(document.getElementById("m4").value)
    var media5 = parseFloat(document.getElementById("m5").value)
    var media =  document.getElementById("respMedia")
    var msg = document.getElementById("msg")
    var resp = (media1 + media2 + media3 + media4 + media5) / 5
    if(resp >= 7){
        media.textContent = resp
        msg.textContent = "PASSOU"
        msg.style.color = "green"
    }else{
        msg.textContent = "REPROVOU"
        msg.style.color = "red"
    }

}

function calculoImc(){
    var peso = parseFloat(document.getElementById("p1").value)
    var altura = parseFloat(document.getElementById("a1").value)
    var respCalcIMC = document.getElementById("respCalcImc")
    var msgImc = document.getElementById("msgImc")
    var calcImc = peso/(altura*altura)

    if(calcImc >= 40.0){
        respCalcIMC.textContent = calcImc
        msgImc.textContent = "Obesidade Grau III"
    }
    else if(calcImc >= 35.0 && calcImc <= 39.9){
        respCalcIMC.textContent = calcImc
        msgImc.textContent = "Obesidade Grau II"
    }
    else if(calcImc >= 30.0 && calcImc <= 34.9){
        respCalcIMC.textContent = calcImc
        msgImc.textContent = "Obesidade Grau I"
    }
    else if(calcImc >= 25.0 && calcImc <= 29.9){
        respCalcIMC.textContent = calcImc
        msgImc.textContent = "SobrePeso"
    }
    else if(calcImc >= 18.6 && calcImc <= 24.9){
        respCalcIMC.textContent = calcImc
        msgImc.textContent = "Normal"
    }else{
        respCalcIMC.textContent = calcImc
        msgImc.textContent = "Abaixo do Normal"
    }

    }

    function verificarIdade(){
        var idade = parseInt(document.getElementById("idade1").value)
        var respIdade = document.getElementById("respIdade")
        var msgIdade = document.getElementById("msgIdade")

        if(idade >= 18){
            respIdade.textContent = idade
            msgIdade.textContent = "Entrada liberada"
            msgIdade.style.color = "green"
        }else{
            respIdade.textContent = idade
            msgIdade.textContent = "Entrada negada"
            msgIdade.style.color = "red"
        }


    }
