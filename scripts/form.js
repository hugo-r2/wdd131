const year = document.querySelector("#year");
const today = new Date();
let last_date = new Date(document.lastModified);
let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
let formatdate = last_date.toLocaleDateString('en-EN', options);


year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("last_modified").textContent = "Last Modified: " + formatdate;


let productsBox = document.getElementById('product-name');

const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Rreactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];

function displayProducts(product) {

    products.forEach(index => {

        const box = document.createElement("option");

        box.value = index.id;
        box.textContent = index.name;


        productsBox.appendChild(box);

    });

}


displayProducts(productsBox);

