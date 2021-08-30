const search = async () => {
    const input = document.getElementById('input-field');
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c3bdefc76f6499029863ba4a34316e9c`;
    const res = await fetch(url);
    const data = await res.json();
    resultDiv(data);
    input.value = '';
}

const resultDiv = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = `
    <div class='mx-auto text-center'>
        <img src='weather.png'>
        <h2>${data.name}</h2>
        <h3>${((data.main.temp) - 273.15).toFixed(2)}&#8451</h3>
    <h4 class='fw-light'>${data.weather[0].main}</h4>
    </div >
    `;
}