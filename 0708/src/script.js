const BASE_URL = new URL("https://data.ex.co.kr/openapi/restinfo/restWeatherList");
const API_KEY = "8986698664";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fetch-btn").addEventListener("click", loadData);
    init();
});

function init() {
    const dateInput = document.getElementById("date");
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
}

function loadData(event) {
    event.preventDefault();

    clearData();
    const date = document.getElementById("date").value
                        .replace(/-/g, "");
    const timezone = document.getElementById("timezone").value
    console.log(date);

    fetchData(date, timezone);
}

function clearData() {
    const resultRows = document.getElementsByClassName("result-row");
    while (resultRows.length > 0) {
        resultRows[0].remove();
    }

}

function fetchData(duration, timezone) {
    const queryParams = new URLSearchParams({
        key: API_KEY,
        type: "json",
        sdate: duration,
        stdHour: timezone
    });

    const requestUrl = BASE_URL + "?" + queryParams.toString();
    const results = fetch(requestUrl, {
        method: "GET",
    
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const items = data.list;

            console.log(Object.keys(items[0]));
            items.forEach(item => {
                addItem(item);               
            })
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

function addItem(item) {
    const unitName = item['unitName'];
    const routeName = item['routeName'];
    const address = item['addr'];
    const weaterConetent = item['weatherContents'];

    const table = document.getElementById("result-list");
    

    const row = document.createElement("tr");
    row.classList.add("result-row");

    const unitNameCell = document.createElement("td");
    unitNameCell.classList.add("result-cell");
    unitNameCell.textContent = unitName;
    row.appendChild(unitNameCell);

    const routeNameCell = document.createElement("td");
    routeNameCell.classList.add("result-cell");
    routeNameCell.textContent = routeName;
    row.appendChild(routeNameCell);

    const addressCell = document.createElement("td");
    addressCell.classList.add("result-cell");
    addressCell.textContent = address;
    row.appendChild(addressCell);

    const weatherContentCell = document.createElement("td");
    weatherContentCell.classList.add("result-cell");
    weatherContentCell.textContent = weaterConetent;
    row.appendChild(weatherContentCell);
    

    table.appendChild(row);

}