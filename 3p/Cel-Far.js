//
// this may be a class, object, module, or function
//
function convert() {
    let c = document.getElementById("temp").value
    //let d =
    let o = (c*(9/5))+32
    document.getElementById("out").innerHTML = o.toFixed(2) + " degrees F"
}

//Farenheit a celsius ----> (50 °F − 32) × 5/9 = 10 °C
//Celsius a Farenheit ----> (0 °C × 9/5) + 32 = 32 °F
//

//℉ =℃ * 1.8000 + 32.00