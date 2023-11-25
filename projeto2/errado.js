function verificar(){
    var resultado=document.getElementsByName("escolha")
    var frase = document.getElementById("frase")
    if (resultado[0].checked){
        window.location.href="projeto2.html"
    }else if(resultado[1].checked){
        frase.innerHTML = (`Você insisti no erro, o 1 e o 2 são bem melhores. Para de ser esquisito e marca que os melhores são o 1 e o 2`)
    }
}