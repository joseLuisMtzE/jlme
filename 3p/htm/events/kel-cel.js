function convertCel() {
    let kel = parseFloat(document.getElementById("kel").value)
    let cel = (kel-273.15)
    document.getElementById("out").innerHTML = cel.toFixed(2) + " C"
}
//0 K − 273.15 = -273.1 °C
function convertKel() {
    let cel = parseFloat(document.getElementById("cel").value)
    let kel = (cel+273.15)
    document.getElementById("out1").innerHTML = kel + " K"
}
//0 °C + 273.15 = 273.15 K