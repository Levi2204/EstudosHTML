function corrigir(){
    var a = document.getElementById ('valor')
    var a1 = Number (a.value)
    var a2 = (a1 * 11.12)
    var res = document.getElementById('res')
    res.innerText = (`O valor de ${a1} em 1994 é igual a ${a2.toFixed(2)} hoje`)
}