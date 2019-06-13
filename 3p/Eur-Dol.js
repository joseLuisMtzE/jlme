function convertDolar() {
    let eur = document.getElementById("temp").value
    let dolar = eur * 1.13
    document.getElementById("out").innerHTML = '$' + dolar.toFixed(2) + " Dolares."
}
function convertEuro() {
    let dolar = document.getElementById("temp1").value
    let eur = dolar * 0.88
    document.getElementById("out1").innerHTML = '€' + eur.toFixed(2) + " Euros."
}
