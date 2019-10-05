const fahrenheitSelected = document.getElementById("fahrenheit")
const celsiusSelected = document.getElementById("celcius")
const button = document.getElementById('convertButton')
const reset = document.getElementById('reset')
const startTemp = document.getElementById('startTemp')
const output = document.getElementById('output')

const printToDom = (DivID,textToPrint) => {
    document.getElementById(DivID).innerHTML = textToPrint
}



    
const toFahrenheit = (cTemp) => {
    let fResult = Math.round((cTemp * 1.8) + 32);
    if (fResult > 90) {
        document.getElementById('output').style.color = 'red';
    } else if (fResult < 32) {
        document.getElementById('output').style.color = 'blue';
    } else {
        document.getElementById('output').style.color = 'green';
    }
    printToDom("output", `Your new temp is<br><br><h1>${fResult} ℉</h1>`);
}
    
const toCelsius = (fTemp) => {
    let cResult = Math.round((fTemp - 32) / 1.8);
    if (cResult > 32) {
        document.getElementById('output').style.color = 'red';
    } else if (cResult < 0) {
        document.getElementById('output').style.color = 'blue';
    } else {
        document.getElementById('output').style.color = 'green';
    }
    printToDom("output", `Your new temp is<br><br><h1>${cResult} ℃</h1>`);  
}

const formulaChooser = (e) => {
    if (e.target.id = 'button' && fahrenheitSelected.checked === true) {
        toCelsius(startTemp.value);
    } else if (e.target.id = 'button' && celsiusSelected.checked === true) {
        toFahrenheit(startTemp.value);
    }
}

const enterPressed = (e) => {
    if (e.keycode === 13 && fahrenheitSelected.checked === true) {
        e.preventDefault();
        toCelsius(startTemp.value)
    } else if (e.keycode === 13 && celsiusSelected.checked === true) {
        e.preventDefault();
        toFahrenheit(startTemp.value)
    }
}

const resetPressed = () => {
    startTemp.value = ""
    output.innerHTML = ""
}

button.addEventListener("click", formulaChooser);
startTemp.addEventListener("keypress", enterPressed);
reset.addEventListener("click", resetPressed);
