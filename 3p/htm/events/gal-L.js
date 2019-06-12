function convertL() {
    let gal = parseFloat(document.getElementById("temp").value)
    let L = (gal*3.785)
    document.getElementById("out").innerHTML = L.toFixed(3) + " L."
}
function convertGal() {
    let L = parseFloat(document.getElementById("temp1").value)
    let gal = (L*.264)
    document.getElementById("out1").innerHTML = gal.toFixed(3) + " Gal."
}