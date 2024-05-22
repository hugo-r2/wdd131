const year = document.querySelector("#year");


const today = new Date();
let last_date = new Date(document.lastModified);


let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };


let formatdate = last_date.toLocaleDateString('en-EN', options);


year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("last_modified").textContent = "Last Modified: " + formatdate;


const weatherVal = document.querySelector("#windchill_data");

const temp = 18;
const windSpeed = 28;


function calculateWindChill(temp, windSpeed) {
    if ((temp <= 10 && windSpeed > 4.8) || (temp <= 50 && windSpeed > 3)) {
        const windChillVal =
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temp * Math.pow(windSpeed, 0.16);
        return windChillVal.toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

function displayWindChill() {
    windChillELement = document.querySelector("#windchill_data");
    const windChill = calculateWindChill(temp, windSpeed);
    windChillELement.textContent = windChill;
}
window.onload = displayWindChill;