function solve() {

    let stopId = 'depot';
    let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    let infoBoxElement = document.getElementById('info');

    function depart() {
        document.getElementById('depart')
            .setAttribute('disabled', 'true');

        document.getElementById('arrive')
            .removeAttribute('disabled');


        fetch(`${baseUrl}/${stopId}`)
            .then(res => res.json())
            .then(function (res) {
                let name = res.name;
                infoBoxElement.textContent = `Next stop ${name}`;
            })
            .catch(error => {
                infoBoxElement.textContent = error;
                document.getElementById('depart')
                    .setAttribute('disabled', 'true');

                document.getElementById('arrive')
                    .setAttribute('disabled', 'true');

            });
    }

    function arrive() {
        document.getElementById('depart')
            .removeAttribute('disabled');

        document.getElementById('arrive')
            .setAttribute('disabled', 'true');

        fetch(`${baseUrl}/${stopId}`)
            .then(res => res.json())
            .then(function (res) {
                stopId = res.next;
                infoBoxElement.textContent = `Arriving at ${res.name}`;
            })
            .catch(error => {
                infoBoxElement.textContent = error;
                document.getElementById('depart')
                    .setAttribute('disabled', 'true');

                document.getElementById('arrive')
                    .setAttribute('disabled', 'true');

            });
    }

    return {
        depart,
        arrive
    };
}

let result = solve();