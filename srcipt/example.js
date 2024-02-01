let c = confirm("Panggil?");

let array = [
    "896453",
    "474656",
    "658666",
    "657867",
    "576647",
    "846765",
    "647457",
    "423423",
    "342443",
    "869609",
    "658979",
];

// function panggil() {
//     array.forEach(element => {
//         console.log(element)
//     });
// }

function panggil2() {
    for(let i = 0; i <= array.length -1; i++) {
        console.log(array[i])
    }
}

while (c == true) {
    panggil2();
    c = confirm("Panggil?")
}
if (c == false) {
    console.log(false)
}