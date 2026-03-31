const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const logoCurrency = document.querySelector(".logo-currency")

function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueToConvert = document.querySelector(".value-to-convert")
    const convertedCurrencyValue = document.querySelector(".converted-currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.87
    const bitcoinToday = 353216.84

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
    if (currencySelect.value == "libra") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcoinToday)
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
    if (currencySelect.value == "libra"){
        currencyNameChange.innerHTML = "Libra"
        logoCurency.src = "./assests/libra-logo.png"
    }
    if (currencySelect.value == "bitcoin"){
        currencyNameChange.innerHTML = "Bitcoin"
        logoCurency.src = "./assests/bitcoin-logo.png"
    }
    convertValues()
}
    

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)