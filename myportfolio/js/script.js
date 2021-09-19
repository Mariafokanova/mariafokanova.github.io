//создать объект, куда записываем курсы всех валют
const rates = {};

// найти элементы в html для отображения курса валют
const elementUSD = document.querySelector('[data-value="USD"]');//найти на странице дивы - внутри документа по дата-атрибуту
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');

const elementPreviousUSD = document.querySelector('[data-previous="USD"]');//найти на странице дивы - внутри документа по дата-атрибуту
const elementPreviousEUR = document.querySelector('[data-previous="EUR"]');
const elementPreviousGBP = document.querySelector('[data-previous="GBP"]');

getCurrencies ();

async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;

    rates.USD = result.Valute.USD;
    rates.EUR = result.Valute.EUR;
    rates.GBP = result.Valute.GBP;

    console.log(rates);

    elementPreviousUSD.textContent = rates.USD.Previous.toFixed(2);
    elementPreviousEUR.textContent = rates.EUR.Previous.toFixed(2);
    elementPreviousGBP.textContent = rates.GBP.Previous.toFixed(2);

    elementUSD.textContent = rates.USD.Value.toFixed(2);
    elementEUR.textContent = rates.EUR.Value.toFixed(2);
    elementGBP.textContent = rates.GBP.Value.toFixed(2);

    if (rates.USD.Value > rates.USD.Previous) {
        elementUSD.classList.add('top');
    } else {
        elementUSD.classList.add('bottom');
    }

    if (rates.EUR.Value > rates.EUR.Previous) {
        elementEUR.classList.add('top');
    } else {
        elementEUR.classList.add('bottom');
    }

    if (rates.GBP.Value > rates.GBP.Previous) {
        elementGBP.classList.add('top');
    } else {
        elementGBP.classList.add('bottom');
    }

}
