
var a = "";

function edad(num){
    if( num >= 15){
        var a = "Es mayor que 15";
    }else if(num > 10){
        var a = "Es mayor que 10";
    }else{var a = "Entre 10 y 0";}
    return a;
}

console.log(edad(15))