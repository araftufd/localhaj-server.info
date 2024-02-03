const qrCode = document.getElementById("show-id");
const dataImage = document.getElementById("data-image-id");

qrCode.onclick = function() {
    window.open("../loader.html")
    // window.open("../map-page.html")
}

// alert(localStorage.getItem("userSelected"))