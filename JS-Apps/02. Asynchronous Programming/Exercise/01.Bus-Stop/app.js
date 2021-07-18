function getInfo() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    let id = document.getElementById('stopId').value;
    let stopNameElement = document.getElementById('stopName');
    let busListElement = document.getElementById('buses');

    fetch(`${baseUrl}/${id}`)
        .then((res) => res.json())
        .then(res => {
            Array.from(busListElement.children)
            .forEach(x=>x.remove());

            stopNameElement.textContent = res.name;

            for (const b of Object.keys(res.buses)) {
                let liElement = document.createElement('li');

                let busName = b;
                let busTime = res.buses[b];

                liElement.textContent = `Bus ${busName} arrives in ${busTime}`;
                busListElement.appendChild(liElement);
            }
        })
        .catch(() => {
            stopNameElement.textContent = 'Error';
        })
}