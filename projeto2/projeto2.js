function verificar(){
    var result=document.getElementsByName("filme")
    if(result[0].checked){
        window.location.href="correto.html"
    }else if(result[1].checked){
        window.location.href="errado.html"
    }
}