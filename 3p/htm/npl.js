

function contador(){
    let cadena = document.getElementById("txt").value;
    let nPalabras = cadena.split(' ');
    let nParrafos = cadena.split('\n\n');
    let nOraciones = cadena.split('.')

    document.getElementById("nPalabras").innerHTML = "Numero de Palabras: "+(nPalabras.length-1)
    
    let cad = document.getElementById("txt").value;
    document.getElementById("nCaracter").innerHTML = "Numero de Caracteres: " + cad.length
    
    document.getElementById("nParrafo").innerHTML = "Numero de Oraciones: " + (nOraciones.length-1)

    document.getElementById("nOraciones").innerHTML = "Numero de Parrafos: " + (nParrafos.length)


}

