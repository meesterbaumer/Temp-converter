const fahrenheitSelected = document.getElementById("fahrenheit")
const celsiusSelected = document.getElementById("celsius")


const printToDom = (DivID,textToPrint) => {
    document.getElementById(DivID).innerHTML = textToPrint
}

printToDom("output", 'hello');

    
const toFahrenheit = (cTemp) => {
    let fResult = Math.round((cTemp * 1.8) + 32);
    printToDom("output", fResult) 
}
    
const toCelsius = (fTemp) => {
    let cResult = Math.round((fTemp - 32) / 1.8);
    printToDom("output", cResult);  
}

const formulaChooser = () => {
    
}

toFahrenheit(0)
toCelsius(76.565)