function convertRad() {
    let rad = parseFloat(document.getElementById("temp").value)
    let deg = (rad*(57.296))
    document.getElementById("out").innerHTML = deg.toFixed(3) + " Grados."
}
function convertDeg() {
    let deg = parseFloat(document.getElementById("temp1").value)
    let rad = (deg*.017)
    document.getElementById("out1").innerHTML = rad.toFixed(3) + " Radianes."
}