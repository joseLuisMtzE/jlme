function convertKm() {
    let km = parseFloat(document.getElementById("km").value)
    let ml = (km*0.621)
    document.getElementById("out").innerHTML = ml.toFixed(2) + " Mi"
}
//0 K − 273.15 = -273.1 °C
function convertMl() {
    let ml = parseFloat(document.getElementById("mill").value)
    let km = (ml*1.609)
    document.getElementById("out1").innerHTML = km + " Km"
}
//0 °C + 273.15 = 273.15 K