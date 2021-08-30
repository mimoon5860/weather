const input = document.getElementById('input-field');
const searchResult = document.getElementById('search-result');
const error = document.getElementById('error');
const search = async () => {
    loading()
    error.textContent = '';
    searchResult.textContent = '';
    if (input.value == '') {
        errorCall()
    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c3bdefc76f6499029863ba4a34316e9c`;
        const res = await fetch(url);
        const data = await res.json();
        resultDiv(data);
    }
    input.value = '';
};

const resultDiv = data => {
    console.log(data);
    if (data.cod === 200) {
        searchResult.innerHTML = `
        <div class='mx-auto text-center'>
            <img src='weather.png'>
            <h2>Country: ${data.sys.country}, City: ${data.name}</h2>
            <h3>${((data.main.temp) - 273.15).toFixed(2)}&#8451</h3>
        <h4 class='fw-light'>${data.weather[0].main}</h4>
        </div >
        `;
    }
    else {
        errorCall()
    }
    loadDone()
};
const loadingg = document.getElementById('loading');
const loading = () => {
    loadingg.innerHTML = `
    <div class='mx-auto text-center'>
        <img width='100px' src='loading.gif'>
    </div >
    `;
};
function loadDone() {
    loadingg.style.display = 'none';
}
function errorCall() {
    error.innerHTML = `
    <div class='mx-auto text-center'>
        <h3 class='text-danger'>Invalid Name!</h3>
        <h4 class='text-danger'>Enter a valid city name!</h4>
    </div >
    `;
    loadDone()
}