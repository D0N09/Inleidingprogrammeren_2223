//hier beginnen de variabele//

var takekey = false;
var keylock = "locked";
var cijferslot = "locked";

//geef de variabele een waarde//
var code = 3124;


//hier staan de tv variabelen//
//hier zet ik de verschillende img in een array//
var tvKanalen = ["net1.png", "net2.png", "net3.png", "net4.png", "net5.png"];
var tvElement = document.querySelector("img.zender");

//deze regels worden als eerst gelezen//
var klikElement = document.querySelector("img.zappen");
console.log("klikElement", klikElement);
//de klikElement stuurt je door naar de functie GetRandomImg//
klikElement.addEventListener("click", showImage, false);


//var element word gekoppeld aan p element uit de html//
var pElement = document.querySelector("div:nth-of-type(11) p");
var pElement2 = document.querySelector("div:nth-of-type(12) p");
var pElement3 = document.querySelector("div:nth-of-type(13) p");


//var element word gekoppeld aan een img element uit de html//
var imgElement = document.querySelector("div:nth-of-type(4) img");
var imgElement2 = document.querySelector("div:nth-of-type(3) img");
var imgElement3 = document.querySelector("div:nth-of-type(2) img");


//var element word gekoppeld aan de div element uit de html//
var inputElement = document.querySelector("div.none")


//var element word gekoppeld aan de button element uit de html//
var submitElement = document.querySelector("div.none button.submit");
//wanneer de button word geklikt voert hij de functie codecontroleren uit//
submitElement.addEventListener("click", codecontroleren, false);


//var element word gekoppeld aan de img element uit de html//
var klikdeur = document.querySelector("img.door");
console.log("klikdeur", klikdeur);
klikdeur.addEventListener("click", deuropenen, false);

var klikslot = document.querySelector("img.lock");
klikslot.addEventListener("click", slotopenen, false);
console.log("klikslot", klikslot);

var klikcijferslot = document.querySelector("img.lock2");
klikcijferslot.addEventListener("click", cijferslotopenen, false);
console.log("klikcijferslot", klikcijferslot);

var kliksleutel = document.querySelector("img.key");
kliksleutel.addEventListener("click", sleutelpakken, false);
console.log("kliksleutel", kliksleutel);


//Hier beginnen de functies//

function deuropenen() {
    console.log("je klikt op de deur");
}

function slotopenen() {
    console.log("je klikt op het slot");
    //controleren of addkey is true//
    if (takekey == true) {
    //keylock is automatisch locked dus wanneer addkey == true, keylock = unlocked//
        keylock = "unlocked";
        speelgeluid()
        //var(pElement3), classlist voegt de class in de css toe//
        pElement3.classList.add("p_visible");
        //class none word toegepast//
        imgElement2.classList.add("none");
    } else {
        //var(pElement2), classlist voegt de class in de css toe//
        pElement2.classList.toggle("p_visible");
    }
}

function cijferslotopenen() {
    console.log("je klikt op het cijferslot");
    inputElement.classList.toggle("input_visible");
}

function codecontroleren() {
    //maak een variabele aan, die koppel ik aan de input type//
    //hierdoor roep ik de class waarde aan//
    var combinatie = document.querySelector(".waarde").value
    //dit maakt het zichtbaar dat ik via de console kan zien als er een waarde gestuurd wordt//
    console.log(combinatie)
    //controleren of de variabele combinatie gelijk is aan 3124
    if (combinatie == 3124) {
        //als combinatie goed is unlocked eht cijferslot//
        cijferslot = "unlocked";
        pElement3.classList.add("p_visible");
        //class none word toegepast//
        imgElement3.classList.add("none");
        inputElement.classList.toggle("p_visible");
    } else {
        pElement2.classList.toggle("p_visible");
    }
}

function speelgeluid() {
    //audio word getriggerd if keylock = unlocked//
    geluid.play();
}

function sleutelpakken() {
    console.log("je klikt op de sleutel");
    //var(pElement1), classlist voegt de class uit de css toe//
    pElement.classList.add("p_visible");
    //class none word toegepast//
    imgElement.classList.add("none");
    //addkey is true wanneer die word geklikt//
    takekey = true;
} 

//dit is de tv functie//
function showImage() {
    console.log("je klikt op de afstandsbediening");
    //met math.random pakken wij een random img (math=object en random=methode)//
    var randomImage = Math.random()* tvKanalen.length;
    //math.floor retourneert het grootste getal dat kleiner/gelijk is aan een bepaald getal//
    randomImage = Math.floor(randomImage);
    //de img word vervangen door een andere img//
    tvElement.src="./img/" + tvKanalen[randomImage];
}

//BRONNEN//
//Dieren afbeeldiningen heb ik van adobe cloud//
