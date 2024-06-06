const year = document.querySelector("#year");
const today = new Date();
let last_date = new Date(document.lastModified);
let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
let formatdate = last_date.toLocaleDateString('en-EN', options);


const textCount = document.getElementById("count");

let countLocalStorage = Number(window.localStorage.getItem("countingForm")) || 0;



function sumLocalStorage() {
    countLocalStorage++;
    window.localStorage.setItem("countingForm", countLocalStorage);
    textCount.textContent = `Thanks! this was your ${countLocalStorage} time`;
}