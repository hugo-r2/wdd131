const year = document.querySelector("#year");
const today = new Date();
let last_date = new Date(document.lastModified);
let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
let formatdate = last_date.toLocaleDateString('en-EN', options);


year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("last_modified").textContent = "Last Modified: " + formatdate;



const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


var currentTab = 0;
showTab(currentTab);

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    fixStepIndicator(n)
}

function nextPrev(n) {

    var x = document.getElementsByClassName("tab");

    if (n == 1 && !validateForm()) return false;

    x[currentTab].style.display = "none";

    currentTab = currentTab + n;

    if (currentTab >= x.length) {

        document.getElementById("regForm").submit();
        return false;
    }

    showTab(currentTab);
}

function validateForm() {

    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    for (i = 0; i < y.length; i++) {

        if (y[i].value == "") {

            y[i].className += " invalid";

            valid = false;
        }
    }

    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator(n) {

    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }

    x[n].className += " active";
}


const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. Welcome!`;
}
numVisits++;
window.localStorage.setItem("numVisits-ls", numVisits);