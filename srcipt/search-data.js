const input = document.querySelector('#first-input');
const submit = document.querySelector('#submit');

let numberList = [
    // 20 - Ladies
    "186464",
    "234463",
    "192773",
    "296334",
    "187895",
    "186834",
    "242522",
    "263382",
    "285359",
    "255326",
    "153988",
    "187357",
    "173926",
    "162728",
    "132343",
    "274677",
    "279286",
    "126329",
    "237983",
    "145566",
    // 20 - Gentlemen
    "252778",
    "234792",
    "247677",
    "124557",
    "144525",
    "289645",
    "294828",
    "142729",
    "245782",
    "229655",
    "279589",
    "197558",
    "232635",
    "186566",
    "248255",
    "154238",
    '134456',
    "237659",
    "282597",
    "289659",
    // 20 - Tambahan data (10/10)
    "166277",
    "246434",
    "156788",
    "272942",
    "249626",
    "196856",
    "273235",
    "157988",
    "255838",
    "223956",
    "168583",
    "262694",
    "142454",
    "227976",
    "169825",
    "254856",
    "272457",
    "165767",
    "279883",
    "128896",
    // 20 - Tambahan data (10/10)
    "217756",
    "289383",
    "148366",
    "256866",
    "257688",
    "232382",
    "187365",
    "167575",
    "145865",
    "228459",
    "294572",
    "258795",
    "153676",
    "274456",
    "145539",
    "228536",
    "285496",
    "159652",
    "257576", 
    "285674",
    // Family Permit
    "238547",
    "197845",
    "237484",  
    // Baru
    "275883",
    "271522",
    "266539",
    "226546",
    "243593",
    "231675",
    "277947",
    "297532",
    "252654",
    "221411",
    "287683",
    "273513",
    "254978",
    // BARU 2
    "224074",
    "214772",
    "224746",
    "209148",
    "297754",
    "221067",
    "265877",
    "232119",
    "236275",
    "286417",
    "282755",
    "260618",
    "221439",
    "233434",
    "250775",
    "289024",
    // Baru 3
    "383564",
    "364275",
    "354978",
    // Baru 4
    "362114",
    "392966",
    // Baru 5
    "269297",
    "211191",
    "267696",
    "222792",
    "262906",
    "219143",
    // Baru 6
    "349758",
    "326476",
    "379652",
    "382657",
    "354432",
    // Rabiul Awal
    "332785",
    "384937",
];

let pageNumber;

// let indexNumber = 0; : Coming Soon

// submit.onclick = function() {
//     for (let index = 0; index < numberList.length; index++) {
//         if (input.value == numberList[index]) {
//             pageNumber = numberList[index];
//             window.open("../verification/data-page/" + pageNumber + ".html");
//             localStorage.setItem("userSelected", pageNumber);
//         }
        
//     }

// }

// Not Found
submit.onclick = function() {
    for (let index = 0; index < numberList.length; index++) {
        if (input.value == '197845') {
            window.open("../verification/data-page/197845.html");
        } else if (input.value == numberList[index] || input.value == numberListArabic[index]) {
            pageNumber = numberList[index];
            window.open("../verification/unavalible.html");
        }
        
    }

}





























































// Rabiul Awal

// submit.onclick = function() {
//     if (input.value == '332785') {
//         window.open("../verification/data-id-page/" + "(130)" + ".html");
//     }
// }

// submit.onclick = function() {
//     if (input.value == '384937') {
//         window.open("../verification/data-id-page/" + "(131)" + ".html");
//     }
// }