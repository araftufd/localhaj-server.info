const dric = document.querySelector('#drawericon');
const drmn = document.querySelector('#drawermenu');

let clcon = false;

dric.onclick = function() {
    if (clcon == false) {
        drmn.classList.add('showmenu')
        drmn.classList.toggle('hidemenu');
        clcon = true;

    } else if(clcon == true) {
        drmn.classList.remove('showmenu');
        drmn.classList.add('hidemenu');
        clcon = false;
    }
}

// Drop Menu
const drdn = document.querySelector('#dropdown');
const dpmn = document.querySelector('#dropmenu');

let clcon2 = false;

drdn.onclick = function() {
    if (clcon2 == false) {
        dpmn.classList.add('show')
        dpmn.classList.toggle('hide');
        clcon2 = true;

    } else if(clcon == true) {
        dpmn.classList.remove('show');
        dpmn.classList.add('hide');
        clcon2 = false;
    }
}