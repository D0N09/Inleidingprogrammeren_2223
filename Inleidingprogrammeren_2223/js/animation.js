var addkey = false;
var keylock = "locked";
console.log("hallo");

var klikdeur = document.querySelector("img.door");
console.log("klikdeur", klikdeur);
klikdeur.addEventListener("click", deuropenen, false);

var klikslot = document.querySelector("img.lock");
console.log("klikslot", klikslot);
klikslot.addEventListener("click", slotopenen, false);

var klikcijferslot = document.querySelector("img.lock2")
console.log("klikcijferslot", klikcijferslot);

var kliksleutel = document.querySelector("img.key");
console.log("kliksleutel", kliksleutel);
kliksleutel.addEventListener("click", sleutelpakken, false);


function deuropenen() {
    console.log("je klikt op de deur");
}

function slotopenen() {
    console.log("je klikt op het slot");
    //controleren of addkey is true//
    if (addkey == true) {
    //keylock is automatisch locked dus wanneer addkey == true, keylock = unlocked//
        keylock = "unlocked";
        speelgeluid()
        document.querySelector("div:nth-of-type(3) img").style.display = "none";
    } else {
        document.querySelector("div:nth-of-type(12) p").style.visibility = "visible";
    }
}

function speelgeluid(){
    //audio word getriggerd if keylock = unlocked//
    geluid.play();
}

function sleutelpakken() {
    console.log("je klikt op de sleutel");
    document.querySelector("div:nth-of-type(11) p").style.visibility = "visible";
    document.querySelector("div:nth-of-type(4) img").style.display = "none";
    //addkey is true wanneer die word geklikt//
    addkey = true;
}







//Vragen voor mijn game://

//Moet de addEventlistener zo?//
// document.addEventListener("click", sleutelpakken(), false) {} //

//Hoe kan ik de tekst weer weg krijgen als je ergens anders op klikt?//


