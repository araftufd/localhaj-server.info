// Insialisasi
const userNumber = document.getElementById('userNumber')
let numberSelected = userNumber.textContent;

let userRegistered = {
    197845 : "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1352.2596582102033!2d39.98093296645503!3d21.362710743841475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDIxJzQ1LjgiTiAzOcKwNTgnNTQuNiJF!5e1!3m2!1sid!2ssa!4v1704985528792!5m2!1sid!2ssa",
}

// const yeartext = document.getElementById('yeartext').textContent = userRegistered[numberSelected]

// Buat elemen iframe
var iframeElement = document.createElement("iframe");

// Atur atribut src
iframeElement.src = iframeElement.src = userRegistered[numberSelected]

// Atur atribut width dan height
iframeElement.height = "233"

// Atur atribut style
iframeElement.style.border = "0";

// Atur atribut allowfullscreen
iframeElement.allowfullscreen = false;

// Sisipkan elemen iframe ke dalam div dengan id "googleMapContainer"
document.getElementById("googleMapContainer").appendChild(iframeElement);
