const year = document.querySelector("#year");


const today = new Date();
let last_date = new Date(document.lastModified);


let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };


let formatdate = last_date.toLocaleDateString('en-EN', options);


year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("last_modified").textContent = "Last Modified: " + formatdate;