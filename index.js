const celciusE1 = document.getElementById("Celcius");
const fahrenheitE1 = document.getElementById("Fahrenheit");
const kelvinE1 = document.getElementById("Kelvin");
const rankineE1 = document.getElementById("Rankine");

function ConvertTemp (){

    //Add + to avoid String Problem
   const currentValue = event.target.value;

   switch (event.target.name) {
    case "Celcius":
        fahrenheitE1.value = currentValue * 1.8 + 32 ;
        kelvinE1.value = currentValue + 273.15 ;
        rankineE1.value = (currentValue +273.15) * 1.8 ;
        break;
    
    case "Fahrenheit":
        celciusE1.value = (currentValue - 32) * 1.8 ;
        kelvinE1.value = (currentValue -32) * 1.8 + 273.15 ;
        rankineE1.value = currentValue + 459.67 ;
        break;    
    
    case "Kelvin":
        celciusE1.value = currentValue - 273.15 ;
        fahrenheitE1.value = (currentValue -273.15) * 1.8 +32 ;
        rankineE1.value = currentValue * 1.8 ;
        break;
        
    case "Rankine":
        celciusE1.value = (currentValue - 459.67) / 1.8 ;
        fahrenheitE1.value = currentValue - 459.67 ;
        kelvinE1.value = currentValue / 1.8 ;   
    default:
        break;
   }
}