
//Distancia entre dos planetas

var planetas={

    mercury:{
        diameter: 3100,
        distance: 36 ,
        timeOrbit: 88,
        timeRotate: 59 + " days"
    },

    venus:{
        diameter: 7700,
        distance: 67 ,
        timeOrbit: 255 ,
        timeRotate: 244 + " days"
    },

    earth:{
        diameter: 7920 ,
        distance: 93 ,
        timeOrbit: 365 ,
        timeRotate: 24 + " hours"
    },

    mars:{
        diameter: 4200 ,
        distance: 141 ,
        timeOrbit: 687,
        timeRotate: 24 + " hours" + 24 + " mins"
    },

    jupiter:{
        diameter: 88640,
        distance: 483 ,
        timeOrbit: 11.9 ,
        timeRotate: 9 + " hours" + 50 + " mins"
    },

    saturn:{
        diameter: 74500 ,
        distance: 886,
        timeOrbit: 29.5 ,
        timeRotate: 10 + " hours" + 39 + " mins"
    },

    uranus:{
        diameter: 32000 ,
        distance: 1782 ,
        timeOrbit: 84 ,
        timeRotate: 23 + " hours" 
    },

    neptune:{
        diameter: 31000 ,
        distance: 2793 ,
        timeOrbit: 165 ,
        timeRotate: 15 + " hours" + 48 + " mins"
    },

    pluto:{
        diameter: 1500 ,
        distance: 3670 ,
        timeOrbit: 248 ,
        timeRotate: 6 + " days" + 7 + " hours"
    },
}

function distanciaPlanetas(x,y){
    d= Math.abs(x-y);
    return d;
}

document.write(distanciaPlanetas(planetas.earth.distance,planetas.saturn.distance)  + " millions of miles");