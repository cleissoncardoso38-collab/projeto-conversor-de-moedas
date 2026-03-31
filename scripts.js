const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const logoCurrency = document.querySelector(".logo-currency")

function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueToConvert = document.querySelector(".value-to-convert")
    const convertedCurrencyValue = document.querySelector(".converted-currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2

    if (currencySelect.value == "dolar") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

    
}

function changeCurrency() {
    const currencyNameChange = document.getElementById("currency-name-change")
    const logoCurency = document.querySelector(".logo-currency")

    if (currencySelect.value == "dolar"){
        currencyNameChange.innerHTML = "Dólar americano"
        logoCurency.src = "./assests/dollar-logo.png"
    }
    if (currencySelect.value == "euro"){
        currencyNameChange.innerHTML = "Euro"
        logoCurency.src = "./assests/euro-logo.png"
    }

    convertValues()
}
    

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)