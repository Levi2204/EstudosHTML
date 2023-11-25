function verificar() {
    var data = new Date()
    var ano1= data.getFullYear()
    var fano = document.getElementById('ano')
    var resultado = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano1 || fano.value < 1900){
        window.alert ("Verifique os dados e tente novamente")
    } else{
        var fsex = document.getElementsByName("sexo")
        var idade = ano1 - Number(fano.value)
        var genero = ""
        var img = document.getElementById("foto")
        if (fsex[0].checked){
            genero = "Masculino"
            img.setAttribute('src','fotohomem.jpg')
        }else if (fsex[1].checked){
            genero = "Feminino"
            img.setAttribute('src','fotomulher.jpg')
        }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Você é do gênero ${genero} e tem ${idade} anos` 
    resultado.appendChild(img)
}