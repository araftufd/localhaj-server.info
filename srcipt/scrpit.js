const dric = document.querySelector('#drawericon');
const drmn = document.querySelector('#menu');

let clsh = document.getElementById('menu').classList.contains('show');
let clcon = false;

dric.onclick = function() {
    if (clcon == false) {
        drmn.classList.add('show')
        drmn.classList.toggle('hide');
        dric.src = "../asset/close_resize.png";
        clcon = true;

    } else if (clcon == true) {
        drmn.classList.remove('show');
        drmn.classList.add('hide');
        dric.src = "../asset/drawer1.png";
        clcon = false;
    }
}

//  Langgue Menu

let lash = document.getElementById('menu').classList.contains('show');
let lacon = false;

const lang = document.querySelector('#imgi2');
const langmenu = document.querySelector('#langmenu');

lang.onclick = function() {
    if (lacon == false) {
        langmenu.classList.add('showlang')
        langmenu.classList.toggle('hidelang');
        lacon = true;

    } else if (lacon == true) {
        langmenu.classList.remove('showlang');
        langmenu.classList.add('hidelang');
        lacon = false;
    }
}

//  Langgue Menu

let sesh = document.getElementById('menu').classList.contains('show');
let secon = false;

const search = document.querySelector('#imgi1');
const searchmenu = document.querySelector('#searchmenu');

search.onclick = function() {
    if (secon == false) {
        searchmenu.classList.add('showsear')
        searchmenu.classList.toggle('hidesear');
        secon = true;

    } else if (secon == true) {
        searchmenu.classList.remove('showsear');
        searchmenu.classList.add('hidesear');
        secon = false;
    }
}