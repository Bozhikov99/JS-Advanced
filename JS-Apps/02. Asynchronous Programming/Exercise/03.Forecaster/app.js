function attachEvents() {
    let baseUrl = 'http://localhost:3030/jsonstore/forecaster';
    let forecastSection = document.getElementById('forecast');

    let buttonElement = document.getElementById('submit');
    buttonElement.addEventListener('click', () => {
        let location = document.getElementById('location').value;
        document.getElementById('location').value = '';
        let code = '';

        forecastSection.style.display = 'block';

        fetch(`${baseUrl}/locations`)
            .then(res => res.json())
            .then(function (res) {
                let currentLocation = res.find(x => x.name === location);
                code = currentLocation.code;

                //CURRENT WEATHER
                fetch(`${baseUrl}/today/${code}`)
                    .then(res => res.json())
                    .then(function (res) {
                        let weatherSymbols = {
                            Sunny: '\u2600',
                            Partly_Sunny: '\u26C5',
                            Overcast: '\u2601',
                            Rain: '\u2614',
                            Degrees: `\u00B0`
                        }

                        let currentWeatherElement = document.getElementById('current');
                        Array.from(currentWeatherElement.children)
                            .forEach(x => x.remove());

                        //create FORECASTS DIV
                        let forecastsDivElement = document.createElement('div');
                        forecastsDivElement.classList.add('forecasts');

                        //create condition symbol span
                        let currentWeatherCondition = res.forecast.condition
                            .replace('_', ' ');
                        let conditionSymbolSpanElement = document.createElement('span');
                        conditionSymbolSpanElement.classList.add('condition', 'symbol');
                        conditionSymbolSpanElement.textContent = weatherSymbols[currentWeatherCondition];
                        forecastsDivElement.appendChild(conditionSymbolSpanElement);

                        //create condition span
                        let contidionSpanElement = document.createElement('span');
                        contidionSpanElement.classList.add('condition');
                        forecastsDivElement.appendChild(contidionSpanElement);

                        //create forecast data spans
                        let locationSpanElement = document.createElement('span');
                        locationSpanElement.classList.add('forecast-data');
                        locationSpanElement.textContent = res.name;

                        let temperatureSpanElement = document.createElement('span');
                        temperatureSpanElement.classList.add('forecast-data');
                        temperatureSpanElement.textContent = `${res.forecast.low}${weatherSymbols.Degrees}/${res.forecast.high}${weatherSymbols.Degrees}`;

                        let smallCondSpanElement = document.createElement('span');
                        smallCondSpanElement.classList.add('forecast-data');
                        smallCondSpanElement.textContent = res.forecast.condition;

                        contidionSpanElement.appendChild(locationSpanElement);
                        contidionSpanElement.appendChild(temperatureSpanElement);
                        contidionSpanElement.appendChild(smallCondSpanElement);

                        currentWeatherElement.appendChild(forecastsDivElement);
                    });

                fetch(`${baseUrl}/upcoming/${code}`)
                    .then(res => res.json())
                    .then(function (res) {
                        let weatherSymbols = {
                            Sunny: '\u2600',
                            'Partly sunny': '\u26C5',
                            Overcast: '\u2601',
                            Rain: '\u2614',
                            Degrees: `\u00B0`
                        }

                        let upcomingWeatherElement = document.getElementById('upcoming');
                        Array.from(upcomingWeatherElement.children)
                            .forEach(x => x.remove());

                        res.forecast.forEach(x => {

                            //create FORECASTS DIV
                            let forecastsDivElement = document.createElement('div');
                            forecastsDivElement.classList.add('forecast-info');
                            upcomingWeatherElement.appendChild(forecastsDivElement);

                            //create upcoming span
                            let upcomingSpan = document.createElement('span');

                            //create symbol span
                            let symbolSpanElement = document.createElement('span')
                            symbolSpanElement.classList.add('symbol');
                            symbolSpanElement.textContent = weatherSymbols[x.condition];

                            let temperatureSpanElement = document.createElement('span');
                            temperatureSpanElement.classList.add('forecast-data');
                            temperatureSpanElement.textContent = `${x.low}${weatherSymbols.Degrees}/${x.high}${weatherSymbols.Degrees}`;

                            let conditionSpanElement = document.createElement('span');
                            conditionSpanElement.classList.add('forecast-data');
                            conditionSpanElement.textContent = x.condition;

                            upcomingSpan.appendChild(symbolSpanElement);
                            upcomingSpan.appendChild(temperatureSpanElement);
                            upcomingSpan.appendChild(conditionSpanElement);

                            upcomingWeatherElement.appendChild(upcomingSpan);
                        });

                    });
            })
            .catch(() => forecastSection.textContent = 'Error');
    });
}

attachEvents();